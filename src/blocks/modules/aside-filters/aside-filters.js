$("input[name=price-range]").ionRangeSlider({
    type: "double",
    grid: false,
    min: 0,
    max: 99999,
    from: 0,
    to: 99999,
});

$("input[name=duration-range]").ionRangeSlider({
    type: "double",
    grid: false,
    min: 30,
    max: 180,
    from: 30,
    to: 180,
});

$('.aside-filters__more-btn').on('click', function () {
    $(this).hide();
    $(this).next().slideDown('300');
});

$('.filter-btn').on('click', function () {
    $('.aside-filters').addClass('aside-filters--active');
});
$('.aside-filters__close-btn').on('click', function () {
    $('.aside-filters').removeClass('aside-filters--active');
});