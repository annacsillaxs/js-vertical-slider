const btnUp = document.querySelector('.btn-up');
const btnDown = document.querySelector('.btn-down');
const sliderContainer = document.querySelector('.slider-container');
const slideRight = document.querySelector('.right-slide');
const slideLeft = document.querySelector('.left-slide');
const slidesLength = slideRight.querySelectorAll('div').length;

let activeSlideIndex = 0;

slideLeft.style.top = `-${(slidesLength - 1) * 100}vh`;

btnUp.addEventListener('click', () => changeSlide('up'));
btnDown.addEventListener('click', () => changeSlide('down'));

const changeSlide = (direction) => {
  const sliderHeight = sliderContainer.clientHeight;

  if (direction === 'up') {
    activeSlideIndex++;

    console.log('up')
    if (activeSlideIndex > slidesLength - 1) {
      activeSlideIndex = 0;
    }

  } else if (direction === 'down') {
    activeSlideIndex--;

    console.log('down')

    if (activeSlideIndex < 0) {
      activeSlideIndex = slidesLength - 1;
    }
  }

  slideRight.style.transform = `translateY(-${activeSlideIndex * sliderHeight}px)`;
  slideLeft.style.transform = `translateY(${activeSlideIndex * sliderHeight}px)`;
}