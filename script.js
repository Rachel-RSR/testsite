const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');
let currentSlide = 0;

function showNextSlide() {
  slides[currentSlide].classList.remove('active');
  dots[currentSlide].classList.remove('active-dot');
  currentSlide = (currentSlide + 1) % slides.length;
  slides[currentSlide].classList.add('active');
   dots[currentSlide].classList.add('active-dot');
}

setInterval(showNextSlide, 3000); 

dots.forEach((dot, index) => {
  dot.addEventListener('click', () => {
    slides[currentSlide].classList.remove('active');
    dots[currentSlide].classList.remove('active-dot');
    currentSlide = index;
    slides[currentSlide].classList.add('active');
    dots[currentSlide].classList.add('active-dot');
  });
});
