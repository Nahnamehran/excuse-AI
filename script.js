// Global variables
let currentSuggestions = [];
let selectedSuggestionIndex = -1;
let savedExcuses = JSON.parse(localStorage.getItem('savedExcuses') || '[]');

// DOM elements
const excuseInput = document.getElementById('excuseInput');
const suggestionsContainer = document.getElementById('suggestions');
const inputActions = document.getElementById('inputActions');
const copyBtn = document.getElementById('copyBtn');
const saveBtn = document.getElementById('saveBtn');
const categorySelect = document.getElementById('categorySelect');
const generateBtn = document.getElementById('generateBtn');
const generatedExcuse = document.getElementById('generatedExcuse');
const excuseText = document.getElementById('excuseText');
const copyGeneratedBtn = document.getElementById('copyGeneratedBtn');

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    setupEventListeners();
});

function setupEventListeners() {
    // Input events
    excuseInput.addEventListener('input', handleInputChange);
    excuseInput.addEventListener('keydown', handleKeyDown);
    excuseInput.addEventListener('blur', hideSuggestionsDelayed);
    
    // Button events
    copyBtn.addEventListener('click', () => copyToClipboard(excuseInput.value, 'input'));
    saveBtn.addEventListener('click', () => saveExcuse(excuseInput.value));
    generateBtn.addEventListener('click', generateRandomExcuse);
    copyGeneratedBtn.addEventListener('click', () => copyToClipboard(excuseText.textContent, 'generated'));
    
    // Update save button state
    updateSaveButtonState();
}

function handleInputChange(e) {
    const input = e.target.value;
    
    if (input.trim()) {
        inputActions.classList.remove('hidden');
        const suggestions = findSuggestions(input);
        displaySuggestions(suggestions);
    } else {
        inputActions.classList.add('hidden');
        hideSuggestions();
    }
    
    updateSaveButtonState();
}

function handleKeyDown(e) {
    if (currentSuggestions.length === 0) return;
    
    switch(e.key) {
        case 'ArrowDown':
            e.preventDefault();
            selectedSuggestionIndex = Math.min(selectedSuggestionIndex + 1, currentSuggestions.length - 1);
            updateSelectedSuggestion();
            break;
            
        case 'ArrowUp':
            e.preventDefault();
            selectedSuggestionIndex = Math.max(selectedSuggestionIndex - 1, -1);
            updateSelectedSuggestion();
            break;
            
        case 'Enter':
            if (selectedSuggestionIndex >= 0) {
                e.preventDefault();
                selectSuggestion(currentSuggestions[selectedSuggestionIndex].text);
            }
            break;
            
        case 'Escape':
            hideSuggestions();
            break;
    }
}

function findSuggestions(text) {
    if (text.length < 2) return [];
    
    const words = text.toLowerCase().split(' ');
    const lastWord = words[words.length - 1];
    const matches = [];
    
    excuseSuggestions.forEach(category => {
        category.patterns.forEach(pattern => {
            const patternWords = pattern.text.toLowerCase().split(' ');
            let confidence = 0.5;
            
            // Check for direct match
            if (pattern.text.toLowerCase().startsWith(text.toLowerCase())) {
                confidence = 0.9;
            }
            // Check for multiple word matches
            else if (words.filter(word => patternWords.includes(word)).length > 1) {
                confidence = 0.8;
            }
            // Check if pattern contains the input
            else if (pattern.text.toLowerCase().includes(text.toLowerCase())) {
                confidence = 0.7;
            }
            // Check if last word matches
            else if (patternWords.some(word => word.startsWith(lastWord))) {
                confidence = 0.6;
            }
            
            if (confidence > 0.5) {
                matches.push({
                    text: pattern.text,
                    category: category.name,
                    confidence: confidence
                });
            }
        });
    });
    
    // Remove duplicates and sort by confidence
    const uniqueMatches = matches
        .filter((match, index, self) => 
            self.findIndex(m => m.text === match.text) === index
        )
        .sort((a, b) => b.confidence - a.confidence)
        .slice(0, 8);
    
    return uniqueMatches;
}

function displaySuggestions(suggestions) {
    currentSuggestions = suggestions;
    selectedSuggestionIndex = -1;
    
    if (suggestions.length === 0) {
        hideSuggestions();
        return;
    }
    
    const html = suggestions.map((suggestion, index) => `
        <div class="suggestion-item" data-index="${index}">
            <div class="suggestion-content">
                <p class="suggestion-text">${suggestion.text}</p>
                <div class="suggestion-meta">
                    <span class="category-badge category-${suggestion.category.toLowerCase()}">${suggestion.category}</span>
                    <span class="confidence-score">${Math.round(suggestion.confidence * 100)}% match</span>
                </div>
            </div>
            <div class="suggestion-actions">
                <button class="action-btn copy-suggestion" data-text="${escapeHtml(suggestion.text)}" title="Copy to clipboard">
                    <i class="fas fa-copy"></i>
                </button>
                <button class="action-btn save-suggestion" data-text="${escapeHtml(suggestion.text)}" title="Save excuse">
                    <i class="fas fa-star ${savedExcuses.includes(suggestion.text) ? 'saved' : ''}"></i>
                </button>
            </div>
        </div>
    `).join('');
    
    suggestionsContainer.innerHTML = html;
    suggestionsContainer.classList.remove('hidden');
    
    // Add event listeners to suggestion items
    suggestionsContainer.querySelectorAll('.suggestion-item').forEach((item, index) => {
        item.addEventListener('click', () => selectSuggestion(suggestions[index].text));
        item.addEventListener('mouseenter', () => {
            selectedSuggestionIndex = index;
            updateSelectedSuggestion();
        });
    });
    
    // Add event listeners to action buttons
    suggestionsContainer.querySelectorAll('.copy-suggestion').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            copyToClipboard(btn.dataset.text, 'suggestion');
            btn.innerHTML = '<i class="fas fa-check"></i>';
            btn.classList.add('copied');
            setTimeout(() => {
                btn.innerHTML = '<i class="fas fa-copy"></i>';
                btn.classList.remove('copied');
            }, 2000);
        });
    });
    
    suggestionsContainer.querySelectorAll('.save-suggestion').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            saveExcuse(btn.dataset.text);
            btn.querySelector('i').classList.add('saved');
        });
    });
}

function updateSelectedSuggestion() {
    const items = suggestionsContainer.querySelectorAll('.suggestion-item');
    items.forEach((item, index) => {
        if (index === selectedSuggestionIndex) {
            item.classList.add('selected');
        } else {
            item.classList.remove('selected');
        }
    });
}

function selectSuggestion(text) {
    excuseInput.value = text;
    hideSuggestions();
    excuseInput.focus();
    updateSaveButtonState();
}

function hideSuggestions() {
    suggestionsContainer.classList.add('hidden');
    currentSuggestions = [];
    selectedSuggestionIndex = -1;
}

function hideSuggestionsDelayed() {
    // Delay hiding to allow clicking on suggestions
    setTimeout(hideSuggestions, 200);
}

function generateRandomExcuse() {
    const category = categorySelect.value;
    generateBtn.disabled = true;
    generateBtn.innerHTML = '<i class="fas fa-random fa-spin"></i> Generating...';
    
    setTimeout(() => {
        let availableExcuses = [];
        
        if (category === 'all') {
            excuseSuggestions.forEach(cat => {
                availableExcuses.push(...cat.patterns.map(p => ({
                    text: p.text,
                    category: cat.name
                })));
            });
        } else {
            const selectedCategory = excuseSuggestions.find(c => c.name.toLowerCase() === category);
            if (selectedCategory) {
                availableExcuses = selectedCategory.patterns.map(p => ({
                    text: p.text,
                    category: selectedCategory.name
                }));
            }
        }
        
        if (availableExcuses.length > 0) {
            const randomIndex = Math.floor(Math.random() * availableExcuses.length);
            const selectedExcuse = availableExcuses[randomIndex];
            
            excuseText.textContent = `"${selectedExcuse.text}"`;
            generatedExcuse.classList.remove('hidden');
        }
        
        generateBtn.disabled = false;
        generateBtn.innerHTML = '<i class="fas fa-random"></i> Generate Random Excuse';
    }, 800);
}

function copyToClipboard(text, source) {
    navigator.clipboard.writeText(text).then(() => {
        if (source === 'input') {
            copyBtn.innerHTML = '<i class="fas fa-check"></i> Copied!';
            setTimeout(() => {
                copyBtn.innerHTML = '<i class="fas fa-copy"></i> Copy Excuse';
            }, 2000);
        } else if (source === 'generated') {
            copyGeneratedBtn.innerHTML = '<i class="fas fa-check"></i> Copied!';
            setTimeout(() => {
                copyGeneratedBtn.innerHTML = '<i class="fas fa-copy"></i> Copy Excuse';
            }, 2000);
        }
    }).catch(err => {
        console.error('Failed to copy text:', err);
        // Fallback for older browsers
        const textArea = document.createElement('textarea');
        textArea.value = text;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
    });
}

function saveExcuse(text) {
    if (!text.trim()) return;
    
    if (!savedExcuses.includes(text)) {
        savedExcuses.push(text);
        localStorage.setItem('savedExcuses', JSON.stringify(savedExcuses));
    }
    
    updateSaveButtonState();
}

function updateSaveButtonState() {
    const currentText = excuseInput.value.trim();
    if (currentText && savedExcuses.includes(currentText)) {
        saveBtn.innerHTML = '<i class="fas fa-star"></i> Saved';
        saveBtn.classList.add('saved');
    } else {
        saveBtn.innerHTML = '<i class="fas fa-star"></i> Save Excuse';
        saveBtn.classList.remove('saved');
    }
}

function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

// Utility function to get category color class
function getCategoryColorClass(category) {
    const colorMap = {
        'work': 'category-work',
        'social': 'category-social',
        'family': 'category-family',
        'school': 'category-school',
        'health': 'category-health',
        'transportation': 'category-transportation',
        'technology': 'category-technology',
        'general': 'category-general'
    };
    return colorMap[category.toLowerCase()] || 'category-general';
}
