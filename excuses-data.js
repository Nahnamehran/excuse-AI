// Excuse data and patterns
const excuseSuggestions = [
    {
        name: "Work",
        patterns: [
            {
                text: "I'm sorry I'm late, but there was unexpected traffic on my usual route this morning.",
                keywords: ["late", "traffic", "morning", "route"]
            },
            {
                text: "I apologize for missing the deadline, but I had to handle an urgent family emergency.",
                keywords: ["deadline", "emergency", "family", "urgent"]
            },
            {
                text: "I couldn't attend the meeting because I was dealing with a technical issue that required immediate attention.",
                keywords: ["meeting", "technical", "issue", "immediate"]
            },
            {
                text: "I'm running behind schedule due to a last-minute client request that couldn't wait.",
                keywords: ["behind", "schedule", "client", "request"]
            },
            {
                text: "I had to take care of a sick family member and couldn't make it to the office on time.",
                keywords: ["sick", "family", "office", "time"]
            },
            {
                text: "My internet connection was down all morning, preventing me from joining the video call.",
                keywords: ["internet", "connection", "morning", "video call"]
            },
            {
                text: "I'm sorry for the delay, but I had to wait for an important delivery that couldn't be rescheduled.",
                keywords: ["delay", "delivery", "important", "rescheduled"]
            },
            {
                text: "I couldn't complete the project because I was waiting for crucial information from another department.",
                keywords: ["project", "waiting", "information", "department"]
            }
        ]
    },
    {
        name: "Social",
        patterns: [
            {
                text: "I can't make it to the party because I'm not feeling well and don't want to spread anything.",
                keywords: ["party", "feeling", "well", "spread"]
            },
            {
                text: "I'm sorry I have to cancel our plans, but something unexpected came up with my family.",
                keywords: ["cancel", "plans", "unexpected", "family"]
            },
            {
                text: "I won't be able to join you tonight because I have a prior commitment I forgot about.",
                keywords: ["join", "tonight", "commitment", "forgot"]
            },
            {
                text: "I have to skip the event because my car broke down and I can't find alternative transportation.",
                keywords: ["skip", "event", "car", "broke", "transportation"]
            },
            {
                text: "I'm really sorry, but I'm exhausted from work and need to get some rest tonight.",
                keywords: ["sorry", "exhausted", "work", "rest"]
            },
            {
                text: "I can't come out because I have to help my roommate with an emergency situation.",
                keywords: ["come out", "roommate", "emergency", "situation"]
            },
            {
                text: "I'm not feeling up to socializing today, I think I need some time to recharge.",
                keywords: ["socializing", "today", "time", "recharge"]
            },
            {
                text: "I have to cancel because my pet is sick and I need to take them to the vet.",
                keywords: ["cancel", "pet", "sick", "vet"]
            }
        ]
    },
    {
        name: "Family",
        patterns: [
            {
                text: "I'm sorry I can't visit this weekend, but I have a work project that needs my immediate attention.",
                keywords: ["visit", "weekend", "work", "project", "attention"]
            },
            {
                text: "I won't be able to make it to dinner because I'm feeling under the weather.",
                keywords: ["dinner", "feeling", "under", "weather"]
            },
            {
                text: "I have to postpone our get-together because my schedule got unexpectedly busy.",
                keywords: ["postpone", "get-together", "schedule", "busy"]
            },
            {
                text: "I can't come over today because I'm dealing with some personal matters that need resolution.",
                keywords: ["come over", "today", "personal", "matters"]
            },
            {
                text: "I'm sorry I missed your call, I was in an important meeting that ran longer than expected.",
                keywords: ["missed", "call", "meeting", "longer", "expected"]
            },
            {
                text: "I won't be able to help with moving because I hurt my back and shouldn't lift heavy things.",
                keywords: ["help", "moving", "hurt", "back", "lift"]
            },
            {
                text: "I can't make it to the family gathering because I have a prior engagement I can't get out of.",
                keywords: ["family", "gathering", "prior", "engagement"]
            },
            {
                text: "I'm running late because I had to take care of some urgent errands that couldn't wait.",
                keywords: ["running", "late", "urgent", "errands"]
            }
        ]
    },
    {
        name: "School",
        patterns: [
            {
                text: "I couldn't finish the assignment because my computer crashed and I lost all my work.",
                keywords: ["assignment", "computer", "crashed", "lost", "work"]
            },
            {
                text: "I'm sorry I missed class, but I was feeling sick and didn't want to infect others.",
                keywords: ["missed", "class", "feeling", "sick", "infect"]
            },
            {
                text: "I couldn't submit the paper on time because I had technical difficulties with the online portal.",
                keywords: ["submit", "paper", "time", "technical", "difficulties"]
            },
            {
                text: "I was absent because I had a family emergency that required my immediate presence.",
                keywords: ["absent", "family", "emergency", "immediate", "presence"]
            },
            {
                text: "I couldn't complete the reading because the library book I needed was already checked out.",
                keywords: ["reading", "library", "book", "checked", "out"]
            },
            {
                text: "I'm late with the project because I was waiting for my study partner to send their part.",
                keywords: ["late", "project", "waiting", "study", "partner"]
            },
            {
                text: "I couldn't attend the study group because I had to work extra hours to pay for tuition.",
                keywords: ["study", "group", "work", "extra", "hours", "tuition"]
            },
            {
                text: "I missed the exam because I wrote down the wrong date and wasn't prepared.",
                keywords: ["missed", "exam", "wrong", "date", "prepared"]
            }
        ]
    },
    {
        name: "Health",
        patterns: [
            {
                text: "I'm not feeling well today, I think I might be coming down with something.",
                keywords: ["feeling", "well", "today", "coming", "down"]
            },
            {
                text: "I have a terrible headache and can't concentrate on anything right now.",
                keywords: ["terrible", "headache", "concentrate", "right", "now"]
            },
            {
                text: "I'm experiencing some stomach issues and need to stay close to home.",
                keywords: ["experiencing", "stomach", "issues", "stay", "home"]
            },
            {
                text: "I hurt my back yesterday and can't sit or stand for long periods.",
                keywords: ["hurt", "back", "yesterday", "sit", "stand"]
            },
            {
                text: "I'm having an allergic reaction and need to rest until it clears up.",
                keywords: ["allergic", "reaction", "rest", "clears", "up"]
            },
            {
                text: "I didn't sleep well last night and I'm too exhausted to function properly.",
                keywords: ["sleep", "last", "night", "exhausted", "function"]
            },
            {
                text: "I'm feeling dizzy and lightheaded, so I should probably stay home today.",
                keywords: ["dizzy", "lightheaded", "stay", "home", "today"]
            },
            {
                text: "I have a dental emergency and need to see my dentist immediately.",
                keywords: ["dental", "emergency", "dentist", "immediately"]
            }
        ]
    },
    {
        name: "Transportation",
        patterns: [
            {
                text: "My car broke down on the way here and I'm waiting for roadside assistance.",
                keywords: ["car", "broke", "down", "waiting", "roadside", "assistance"]
            },
            {
                text: "There's a major accident on the highway causing significant delays.",
                keywords: ["major", "accident", "highway", "causing", "delays"]
            },
            {
                text: "I missed my train/bus and the next one doesn't arrive for another hour.",
                keywords: ["missed", "train", "bus", "next", "hour"]
            },
            {
                text: "My usual route is blocked due to construction work that started unexpectedly.",
                keywords: ["usual", "route", "blocked", "construction", "work"]
            },
            {
                text: "I'm stuck in traffic due to a police situation that has roads closed.",
                keywords: ["stuck", "traffic", "police", "situation", "roads", "closed"]
            },
            {
                text: "My ride canceled at the last minute and I can't find alternative transportation.",
                keywords: ["ride", "canceled", "last", "minute", "alternative", "transportation"]
            },
            {
                text: "There's severe weather affecting all public transportation in the area.",
                keywords: ["severe", "weather", "affecting", "public", "transportation"]
            },
            {
                text: "I'm having car trouble and need to wait for a mechanic to take a look.",
                keywords: ["car", "trouble", "wait", "mechanic", "look"]
            }
        ]
    },
    {
        name: "Technology",
        patterns: [
            {
                text: "My internet connection is down and I can't access the files I need.",
                keywords: ["internet", "connection", "down", "access", "files"]
            },
            {
                text: "My laptop crashed and I'm trying to recover my important documents.",
                keywords: ["laptop", "crashed", "trying", "recover", "documents"]
            },
            {
                text: "There's a power outage in my area affecting my ability to work from home.",
                keywords: ["power", "outage", "area", "affecting", "work", "home"]
            },
            {
                text: "My phone died and I couldn't receive your messages or calls.",
                keywords: ["phone", "died", "receive", "messages", "calls"]
            },
            {
                text: "The software I need for this task is not working and I'm troubleshooting the issue.",
                keywords: ["software", "task", "working", "troubleshooting", "issue"]
            },
            {
                text: "I'm having problems with my email and can't send or receive important messages.",
                keywords: ["problems", "email", "send", "receive", "important"]
            },
            {
                text: "The website/system is down for maintenance and I can't complete my work.",
                keywords: ["website", "system", "down", "maintenance", "complete"]
            },
            {
                text: "I accidentally deleted my files and I'm trying to restore them from backup.",
                keywords: ["accidentally", "deleted", "files", "restore", "backup"]
            }
        ]
    },
    {
        name: "General",
        patterns: [
            {
                text: "I'm dealing with some personal issues that require my full attention right now.",
                keywords: ["dealing", "personal", "issues", "require", "attention"]
            },
            {
                text: "Something unexpected came up and I need to handle it immediately.",
                keywords: ["unexpected", "came", "up", "handle", "immediately"]
            },
            {
                text: "I'm overwhelmed with other responsibilities and can't take on anything else.",
                keywords: ["overwhelmed", "responsibilities", "take", "on", "else"]
            },
            {
                text: "I made a prior commitment that I completely forgot about until now.",
                keywords: ["prior", "commitment", "forgot", "about", "now"]
            },
            {
                text: "I'm not in the right headspace to handle this properly at the moment.",
                keywords: ["right", "headspace", "handle", "properly", "moment"]
            },
            {
                text: "I underestimated the time this would take and I'm running behind schedule.",
                keywords: ["underestimated", "time", "take", "running", "behind"]
            },
            {
                text: "I'm waiting for important information that I need before I can proceed.",
                keywords: ["waiting", "important", "information", "need", "proceed"]
            },
            {
                text: "I had to prioritize something else that was more urgent and time-sensitive.",
                keywords: ["prioritize", "else", "urgent", "time-sensitive"]
            }
        ]
    }
];
