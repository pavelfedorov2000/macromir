$('.accordion__item-head').on('click', function () {
    $(this).parent().siblings().find('.accordion__item-content').slideUp('300');
    $(this).parent().siblings().find('.accordion__item-head').removeClass('accordion__item-head--active');
    $(this).next().slideToggle('300');
    $(this).toggleClass('accordion__item-head--active');
});

$('.questionary-form__item-title--drop').on('click', function () {
    $(this).next().slideToggle('300');
    $(this).toggleClass('questionary-form__item-title--active');
});