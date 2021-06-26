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