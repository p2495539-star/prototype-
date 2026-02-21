/* ===== FIX: Browser Back Button Blank Page (bfcache issue) ===== */
/* Must be at the very top of the file */
window.addEventListener("pageshow", function (event) {
    if (event.persisted) {
        window.location.reload();
    }
});

window.addEventListener("popstate", function () {
    window.location.reload();
});
/* ===== END FIX ===== */


// Feature toggle for easy reversion
const FEATURES_ENABLED = true;

// DOM Elements
const grid = document.getElementById("subjectGrid");
const searchInput = document.getElementById("searchInput");
const filterChips = document.querySelectorAll(".chip");
const noResults = document.getElementById("noResults");
const totalSubjectsEl = document.getElementById("totalSubjects");
const totalResourcesEl = document.getElementById("totalResources");
const visibleSubjectsEl = document.getElementById("visibleSubjects");

// State
let currentFilter = "all";
let searchQuery = "";

// Feature-specific state
let bookmarks = JSON.parse(localStorage.getItem("bookmarks") || "[]");

// Initialize
if (grid) {
    initializeStats();
    renderSubjects(subjects);
    setupEventListeners();
}

// Stats initialization
function initializeStats() {
    if (totalSubjectsEl) {
        totalSubjectsEl.textContent = subjects.length;
    }
    if (totalResourcesEl) {
        const totalResources = subjects.reduce((sum, subject) => sum + subject.resources.length, 0);
        totalResourcesEl.textContent = totalResources;
    }
}

// Render subjects with animation
function renderSubjects(list) {
    if (!grid) return;

    grid.innerHTML = "";

    if (list.length === 0) {
        if (noResults) noResults.style.display = "block";
        if (visibleSubjectsEl) visibleSubjectsEl.textContent = "0";
        return;
    }

    if (noResults) noResults.style.display = "none";
    if (visibleSubjectsEl) visibleSubjectsEl.textContent = list.length;

    list.forEach((subject, index) => {
        const card = document.createElement("div");
        card.className = "card";
        card.style.animationDelay = `${index * 0.05}s`;

        card.innerHTML = `
            <img src="${subject.image}" loading="lazy" alt="${subject.name}" onerror="this.src='https://via.placeholder.com/400x300/667eea/ffffff?text=${encodeURIComponent(subject.name)}'">
            <h3>${subject.name}</h3>
        `;

        card.onclick = () => navigateToSubject(subject.id);
        grid.appendChild(card);
    });
}

// Get category label
function getCategoryLabel(category) {
    const labels = {
        core: "Core",
        practical: "Practical",
        theory: "Theory"
    };
    return labels[category] || "General";
}
// navigate 
function navigateToSubject(id) {
    window.location.href = `subject.html?id=${id}`;
}
// Filter subjects
function filterSubjects() {
    let filtered = subjects;
    
    // Apply category filter
    if (currentFilter !== "all") {
        filtered = filtered.filter(s => s.category === currentFilter);
    }
    
    // Apply search filter
    if (searchQuery) {
        filtered = filtered.filter(s => 
            s.name.toLowerCase().includes(searchQuery) ||
            s.description.toLowerCase().includes(searchQuery)
        );
    }
    
    renderSubjects(filtered);
}

// Setup event listeners
function setupEventListeners() {
    // Search functionality handled with debounce below
    
    // Filter chips
    filterChips.forEach(chip => {
        chip.addEventListener("click", () => {
            // Remove active class from all chips
            filterChips.forEach(c => c.classList.remove("active"));
            
            // Add active class to clicked chip
            chip.classList.add("active");
            
            // Update filter
            currentFilter = chip.dataset.filter;
            filterSubjects();
        });
    });
}

// Subject page functionality
const params = new URLSearchParams(window.location.search);
const subjectId = params.get("id");

if (subjectId) {
    const subject = subjects.find(s => s.id === subjectId);
    const subjectTitle = document.getElementById("subjectTitle");
    const subjectDescription = document.getElementById("subjectDescription");
    const resourceList = document.getElementById("resourceList");
    const noResourcesEl = document.getElementById("noResources");
    
    if (subject) {
        // Update page title
        document.title = `${subject.name} - Diploma Resources`;
        
        // Update subject info
        if (subjectTitle) {
            subjectTitle.textContent = subject.name;
        }
        
        if (subjectDescription) {
            subjectDescription.textContent = subject.description;
        }
        
        // Render resources
        if (resourceList) {
            if (subject.resources.length === 0) {
                if (noResourcesEl) noResourcesEl.style.display = "block";
            } else {
                subject.resources.forEach((resource, index) => {
                    const resourceItem = document.createElement("a");
                    resourceItem.className = "resource-item";
                    resourceItem.href = resource.link;
                    resourceItem.target = "_blank";
                    resourceItem.rel = "noopener noreferrer";
                    resourceItem.style.animationDelay = `${index * 0.05}s`;
                    
                    resourceItem.innerHTML = `
                        <div class="resource-info">
                            <div class="resource-icon">
                                ${getResourceIcon(resource.type)}
                            </div>
                            <div>
                                <div class="resource-title">${resource.title}</div>
                                <div class="resource-meta">
                                    <span>${resource.type.toUpperCase()}</span>
                                    ${resource.size ? `<span>• ${resource.size}</span>` : ''}
                                </div>
                            </div>
                        </div>
                        <svg class="external-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3"/>
                        </svg>
                    `;
                    
                    resourceList.appendChild(resourceItem);
                });
            }
        }
    } else {
        // Subject not found
        if (subjectTitle) {
            subjectTitle.textContent = "Subject Not Found";
        }
        if (subjectDescription) {
            subjectDescription.textContent = "The requested subject could not be found.";
        }
        if (noResourcesEl) {
            noResourcesEl.style.display = "block";
            noResourcesEl.querySelector("h3").textContent = "Subject Not Found";
            noResourcesEl.querySelector("p").textContent = "Please return to the home page.";
        }
    }
}

// Get resource icon based on type
function getResourceIcon(type) {
    const icons = {
        pdf: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/>
                <path d="M14 2v6h6M9 13h6M9 17h6"/>
              </svg>`,
        doc: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/>
                <path d="M14 2v6h6M9 15h6"/>
              </svg>`,
        zip: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3"/>
              </svg>`,
        default: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M13 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V9z"/>
                    <path d="M13 2v7h7"/>
                  </svg>`
    };
    
    return icons[type] || icons.default;
}

// Add keyboard navigation
document.addEventListener("keydown", (e) => {
    // ESC key on subject page goes back
    if (e.key === "Escape" && subjectId) {
        window.location.href = "index.html";
    }
    
    // Ctrl/Cmd + K for search focus
    if ((e.ctrlKey || e.metaKey) && e.key === "k") {
        e.preventDefault();
        if (searchInput) {
            searchInput.focus();
        }
    }
});

// Add smooth scroll behavior
document.documentElement.style.scrollBehavior = "smooth";

// Lazy loading optimization
if ("IntersectionObserver" in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src || img.src;
                observer.unobserve(img);
            }
        });
    });
    
    // Observe images when they're added
    const observeImages = () => {
        document.querySelectorAll("img[loading='lazy']").forEach(img => {
            imageObserver.observe(img);
        });
    };
    
    // Initial observation
    setTimeout(observeImages, 100);
}

// Performance: Debounce search
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

if (searchInput) {
    const debouncedFilter = debounce(() => {
        searchQuery = searchInput.value.toLowerCase().trim();
        filterSubjects();
    }, 300);

    searchInput.addEventListener("input", debouncedFilter);
}

// ===== NEW FEATURES (Easy Revert) =====
if (FEATURES_ENABLED) {
    // 1. BOOKMARK SYSTEM
    function toggleBookmark(subjectId) {
        const index = bookmarks.indexOf(subjectId);
        if (index > -1) {
            bookmarks.splice(index, 1);
        } else {
            bookmarks.push(subjectId);
        }
        localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
        updateBookmarkUI();
    }

    function isBookmarked(subjectId) {
        return bookmarks.includes(subjectId);
    }

    function updateBookmarkUI() {
        document.querySelectorAll(".bookmark-btn").forEach(btn => {
            const subjectId = btn.dataset.subjectId;
            const isBookmarked = bookmarks.includes(subjectId);
            btn.classList.toggle("bookmarked", isBookmarked);
            btn.setAttribute("aria-label", isBookmarked ? "Remove from bookmarks" : "Add to bookmarks");
        });
    }



    // 3. SEARCH HIGHLIGHTING
    function highlightSearchTerm(text, searchTerm) {
        if (!searchTerm) return text;
        const regex = new RegExp(`(${searchTerm})`, 'gi');
        return text.replace(regex, '<mark>$1</mark>');
    }

    // 4. LOADING STATES
    function showLoadingState() {
        if (grid) {
            grid.innerHTML = '<div class="loading-spinner">Loading subjects...</div>';
        }
    }

    function hideLoadingState() {
        // Loading state is hidden when renderSubjects is called
    }

    // 5. ACCESSIBILITY IMPROVEMENTS
    function enhanceAccessibility() {
      // Improve focus management
        document.addEventListener("keydown", (e) => {
            if (e.key === "Tab") {
                document.body.classList.add("keyboard-navigation");
            }
        });

        document.addEventListener("mousedown", () => {
            document.body.classList.remove("keyboard-navigation");
        });

        // Announce dynamic content changes
        const announceChanges = (message) => {
            const announcement = document.createElement("div");
            announcement.setAttribute("aria-live", "polite");
            announcement.setAttribute("aria-atomic", "true");
            announcement.className = "sr-only";
            announcement.textContent = message;
            document.body.appendChild(announcement);
            setTimeout(() => document.body.removeChild(announcement), 1000);
        };

        // Store original filterSubjects to wrap with announcement
        const originalFilterSubjects = filterSubjects;
        filterSubjects = function() {
            originalFilterSubjects();
            const visibleCount = document.querySelectorAll("#subjectGrid .card").length;
            announceChanges(`${visibleCount} subjects found`);
        };
    }

    // Initialize new features
    function initializeNewFeatures() {
        // Add bookmark buttons to cards
        document.querySelectorAll(".card").forEach((card, index) => {
            const subject = subjects[index];
            if (subject) {
                const bookmarkBtn = document.createElement("button");
                bookmarkBtn.className = "bookmark-btn";
                bookmarkBtn.dataset.subjectId = subject.id;
                bookmarkBtn.setAttribute("aria-label", "Add to bookmarks");
                bookmarkBtn.innerHTML = `
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M19 21l-7-5-7 5V5a2 2 0 012-2h10a2 2 0 012 2z"/>
                    </svg>
                `;
                bookmarkBtn.onclick = (e) => {
                    e.stopPropagation();
                    toggleBookmark(subject.id);
                };
                card.appendChild(bookmarkBtn);
            }
        });

        updateBookmarkUI();



        // Enhance search with highlighting
        const originalRenderSubjects = renderSubjects;
        renderSubjects = function(list) {
            originalRenderSubjects(list);

            if (searchQuery) {
                document.querySelectorAll("#subjectGrid .card h3").forEach(title => {
                    const originalText = title.textContent;
                    title.innerHTML = highlightSearchTerm(originalText, searchQuery);
                });
            }
        };

        // Add loading states
        const originalFilterSubjects = filterSubjects;
        filterSubjects = function() {
            showLoadingState();
            setTimeout(() => {
                originalFilterSubjects();
                hideLoadingState();
            }, 200); // Small delay for visual feedback
        };

        // Initialize accessibility enhancements
        enhanceAccessibility();
    }

    // Initialize features when DOM is ready
    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", initializeNewFeatures);
    } else {
        initializeNewFeatures();
    }
}

// Chat functionality
const chatBox = document.getElementById("chatBox");
const chatMessages = document.getElementById("chatMessages");
const chatInput = document.getElementById("chatInput");
const sendBtn = document.getElementById("sendBtn");
const chatToggle = document.getElementById("chatToggle");

// Programming-related keywords for filtering
const programmingKeywords = [
    'programming', 'code', 'coding', 'javascript', 'python', 'java', 'c++', 'c#', 'php', 'ruby', 'html', 'css', 'sql',
    'algorithm', 'data structure', 'function', 'variable', 'loop', 'array', 'object', 'class', 'method', 'api',
    'database', 'framework', 'library', 'git', 'github', 'debug', 'error', 'bug', 'syntax', 'compiler', 'ide',
    'software', 'development', 'web', 'mobile', 'app', 'server', 'client', 'frontend', 'backend', 'fullstack',
    'react', 'angular', 'vue', 'node', 'express', 'django', 'flask', 'laravel', 'spring', 'bootstrap', 'jquery'
];

// Mock responses for programming questions
const mockResponses = [
    "That's a great question! In programming, it's important to consider best practices and maintainable code.",
    "I can help with that. Let me explain the concept step by step.",
    "Programming involves breaking down complex problems into smaller, manageable parts.",
    "Debugging is a crucial skill in software development. Always check your logic and test thoroughly.",
    "Version control with Git is essential for collaborative coding projects.",
    "Understanding data structures and algorithms is fundamental to efficient programming.",
    "Clean code principles make your programs more readable and maintainable.",
    "Testing your code thoroughly helps catch bugs early in development.",
    "Documentation is key to making your code accessible to other developers.",
    "Continuous learning is important in the ever-evolving field of software development."
];

// Check if question is programming-related
function isProgrammingQuestion(question) {
    const lowerQuestion = question.toLowerCase();
    return programmingKeywords.some(keyword => lowerQuestion.includes(keyword));
}

// Get random mock response
function getMockResponse() {
    return mockResponses[Math.floor(Math.random() * mockResponses.length)];
}

// Add message to chat
function addMessage(content, isUser = false) {
    const messageDiv = document.createElement("div");
    messageDiv.className = `message ${isUser ? 'user-message' : 'bot-message'}`;
    messageDiv.innerHTML = `<p>${content}</p>`;
    chatMessages.appendChild(messageDiv);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

// Handle sending message
function sendMessage() {
    const message = chatInput.value.trim();
    if (!message) return;

    // Add user message
    addMessage(message, true);
    chatInput.value = "";

    // Check if it's programming-related
    if (!isProgrammingQuestion(message)) {
        setTimeout(() => {
            addMessage("I'm sorry, I can only answer questions related to computer programming and software development. Please ask something about coding, algorithms, or software engineering!");
        }, 500);
        return;
    }

    // Simulate typing delay
    sendBtn.disabled = true;
    sendBtn.textContent = "Thinking...";

    setTimeout(() => {
        const response = getMockResponse();
        addMessage(response);
        sendBtn.disabled = false;
        sendBtn.textContent = "Send";
    }, 1000 + Math.random() * 2000); // Random delay between 1-3 seconds
}

// Event listeners
if (chatInput && sendBtn) {
    sendBtn.addEventListener("click", sendMessage);

    chatInput.addEventListener("keypress", (e) => {
        if (e.key === "Enter" && !e.shiftKey) {
            e.preventDefault();
            sendMessage();
        }
    });
}

// Toggle chat box
if (chatToggle) {
    chatToggle.addEventListener("click", () => {
        if (chatBox) {
            chatBox.style.display = chatBox.style.display === "none" ? "flex" : "none";
        }
    });
}




