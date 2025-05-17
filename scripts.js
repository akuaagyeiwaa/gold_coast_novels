
const openBtn = document.getElementById('open-reader');
const closeBtn = document.getElementById('close-reader');
const reader = document.getElementById('immersive-reader');
const readerText = document.getElementById('reader-text');

const increaseBtn = document.querySelector('.increase');
const decreaseBtn = document.querySelector('.decrease');
const resetBtn = document.querySelector('.reset');

let fontSize = 16;

openBtn.addEventListener('click', () => {
  reader.classList.add('active');
  readerText.style.fontSize = `${fontSize}px`;
});

closeBtn.addEventListener('click', () => {
  reader.classList.remove('active');
});

increaseBtn.addEventListener('click', () => {
  fontSize += 2;
  readerText.style.fontSize = `${fontSize}px`;
});

decreaseBtn.addEventListener('click', () => {
  fontSize = Math.max(12, fontSize - 2);
  readerText.style.fontSize = `${fontSize}px`;
});

resetBtn.addEventListener('click', () => {
  fontSize = 16;
  readerText.style.fontSize = `${fontSize}px`;
});

document.addEventListener("DOMContentLoaded", function () {
      const buttons = document.querySelectorAll(".accordion-btn");
      buttons.forEach(function (btn) {
        btn.addEventListener("click", function () {
          this.classList.toggle("active");
          const content = this.nextElementSibling;
          if (content.style.display === "block") {
            content.style.display = "none";
          } else {
            content.style.display = "block";
          }
        });
function handleKey(event) {
  if (event.key === "Enter") {
    const query = document.getElementById('searchInput').value.toLowerCase();

    if (query.includes("marita")) {
      window.location.href = "marita.html";  // ✅ Fixed filename
    } else if (query.includes("ethiopia")) {
      window.location.href = "ethiopia-unbound.html";
    } else if (query.includes("anglo") || query.includes("fanti")) {
      window.location.href = "the-anglo-fanti.html";
    } else if (query.includes("eighteen") || query.includes("pence")) {
      window.location.href = "eighteenpence.html";
    } else {
      alert("No matching novel found. Try typing a keyword like 'Marita' or 'Ethiopia'.");
    }
  }
}
      });
    });