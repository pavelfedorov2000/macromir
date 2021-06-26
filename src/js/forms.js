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