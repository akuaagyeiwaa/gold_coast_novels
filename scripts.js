// Reader and font size controls
class ImmersiveReader {
    constructor() {
        this.fontSize = 16;
        this.minFontSize = 12;
        this.maxFontSize = 32;
        this.initializeElements();
        this.setupEventListeners();
    }

    initializeElements() {
        this.openBtn = document.getElementById('open-reader');
        this.closeBtn = document.getElementById('close-reader');
        this.reader = document.getElementById('immersive-reader');
        this.readerText = document.getElementById('reader-text');
        this.increaseBtn = document.querySelector('.increase');
        this.decreaseBtn = document.querySelector('.decrease');
        this.resetBtn = document.querySelector('.reset');

        // Save initial text size for reset
        this.defaultFontSize = this.fontSize;
    }

    setupEventListeners() {
        this.openBtn?.addEventListener('click', () => this.openReader());
        this.closeBtn?.addEventListener('click', () => this.closeReader());
        this.increaseBtn?.addEventListener('click', () => this.increaseFontSize());
        this.decreaseBtn?.addEventListener('click', () => this.decreaseFontSize());
        this.resetBtn?.addEventListener('click', () => this.resetFontSize());
    }

    openReader() {
        this.reader?.classList.add('active');
        this.updateFontSize();
    }

    closeReader() {
        this.reader?.classList.remove('active');
    }

    increaseFontSize() {
        if (this.fontSize < this.maxFontSize) {
            this.fontSize += 2;
            this.updateFontSize();
        }
    }

    decreaseFontSize() {
        if (this.fontSize > this.minFontSize) {
            this.fontSize -= 2;
            this.updateFontSize();
        }
    }

    resetFontSize() {
        this.fontSize = this.defaultFontSize;
        this.updateFontSize();
    }

    updateFontSize() {
        if (this.readerText) {
            this.readerText.style.fontSize = `${this.fontSize}px`;
        }
    }
}

// Accordion functionality
class Accordion {
    constructor() {
        this.setupAccordion();
    }

    setupAccordion() {
        const buttons = document.querySelectorAll(".accordion-btn");
        buttons.forEach(btn => {
            btn.addEventListener("click", () => this.toggleAccordion(btn));
        });
    }

    toggleAccordion(button) {
        button.classList.toggle("active");
        const content = button.nextElementSibling;

        if (content) {
            const isExpanded = content.style.display === "block";
            content.style.display = isExpanded ? "none" : "block";

            // Accessibility
            button.setAttribute('aria-expanded', !isExpanded);
        }
    }
}

// Search functionality
class NovelSearch {
    constructor() {
        this.novels = {
            'marita': 'marita.html',
            'ethiopia': 'ethiopia-unbound.html',
            'anglo': 'the-anglo-fanti.html',
            'fanti': 'the-anglo-fanti.html',
            'eighteen': 'eighteenpence.html',
            'pence': 'eighteenpence.html'
        };
        this.setupSearch();
    }

    setupSearch() {
        const searchInput = document.getElementById('searchInput');
        if (searchInput) {
            searchInput.addEventListener('keypress', (event) => this.handleSearch(event));
        }
    }

    handleSearch(event) {
        if (event.key === "Enter") {
            const query = event.target.value.toLowerCase().trim();
            this.searchNovel(query);
        }
    }

    searchNovel(query) {
        for (const [keyword, url] of Object.entries(this.novels)) {
            if (query.includes(keyword)) {
                window.location.href = url;
                return;
            }
        }
        alert("No matching novel found. Try typing a keyword like 'Marita' or 'Ethiopia'.");
    }
}

// Initialize everything when DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
    const reader = new ImmersiveReader();
    const accordion = new Accordion();
    const search = new NovelSearch();
});