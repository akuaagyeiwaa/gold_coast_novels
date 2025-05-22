class ImmersiveReader {
    constructor() {
        this.fontSize = 16;
        this.minFontSize = 12;
        this.maxFontSize = 32;
        this.initializeElements();
        this.setupEventListeners();
    }

    initializeElements() {
        // Match your CSS classes
        this.openBtn = document.getElementById('open-reader');
        this.closeBtn = document.querySelector('.close-btn');
        this.reader = document.querySelector('.immersive-reader');
        this.readerText = document.querySelector('.immersive-reader .content');
        this.increaseBtn = document.querySelector('.increase');
        this.decreaseBtn = document.querySelector('.decrease');
        this.resetBtn = document.querySelector('.reset');

        // Add controls container if not present
        if (!document.querySelector('.controls')) {
            const controls = document.createElement('div');
            controls.className = 'controls';
            this.reader?.insertBefore(controls, this.readerText);
        }
    }

    setupEventListeners() {
        this.openBtn?.addEventListener('click', () => this.openReader());
        this.closeBtn?.addEventListener('click', () => this.closeReader());
        this.increaseBtn?.addEventListener('click', () => this.increaseFontSize());
        this.decreaseBtn?.addEventListener('click', () => this.decreaseFontSize());
        this.resetBtn?.addEventListener('click', () => this.resetFontSize());
    }

    openReader() {
        this.reader?.classList.add('active', 'fade-in');
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
        this.fontSize = 16;
        this.updateFontSize();
    }

    updateFontSize() {
        if (this.readerText) {
            this.readerText.style.fontSize = `${this.fontSize}px`;
        }
    }
}

// Search functionality matching your CSS
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

            // Add search icon if not present
            const searchWrapper = searchInput.parentElement;
            if (!searchWrapper.querySelector('.search-icon')) {
                const icon = document.createElement('span');
                icon.className = 'search-icon';
                icon.innerHTML = '🔍';
                searchWrapper.appendChild(icon);
            }
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
    const search = new NovelSearch();
});
// Add accordion functionality
document.querySelectorAll('.accordion-header').forEach(header => {
    header.addEventListener('click', () => {
        const content = header.nextElementSibling;
        header.classList.toggle('active');
        content.classList.toggle('active');
    });
});