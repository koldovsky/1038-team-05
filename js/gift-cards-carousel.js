const slides = [
    '<div class="gift-cards__carousel-item"><img class="gift-cards__carousel-item-image" src="img/gift-cards/image-for-carousel1.jpg" alt="Souce"></div>',
    '<div class="gift-cards__carousel-item"><img class="gift-cards__carousel-item-image" src="img/gift-cards/image-for-carousel2.jpg" alt="Souce"></div>',
    '<div class="gift-cards__carousel-item"><img class="gift-cards__carousel-item-image" src="img/gift-cards/image-for-carousel3.jpg" alt="Souce"></div>',
    '<div class="gift-cards__carousel-item"><img class="gift-cards__carousel-item-image" src="img/gift-cards/image-for-carousel4.jpg" alt="Souce"></div>',
    '<div class="gift-cards__carousel-item"><img class="gift-cards__carousel-item-image" src="img/gift-cards/image-for-carousel5.jpg" alt="Souce"></div>',
    '<div class="gift-cards__carousel-item"><img class="gift-cards__carousel-item-image" src="img/gift-cards/image-for-carousel6.jpg" alt="Souce"></div>',
    // '<div class="gift-cards__carousel-item"><img class="gift-cards__carousel-item-image" src="img/gift-cards/image-for-carousel7.jpg" alt="Souce"></div>',
    '<div class="gift-cards__carousel-item"><img class="gift-cards__carousel-item-image" src="img/gift-cards/image-for-carousel8.jpg" alt="Souce"></div>',
];

const carouselSlide = document.querySelector('.gift-cards__carousel-inner');


let currentSlide = 0;

function renderSlide() {
    carouselSlide.innerHTML = slides[currentSlide];
    if (window.innerWidth >= 475) {
        const secondSlideIdx = currentSlide + 1 >= slides.length ? 0 : currentSlide + 1;
        carouselSlide.innerHTML += slides[secondSlideIdx];
        if (window.innerWidth >= 768) {
            const thirdSlideIdx = secondSlideIdx + 1 >= slides.length ? 0 : secondSlideIdx + 1;
            carouselSlide.innerHTML += slides[thirdSlideIdx];
            if (window.innerWidth >= 992) {
                const fourSlideIdx = thirdSlideIdx + 1 >= slides.length ? 0 : thirdSlideIdx + 1;
                carouselSlide.innerHTML += slides[fourSlideIdx];
            }
        }
    }
};

renderSlide();

function nextSlide() {
    currentSlide = currentSlide + 1 >= slides.length ? 0 : currentSlide + 1;
    renderSlide();
};

function prevSlide() {
    currentSlide = currentSlide - 1 < 0 ? slides.length - 1 : currentSlide - 1;
    renderSlide();
};

const btnNext = document.querySelector('.gift-cards__carousel-button-next');
btnNext.addEventListener('click', nextSlide);

const btnPrev = document.querySelector('.gift-cards__carousel-button-prev');
btnPrev.addEventListener('click', prevSlide);

window.addEventListener('resize', renderSlide);
