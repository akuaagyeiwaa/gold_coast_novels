
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
K