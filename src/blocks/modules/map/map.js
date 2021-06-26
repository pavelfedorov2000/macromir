ymaps.ready(function () {

    if (typeof ymaps === 'undefined') {
        return;
    }

    const map = new ymaps.Map('map', {
        // координаты места
        center: [59.941961, 30.349498],
        zoom: 17
    }, {
        searchControlProvider: 'yandex#search'
    }),

        mapPlacemark = new ymaps.Placemark(map.getCenter(), {
            // текст, который показывается при нажатии на метку
            balloonContent: `
						
						`
        }, {
            iconLayout: 'default#image',
            // метка
            iconImageHref: "./img/icons/location.svg",
            // размеры метки
            iconImageSize: [42, 56],
            //iconImageOffset: [-5, -38]
        });

    map.geoObjects.add(mapPlacemark);

    //map.controls.remove('zoomControl');
    //map.controls.remove('smallMapDefaultSet');
    //map.controls.remove('routeButtonControl');
    //map.controls.remove('largeMapDefaultSet');
    // отключаем скролл
    map.behaviors.disable('scrollZoom');

    $('.event-info__address-map').fancybox({
        height: 600, afterShow: function () {

            const popupMap = new ymaps.Map('popup-map', {
                center: [59.941961, 30.349498],
                zoom: 15,
                behaviors: ["scrollZoom", "drag"],
            });

            popupMapPlacemark = new ymaps.Placemark(map.getCenter(), {
                // текст, который показывается при нажатии на метку
                balloonContent: `
						
						`
            }, {
                iconLayout: 'default#image',
                // метка
                iconImageHref: "./img/icons/location.svg",
                // размеры метки
                iconImageSize: [42, 56],
                //iconImageOffset: [-5, -38]
            });

            // Добавляем метку на карту
            popupMap.geoObjects.add(popupMapPlacemark);

        },
    });
});