$(function () {

    @@include('../blocks/modules/aside-filters/aside-filters.js')

    @@include('../blocks/modules/card/card.js')

    @@include('../blocks/modules/promo/promo.js')

    @@include('../blocks/modules/about/about.js')

    @@include('../blocks/modules/reviews/reviews.js')

    @@include('../blocks/modules/popups/popup.js')

    @@include('../blocks/modules/map/map.js')

    @@include('../blocks/modules/task/task.js')

    @@include('../blocks/modules/questionary/questionary.js')

    @@include('tabs.js')

    @@include('accordion.js')

    @@include('sliders.js')

    @@include('forms.js')

    /* @@include('calendar.js') */

    @@include('dinamic-adapt.js')

    $('#reserved-sum').text($('.executor-choice__price').find('span').text());
    $('.chat__executor-name').text($('#executor-firstname').text());
    $('.chosen-executor__name').text($('#executor-firstname').text() + ' ' + $('#executor-secondname').text());

    $('.filter-style').styler();
});



