const swiper = new Swiper('.gift-cards__carousel-swiper', {
    loop: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    simulateTouch: true,
    touchRadio: 1,
    touchAngle: 45,
    grabCursor: true,
    autoHeight: true,
    spaceBetween: 0,
    watchOverflow: true,
    breakpoints: {
        475: {
            slidesPerView: 2,
        },
        768: {
            slidesPerView: 4,
        },
        992: {
            slidesPerView: 6,
        },
    }
});