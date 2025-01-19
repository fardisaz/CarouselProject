const track = document.querySelector('.carousel__track');
const slides = Array.from(track.children);
const nextButton = document.querySelector('.carousel__button--right');
const prevButton = document.querySelector('.carousel__button--left');
const dotsNav = document.querySelector(".carousel__nav");
const dots = Array.from(dotsNav.children);
const slideWidth = slides[0].getBoundingClientRect().width;



console.log(slides[slides.length - 1]);
console.log(track.querySelector('.current-slide'));


//arrange the slides next to one another
const setSlidePosition = (slide, slideWidth, index) => {
    slide.style.left = slideWidth * index + 'px'
}
slides.forEach((slide, index) => {
    setSlidePosition(slide, slideWidth, index);
});

//click left move slides to left

//click right move slides to right

// if(currentSlide===slides[slides.length]){
//     nextButton.classList.add('hidden');
// }

const moveSlides = (currentSlide, slideToMove) => {
    const amountToMove = slideToMove.style.left;
    track.style.transform = 'translateX(-' + amountToMove + ')';
    currentSlide.classList.remove('current-slide');
    slideToMove.classList.add('current-slide');
}

nextButton.addEventListener('click', e => {
    const currentSlide = track.querySelector('.current-slide');

    const nextSlide = currentSlide.nextElementSibling;
    if (track.lastElementChild === currentSlide) {
        return;
    }
    else if (nextSlide === track.lastElementChild) {
        nextButton.classList.add('hidden');
        prevButton.classList.remove('hidden');
    }
    moveSlides(currentSlide, nextSlide);
})

prevButton.addEventListener('click', (e) => {

    const currentSlide = track.querySelector('.current-slide');
    const prevSlide = currentSlide.previousElementSibling;
    if (track.firstElementChild === currentSlide) {
        return;
    }
    else if (prevSlide === track.firstElementChild) {
        prevButton.classList.add('hidden');
        nextButton.classList.remove('hidden');
    }
    moveSlides(currentSlide, prevSlide);
})
//click nav indicators, move to that slide