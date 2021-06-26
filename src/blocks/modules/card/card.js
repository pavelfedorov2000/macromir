$('.card__favorite-btn').on('click', function (e) {
    $(this).parent().parent().parent().toggleClass('favorite');
});

$('.card__delete-btn').on('click', function () {
    $(this).parent().parent().parent().siblings().find('div.delete-box').fadeIn('300');
});

$('.delete-box__btn').on('click', function () {
    $('.delete-box').fadeOut('300');
});

$('.executor-card__icons-more').hover(function () {
    $(this).next().fadeToggle('slow');
});

$('.card__question-btn').hover(function () {
    $(this).next().fadeToggle('300');
});