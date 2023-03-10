const slides = document.querySelectorAll('.slide');
const prevArrow = document.querySelector('.arrow.prev');
const nextArrow = document.querySelector('.arrow.next');
let currentSlide = 0;

// Set initial slide as active
slides[currentSlide].classList.add('active');

// Add click event listeners to navigation arrows
prevArrow.addEventListener('click', () => {
  slides[currentSlide].classList.remove('active');
  currentSlide--;
  if (currentSlide < 0) {
    currentSlide = slides.length - 1;
  }
  slides[currentSlide].classList.add('active');
});
nextArrow.addEventListener('click', () => {
  slides[currentSlide].classList.remove('active');
  currentSlide++;
  if (currentSlide >= slides.length) {
    currentSlide = 0;
  }
  slides[currentSlide].classList.add('active');
});