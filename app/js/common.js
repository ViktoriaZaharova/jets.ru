// sliders
$('.air-exchange-slider').slick({
    slidesToShow: 1,
    variableWidth: true,
    prevArrow: '<button type="button" class="slick-prev"><svg class="svg-icon"><use xlink:href="img/sprite.svg#chevron-left"></use></svg></button>',
    nextArrow: '<button type="button" class="slick-next"><svg class="svg-icon"><use xlink:href="img/sprite.svg#chevron-right"></use></svg></button>',
    appendArrows: '.read-also-slider__nav'
});

$('.read-also-slider').slick({
    slidesToShow: 1,
    variableWidth: true,
    prevArrow: '<button type="button" class="slick-prev"><svg class="svg-icon"><use xlink:href="img/sprite.svg#chevron-left"></use></svg></button>',
    nextArrow: '<button type="button" class="slick-next"><svg class="svg-icon"><use xlink:href="img/sprite.svg#chevron-right"></use></svg></button>',
    appendArrows: '.read-also-slider__nav'
});


$('.news-slider').slick({
    slidesToShow: 1,
    dots: true,
    fade: true,
    prevArrow: '<button type="button" class="slick-prev slick-arrow-my slick-prev-my"><svg class="svg-icon"><use xlink:href="img/sprite.svg#chevron-left"></use></svg></button>',
    nextArrow: '<button type="button" class="slick-next slick-arrow-my slick-next-my"><svg class="svg-icon"><use xlink:href="img/sprite.svg#chevron-right"></use></svg></button>',
    appendArrows: '.news-slider__nav',
    appendDots: '.news-slider__nav',
});

$('.events-calendar-slider').slick({
    slidesToShow: 1,
    variableWidth: true,
    prevArrow: '<button type="button" class="slick-prev slick-arrow-my slick-prev-my"><svg class="svg-icon"><use xlink:href="img/sprite.svg#chevron-left"></use></svg></button>',
    nextArrow: '<button type="button" class="slick-next slick-arrow-my slick-next-my"><svg class="svg-icon"><use xlink:href="img/sprite.svg#chevron-right"></use></svg></button>',
    responsive: [
        {
            breakpoint: 576,
            settings: {
                arrows: false
            }
        }
    ]
});


$(document).ready(function () {
    $('.about-the-plane-slider').each(function () {
        $(this).slick({
            slidesToShow: 1,
            dots: true,
            fade: true,
            prevArrow: '<button type="button" class="slick-prev slick-arrow-my slick-prev-my"><svg class="svg-icon"><use xlink:href="img/sprite.svg#chevron-left"></use></svg></button>',
            nextArrow: '<button type="button" class="slick-next slick-arrow-my slick-next-my"><svg class="svg-icon"><use xlink:href="img/sprite.svg#chevron-right"></use></svg></button>',
            appendArrows: $(this).parents('.about-the-plane__gallery').find('.about-the-plane-slider__nav'),
            appendDots: $(this).parents('.about-the-plane__gallery').find('.about-the-plane-slider__nav'),
        });
    });
});

$('.gallery-airplane').slick({
    slidesToShow: 1,
    dots: true,
    fade: true,
    prevArrow: '<button type="button" class="slick-prev slick-arrow-my slick-prev-my"><svg class="svg-icon"><use xlink:href="img/sprite.svg#chevron-left"></use></svg></button>',
    nextArrow: '<button type="button" class="slick-next slick-arrow-my slick-next-my"><svg class="svg-icon"><use xlink:href="img/sprite.svg#chevron-right"></use></svg></button>',
    appendArrows: '.gallery-airplane__nav',
    appendDots: '.gallery-airplane__nav',
});

$(document).ready(function () {
    $('.popular-airplane-slider').each(function () {
        $(this).slick({
            slidesToShow: 1,
            prevArrow: '<button type="button" class="slick-prev"><svg class="svg-icon"><use xlink:href="img/sprite.svg#chevron-left"></use></svg></button>',
            nextArrow: '<button type="button" class="slick-next"><svg class="svg-icon"><use xlink:href="img/sprite.svg#chevron-right"></use></svg></button>',
            variableWidth: true,
            appendArrows: $(this).parent().find('.popular-airplane-slider__nav'),
        });
    });
});

// slick active
$(window).on('load resize', function () {
    if ($(window).width() < 576) {
        $('.news-card-slider:not(.slick-initialized)').slick({
            slidesToShow: 1,
            variableWidth: true,
            prevArrow: '<button type="button" class="slick-prev"><svg class="svg-icon"><use xlink:href="img/sprite.svg#chevron-left"></use></svg></button>',
            nextArrow: '<button type="button" class="slick-next"><svg class="svg-icon"><use xlink:href="img/sprite.svg#chevron-right"></use></svg></button>',
            appendArrows: '.news-card-slider__nav'
        });
    } else {
        $(".news-card-slider.slick-initialized").slick("unslick");
    }
});
// slick active


$('.empty-legs-tabs .nav-item').on('click', function () {
    $(this).parents('.empty-legs').addClass('bg-black');
});

$('.empty-legs-tabs .nav-item:first-child').on('click', function () {
    $(this).parents('.empty-legs').removeClass('bg-black');
});

// cookie
$('.btn-agree').on('click', function (e) {
    e.preventDefault();
    $('.cookie').fadeOut();
});

// mobile menu
$('.btn-burger').on('click', function () {
    $('.mobile-menu').fadeToggle();
});

$('.btn-close-menu').on('click', function () {
    $('.mobile-menu').fadeOut();
});


// accordion
$('.accordion-my [data-toggle="collapse"]').click(function (e) {
    if ($(window).width() >= 576) {
        e.preventDefault();
        e.stopPropagation();
    }
});

$('.btn-sidebar').on('click', function (e) {
    e.preventDefault();
    $('.sidebar').slideToggle();
});

// datepicker
$(function () {
    //Сменим язык календаря на русский
    $.datepicker.setDefaults(
        {
            closeText: 'Закрыть',
            prevText: '',
            currentText: 'Сегодня',
            monthNames: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь',
                'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'],
            monthNamesShort: ['Янв', 'Фев', 'Мар', 'Апр', 'Май', 'Июн',
                'Июл', 'Авг', 'Сен', 'Окт', 'Ноя', 'Дек'],
            dayNames: ['воскресенье', 'понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота'],
            dayNamesShort: ['вск', 'пнд', 'втр', 'срд', 'чтв', 'птн', 'сбт'],
            dayNamesMin: ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'],
            weekHeader: 'Не',
            dateFormat: 'dd.mm.yy',
            firstDay: 1,
            isRTL: false,
            showMonthAfterYear: false,
            yearSuffix: ''
        });
    $(".datepicker").datepicker();
});

$(document).ready(function () {

    $('.slider-range').slider({
        range: true,
        min: 0,
        max: 40000,
        values: [0, 20000],
        classes: {
            "ui-slider-handle": "ui-corner-all"
        },
        slide: function (event, ui) {
            //Поле минимального значения
            $(".dec1").val(ui.values[0]);
            //Поле максимального значения
            $(".dec2").val(ui.values[1]);
        }
    });

    $(".dec1").val($(".slider-range").slider("values", 0));
    $(".dec2").val($(".slider-range").slider("values", 1));

});

