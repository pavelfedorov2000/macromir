$('.gallery-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: '<button class="gallery-slider__btn"><svg width="11" height="20" viewBox="0 0 11 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 19L10 10L0.999999 1" stroke="none" stroke- width="2" stroke - linecap="round" stroke - linejoin="round" /></svg></button>',
    fade: true,
    asNavFor: '.gallery-thumbs',
    responsive: [
        {
            breakpoint: 575,
            settings: {
                arrows: false,
                fade: false,
                centerPadding: 50,
                asNavFor: false,
            }
        },
    ]
});

$('.gallery-thumbs').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: false,
    asNavFor: '.gallery-slider',
    focusOnSelect: true,
    variableWidth: true,
});

$('[data-fancybox="gallery"]').fancybox();