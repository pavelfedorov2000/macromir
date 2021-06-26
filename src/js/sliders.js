$(window).on('resize', function (e) {
    // Переменная, по которой узнаем запущен слайдер или нет.
    // Храним её в data
    var init = $(".my-study__cards").data('init-slider');
    // Если мобильный
    if (window.innerWidth < 575) {
        // Если слайдер не запущен
        if (init != 1) {
            // Запускаем слайдер и записываем в data init-slider = 1
            $('.my-study__cards').slick({
                arrows: false,
                dots: true,
            }).data({ 'init-slider': 1 });
        }
    }
    // Если не мобайл
    else {
        // Если слайдер запущен
        if (init == 1) {
            // Разрушаем слайдер и записываем в data init-slider = 0
            $('.my-study__cards').slick('unslick').data({ 'init-slider': 0 });
        }
    }
}).trigger('resize');