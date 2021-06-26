$('.about-event__more').on('click', function () {
    $(this).hide();
    $(this).next().slideDown('300');
});