$(function () {

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

    $('.promo__favorite-btn').on('click', function () {
    $(this).toggleClass('promo__favorite-btn--active');
});

    $('.about-event__more').on('click', function () {
    $(this).hide();
    $(this).next().slideDown('300');
});

    $('.reviews__more').on('click', function () {
    $(this).hide();
    $(this).next().slideDown('300');
});

    $('.popup-link').fancybox();

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

    $('#enter').on('click', function () {
    $('.questionary-form__register').hide();
    $('.questionary-form__enter').show();
});
$('#register').on('click', function () {
    $('.questionary-form__enter').hide();
    $('.questionary-form__register').show();
});
$('#forgot-password').on('click', function () {
    $(this).hide();
    $(this).parent().removeClass('questionary-form__action--sb');
    $('.password-recovery').show();
});
$('.password-recovery__close').on('click', function () {
    $(this).parent().hide();
});
$('.password-recovery__form-btn').on('click', function () {
    $(this).parent().hide();
    $('.password-recovery__info-text').hide();
    $('.password-recovery__title').after('<p class="password-recovery__success">На электронный адрес <span class="recovery-email"></span> было отправлено письмо со ссылкой для смены пароля</p>');
    var $recovery_email = $('.password-recovery__form-input').val();
    $('.recovery-email').text($recovery_email);
});

    $('.tab').on('click', function (e) {
    e.preventDefault();

    $($(this).siblings()).removeClass('tab--active');
    $('.tabs-content').removeClass('tabs-content--active');

    $(this).addClass('tab--active');
    $($(this).attr('href')).addClass('tabs-content--active');
});

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

    $.validator.addMethod("minlenghtphone", function (value, element) {
    return value.replace(/\D+/g, '').length > 10;
});
$.validator.addMethod("requiredphone", function (value, element) {
    return value.replace(/\D+/g, '').length > 1;
});

function validateForms(form) {
    $(form).validate({
        rules: {
            name: "required",
            phone: {
                requiredphone: true,
                minlenghtphone: true,
            },
            email: {
                required: true,
                email: true,
            },
            socials: "required",
            specialization: "required",
            complaint_message: "required",
            new_password: {
                required: true,
                minlength: 8
            },
            confirm_password: {
                required: true,
                equalTo: "#new_password"
            },
        },
        submitHandler: function () {
            $('.register-popup__bonuses-btn').addClass('register-popup__bonuses-btn--success');
            $('.register-popup__content-inner').hide();
            $('.register-popup__success').show();
            $('.change-password__main').hide();
            $('.change-password__success').show();
        },
    });
}

validateForms('#register-popup form');
validateForms('#speaker-popup form');
validateForms('#complain-popup form');
validateForms('#change-password');

$('.register-popup__bonuses-btn').on('click', function () {
    var $billAmount = $('.bill-amount').text();
    var $bonusInput = $('#bonus-amount');
    var $bonusInputVal = $bonusInput.val();
    if ($bonusInputVal > $billAmount) {
        $bonusInput.addClass('register-popup__bonuses-input--invalid');
        $('.register-popup__bonuses-wrap').after('<span class="bonus-error">Недостаточно</span>');
    } else {
        $bonusInput.removeClass('register-popup__bonuses-input--invalid');
        $('.bonus-error').hide();
        $('.register-popup__bonuses-btn').addClass('register-popup__bonuses-btn--success');
        $('.register-popup__bonuses-btn').text('Списано');
    }
    return false;
});

$('.password-recovery__form-btn').on('click', function (e) {
    e.preventDefault();
});

$('#register-popup form').submit(function (e) {
    e.preventDefault();
    var name = $('.register-popup__form-input[name=name]').val();
    var phone = $('.register-popup__form-input[name=phone]').val();
    var email = $('.register-popup__form-input[name=email]').val();
    var bonus = $('.register-popup__bonuses-input[name=bonus]').val();

    $.ajax({
        type: "POST",
        url: "/register.php",
        data: {
            name: name,
            phone: phone,
            email: email,
            bonus: bonus,
        },
    });
    $(this).find("input").val("");
    $('form').trigger('reset');
});

$('#speaker-popup form').submit(function (e) {
    e.preventDefault();
    var name = $('.register-popup__form-input[name=name]').val();
    var phone = $('.register-popup__form-input[name=phone]').val();
    var email = $('.register-popup__form-input[name=email]').val();
    var bonus = $('.register-popup__bonuses-input[name=bonus]').val();
    var socials = $('.speaker-popup__form-input[name=socials]').val();
    var specialization = $('.speaker-popup__form-input[name=specialization]').val();
    var experience = $('.speaker-popup__form-input[name=experience]').val();
    var question = $('.speaker-popup__form-textarea[name=question]').val();
    var file = $('.popup__form-file').val();

    $.ajax({
        type: "POST",
        url: "/speaker-register.php",
        data: {
            name: name,
            phone: phone,
            email: email,
            bonus: bonus,
            socials: socials,
            specialization: specialization,
            experience: experience,
            file: file,
            question: question,
        },
    });
    $(this).find("input").val("");
    $('form').trigger('reset');
    $.fancybox.close($('#speaker-popup'));
});

$('#copmlain-popup form').submit(function (e) {
    e.preventDefault();
    var complaint_message = $('#complaint_message').val();

    $.ajax({
        type: "POST",
        url: "/complain.php",
        data: {
            complaint_message: complaint_message,
        },
    });
    $(this).find("textarea").val("");
    $('form').trigger('reset');
});

$('#change-password').submit(function (e) {
    e.preventDefault();
    var new_password = $('input[name=new_password]').val();

    $.ajax({
        type: "POST",
        url: "/complain.php",
        data: {
            new_password: new_password,
        },
        success: function () {
            $('.change-password__main').fadeOut('slow');
            $('.change-password__success').fadeIn('slow');
        },
    });
    $(this).find("input").val("");
    $('form').trigger('reset');
});

$('.executor-choice__form').submit(function (e) {
    e.preventDefault();
    $.fancybox.close($('#executor-choice'));
    $.fancybox.open($('#executor-success'));
});

$('.executor-success__btn').on('click', function () {
    $.fancybox.close($('#executor-success'));
});

$('.register-popup__success-btn').on('click', function () {
    $.fancybox.close();
    $('.register-popup__success').hide();
    $('.register-popup__content-inner').show();
    $('.register-popup__bonuses-btn').removeClass('register-popup__bonuses-btn--success');
    $('.register-popup__bonuses-btn').text('Списать');
});

$.fn.setCursorPosition = function (pos) {
    if ($(this).get(0).setSelectionRange) {
        $(this).get(0).setSelectionRange(pos, pos);
    } else if ($(this).get(0).createTextRange) {
        var range = $(this).get(0).createTextRange();
        range.collapse(true);
        range.moveEnd('character', pos);
        range.moveStart('character', pos);
        range.select();
    }
};

$("input[name=phone]").click(function () {
    $(this).setCursorPosition(4);
}).mask("+7 (999) 999-99-99");

    /* function getDayName(year, month, day) {
                return [
                    'Вс',
                    'Пн',
                    'Вт',
                    'Ср',
                    'Чт',
                    'Пт',
                    'Сб'
                ][new Date(year, month, day).getDay()];
            }

            function generateSequence(data, n) {
                const sequence = [];

                const daysInMonth = {
                    prev: new Date(data.year, data.month - 1, 0).getDate(),
                    current: new Date(data.year, data.month, 0).getDate()
                };

                const half = Math.floor(n / 2);

                for (let i = 0; i < n; i++) {

                    let current = {
                        number: data.day - half + i,
                        name: '',
                    };

                    if (current.number > daysInMonth.current) {
                        current.number %= daysInMonth.current;
                        current.name = getDayName(data.year, data.month, current.number);
                    }

                    else if (current.number <= 0) {
                        current.number = daysInMonth.prev + current.number;
                        current.name = getDayName(data.year, data.month - 2, current.number);
                    }

                    else {
                        current.name = getDayName(data.year, data.month - 1, current.number);
                    }


                    sequence.push(current);
                }


                return sequence;
            }

            function fillCalendar(calendar, sequence) {

                for (let i = 0; i < sequence.length; i++) {
                    let calendarItem = document.createElement('div');
                    calendarItem.className = 'event-info__date-item';
                    let weekdayEl = document.createElement('div');
                    weekdayEl.className = 'event-info__date-weekday';
                    weekdayEl.innerText = sequence[i].name;
                    calendarItem.appendChild(weekdayEl);
                    let numberEl = document.createElement('div');
                    numberEl.className = 'event-info__date-num';
                    numberEl.innerText = sequence[i].number;
                    calendarItem.appendChild(numberEl);

                    if (Math.floor(sequence.length / 2) == i) {
                        numberEl.classList.add('event-info__date-num--active');
                    }

                    calendar.appendChild(calendarItem);
                }

            }

            const data = {
                day: 20,
                month: 5,
                year: 2021,
                time: '12:00',
            };

            fillCalendar(
                document.querySelector('.event-info__date-list'),
                generateSequence(data, 7)
            );

            let eventMonthYear = document.querySelector('.event-info__date-value');

            function formatMonth() {
                const monthNames = [
                    "Январь", "Февраль", "Март",
                    "Апрель", "Май", "Июнь", "Июль",
                    "Август", "Сентябрь", "Октябрь",
                    "Ноябрь", "Декабрь"
                ];

                let eventYear = data.year;
                let monthIndex = data.month;
                eventMonthYear.textContent = `${monthNames[monthIndex - 1]}, ${eventYear}`;
            }

            formatMonth(data);

            let eventTime = document.querySelector('.event-info__time-value');
            eventTime.textContent = data.time; */

    function DynamicAdapt(type) {
    this.type = type;
}

DynamicAdapt.prototype.init = function () {
    const _this = this;
    // массив объектов
    this.оbjects = [];
    this.daClassname = "_dynamic_adapt_";
    // массив DOM-элементов
    this.nodes = document.querySelectorAll("[data-da]");

    // наполнение оbjects объктами
    for (let i = 0; i < this.nodes.length; i++) {
        const node = this.nodes[i];
        const data = node.dataset.da.trim();
        const dataArray = data.split(",");
        const оbject = {};
        оbject.element = node;
        оbject.parent = node.parentNode;
        оbject.destination = document.querySelector(dataArray[0].trim());
        оbject.breakpoint = dataArray[1] ? dataArray[1].trim() : "767";
        оbject.place = dataArray[2] ? dataArray[2].trim() : "last";
        оbject.index = this.indexInParent(оbject.parent, оbject.element);
        this.оbjects.push(оbject);
    }

    this.arraySort(this.оbjects);

    // массив уникальных медиа-запросов
    this.mediaQueries = Array.prototype.map.call(this.оbjects, function (item) {
        return '(' + this.type + "-width: " + item.breakpoint + "px)," + item.breakpoint;
    }, this);
    this.mediaQueries = Array.prototype.filter.call(this.mediaQueries, function (item, index, self) {
        return Array.prototype.indexOf.call(self, item) === index;
    });

    // навешивание слушателя на медиа-запрос
    // и вызов обработчика при первом запуске
    for (let i = 0; i < this.mediaQueries.length; i++) {
        const media = this.mediaQueries[i];
        const mediaSplit = String.prototype.split.call(media, ',');
        const matchMedia = window.matchMedia(mediaSplit[0]);
        const mediaBreakpoint = mediaSplit[1];

        // массив объектов с подходящим брейкпоинтом
        const оbjectsFilter = Array.prototype.filter.call(this.оbjects, function (item) {
            return item.breakpoint === mediaBreakpoint;
        });
        matchMedia.addListener(function () {
            _this.mediaHandler(matchMedia, оbjectsFilter);
        });
        this.mediaHandler(matchMedia, оbjectsFilter);
    }
};

DynamicAdapt.prototype.mediaHandler = function (matchMedia, оbjects) {
    if (matchMedia.matches) {
        for (let i = 0; i < оbjects.length; i++) {
            const оbject = оbjects[i];
            оbject.index = this.indexInParent(оbject.parent, оbject.element);
            this.moveTo(оbject.place, оbject.element, оbject.destination);
        }
    } else {
        for (let i = 0; i < оbjects.length; i++) {
            const оbject = оbjects[i];
            if (оbject.element.classList.contains(this.daClassname)) {
                this.moveBack(оbject.parent, оbject.element, оbject.index);
            }
        }
    }
};

// Функция перемещения
DynamicAdapt.prototype.moveTo = function (place, element, destination) {
    element.classList.add(this.daClassname);
    if (place === 'last' || place >= destination.children.length) {
        destination.insertAdjacentElement('beforeend', element);
        return;
    }
    if (place === 'first') {
        destination.insertAdjacentElement('afterbegin', element);
        return;
    }
    destination.children[place].insertAdjacentElement('beforebegin', element);
}

// Функция возврата
DynamicAdapt.prototype.moveBack = function (parent, element, index) {
    element.classList.remove(this.daClassname);
    if (parent.children[index] !== undefined) {
        parent.children[index].insertAdjacentElement('beforebegin', element);
    } else {
        parent.insertAdjacentElement('beforeend', element);
    }
}

// Функция получения индекса внутри родителя
DynamicAdapt.prototype.indexInParent = function (parent, element) {
    const array = Array.prototype.slice.call(parent.children);
    return Array.prototype.indexOf.call(array, element);
};

// Функция сортировки массива по breakpoint и place 
// по возрастанию для this.type = min
// по убыванию для this.type = max
DynamicAdapt.prototype.arraySort = function (arr) {
    if (this.type === "min") {
        Array.prototype.sort.call(arr, function (a, b) {
            if (a.breakpoint === b.breakpoint) {
                if (a.place === b.place) {
                    return 0;
                }

                if (a.place === "first" || b.place === "last") {
                    return -1;
                }

                if (a.place === "last" || b.place === "first") {
                    return 1;
                }

                return a.place - b.place;
            }

            return a.breakpoint - b.breakpoint;
        });
    } else {
        Array.prototype.sort.call(arr, function (a, b) {
            if (a.breakpoint === b.breakpoint) {
                if (a.place === b.place) {
                    return 0;
                }

                if (a.place === "first" || b.place === "last") {
                    return 1;
                }

                if (a.place === "last" || b.place === "first") {
                    return -1;
                }

                return b.place - a.place;
            }

            return b.breakpoint - a.breakpoint;
        });
        return;
    }
};

const da = new DynamicAdapt("max");
da.init();

    $('#reserved-sum').text($('.executor-choice__price').find('span').text());
    $('.chat__executor-name').text($('#executor-firstname').text());
    $('.chosen-executor__name').text($('#executor-firstname').text() + ' ' + $('#executor-secondname').text());

    $('.filter-style').styler();
});



