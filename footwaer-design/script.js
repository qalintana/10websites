const slides = document.querySelectorAll('.slide');

const left = document.getElementById('left');
const right = document.getElementById('right');

const carousel = document.getElementById('carousel');

const SLIDE_COUNT = slides.length;

let current_slide = 0;

left.addEventListener('click', () => {
  current_slide++;

  if (current_slide > SLIDE_COUNT - 1) {
    current_slide = 0;
  }
  updateCarousel();
});

right.addEventListener('click', () => {
  current_slide--;

  if (current_slide < 0) {
    current_slide = SLIDE_COUNT - 1;
  }
  updateCarousel();
});

function updateCarousel() {
  carousel.style.transform = `translateX(${
    -current_slide * slides[0].offsetWidth
  }px)`;

  document.body.style.background = `#${slides[current_slide].getAttribute(
    'data-bg'
  )}`;
}
