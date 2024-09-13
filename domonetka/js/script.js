'use strict'

// плавная прокрутка
$(document).ready(function() {
    $('a[href*="#b-form"]').click(function (evt) {
        evt.preventDefault();
        $("html, body").animate({scrollTop: $('#b-form').offset().top}, 1000);
        return false;
    });
});

// таймер товара 
$(function (){
    var $time = $('.b-quantity-numb').attr('data-time') * 1000;
    setInterval(function(){
        if ($('.b-quantity-numb').html() < 1) {
            return;
        } else {
            var $numb = $('.b-quantity-numb').html();
            $('.b-quantity-numb').html($numb - 1);
        }
    }, $time);
});

// block5 слайдер
var b_art1 = document.querySelector('.b-art1');
var b_art2 = document.querySelector('.b-art2');
var b_art1Slid = $('.b-art1').find('.b-article');
var b_art2Slid = $('.b-art2').find('.b-article');
var b_art1LeftBtn = $('#b-1-l');
var b_art1RightBtn = $('#b-1-r');
var b_art2LeftBtn = $('#b-2-l');
var b_art2RightBtn = $('#b-2-r');
var b_artWebLeftBtn = $('#b-3-l');
var b_artWebRightBtn = $('#b-3-r');
var b_art1Btn = document.querySelector('.b-zero-btn-1').children;
var b_art2Btn = document.querySelector('.b-zero-btn-2').children;
var b_web_slider = document.querySelectorAll('.b-web-slider');

function b_sliders2_Left(block, btn) {
    btn.on('click', function() {
        var position = 0;
        var positionNext = 0;
        for (var i=0; i < block.length; i++) {
            if (block[i].className == "b-web-slider b-active2") {
                position = i;
            }
        }
        if (position == 0) {
            positionNext = position + 1;
        } else {
            positionNext = (btn.length - 1);
        }
        block[position].classList.remove("b-active2");
        block[positionNext].classList.add("b-active2");
    });    
}
function b_sliders2_Right(block, btn) {
    btn.on('click', function() {
        var position = 0;
        var positionNext = 0;
        for (var i=0; i < block.length; i++) {
            if (block[i].className == "b-web-slider b-active2") {
                position = i;
            }
        }
        if (position == (block.length - 1)) {
            positionNext = 0;
        } else {
            positionNext = position + 1;
        }
        block[position].classList.remove("b-active2");
        block[positionNext].classList.add("b-active2");
    });    
}

b_sliders2_Left(b_web_slider, b_artWebLeftBtn);
b_sliders2_Right(b_web_slider, b_artWebRightBtn);

// переменные слайдеров
var b_comments = document.querySelector('.b-block9'); 
var b_commentsBtn = document.querySelector('.b-btn-box').children;
var b_commentsSliders = document.querySelectorAll('.b-comment');

// скрываем слайдер для будуюещго появления в web
$(function(){
    if ($(window).width() > 991){
        $('.b-slider').each(function(index){
            $(this).css('display','none');
        });
    } 
    else {
        $('.b-slider').each(function(index){
            $(this).css('display','');
                if ($(this).attr('b-active')) {
                    $(this).css('display','none');
                }
        });
    }
});
$(window).resize(function(){
    if ($(window).width() < 992){
        $('.b-slider').each(function(index){
            $(this).css('display','');
          });
    }
});


// slider
function b_sliders(block, btn) {
    
    for (var k=0; k < btn.length; k++) {
        Ddd(k, block, btn);
    }
}

function Ddd(k, block, btn) {
    var index = k;
    btn[index].addEventListener('click', function (k) {
        for (var y=0; y < block.length; y++) {
            block[y].classList.remove("b-active");
            btn[y].classList.remove("b-btn-active");
        }
        block[index].classList.add("b-active");
        btn[index].classList.add("b-btn-active");
    });
}

// в лево
function b_sliderLeft(block, btn) {
    var position = 0;
    var positionNext = 0;
    for (var i=0; i < btn.length; i++) {
        if (btn[i].className == "b-btn b-btn-active") {
            position = i;
        }
    }
    if (position == 0) {
        positionNext = (btn.length - 1);
    } else {
        positionNext = position - 1;
    }
    block[position].classList.remove("b-active");
    btn[position].classList.remove("b-btn-active");
    block[positionNext].classList.add("b-active");
    btn[positionNext].classList.add("b-btn-active");
}
// в право
function b_sliderRight(block, btn) {
        var position = 0;
        var positionNext = 0;
        for (var i=0; i < btn.length; i++) {
            if (btn[i].className == "b-btn b-btn-active") {
                position = i;
            }
        }
        if (position == (btn.length - 1)) {
            positionNext = 0;
        } else {
            positionNext = position + 1;
        }
        block[position].classList.remove("b-active");
        btn[position].classList.remove("b-btn-active");
        block[positionNext].classList.add("b-active");
        btn[positionNext].classList.add("b-btn-active");
}
// перелистывания пальцем
function b_touchSlider(box, slider, btn) {

    var touchStartX = null; //Точка начала касания
    var touchPositionX = null; //Текущая позиция
    const sensitivity = 50; // Чувствительность

    //Перехватываем события
    box.addEventListener("touchstart", function (e) {TouchStart(e)}); //Начало касания
    box.addEventListener("touchmove", function (e) {TouchMove(e)}); //Движение пальцем по экрану
    box.addEventListener("touchend", function (e) {TouchEnd(e)}); //Пользователь отпустил экран

    function TouchStart(e) {
        touchPositionX = null;
        //Получаем текущую позицию касания
        touchStartX = e.changedTouches[0].pageX;
    }

    function TouchMove(e) {
        //Получаем новую позицию
        touchPositionX = e.changedTouches[0].pageX;
    }

    function TouchEnd(e) {
        if ((touchPositionX < (touchStartX - sensitivity )) && (touchPositionX != null)) {
            b_sliderRight(slider, btn);
            if (box == b_art1) {
                $("html, body").animate({scrollTop: $('.b-block5').find('.b-left').offset().top}, 0);
            } else if (box == b_art2) {
                $("html, body").animate({scrollTop: $('.b-block5').find('.b-right').offset().top}, 0);
            }
        } else if ((touchPositionX > (touchStartX + sensitivity)) && (touchPositionX != null)) {
            b_sliderLeft(slider, btn);
            if (box == b_art1) {
                $("html, body").animate({scrollTop: $('.b-block5').find('.b-left').offset().top}, 0);
            } else if (box == b_art2) {
                $("html, body").animate({scrollTop: $('.b-block5').find('.b-right').offset().top}, 0);
            }
        }
    }

}

// 
function b_slidersAll() {
    b_sliders(b_commentsSliders, b_commentsBtn);
    b_touchSlider(b_comments, b_commentsSliders, b_commentsBtn);

    b_art1LeftBtn.on('click', function() {
        b_sliderLeft(b_art1Slid, b_art1Btn);
        $("html, body").animate({scrollTop: $('.b-block5').find('.b-left').offset().top}, 0);
    });    
    b_art1RightBtn.on('click', function() {
        b_sliderLeft(b_art1Slid, b_art1Btn);
        $("html, body").animate({scrollTop: $('.b-block5').find('.b-left').offset().top}, 0);
    });
    b_touchSlider(b_art1, b_art1Slid, b_art1Btn);
    

    b_art2LeftBtn.on('click', function() {
        b_sliderLeft(b_art2Slid, b_art2Btn);
        $("html, body").animate({scrollTop: $('.b-block5').find('.b-right').offset().top}, 0);
    });    
    b_art2RightBtn.on('click', function() {
        b_sliderLeft(b_art2Slid, b_art2Btn);
        $("html, body").animate({scrollTop: $('.b-block5').find('.b-right').offset().top}, 0);
    });
    b_touchSlider(b_art2, b_art2Slid, b_art2Btn);
    
}

// запуск слайдов
b_slidersAll();

// появления анимации при прокрутке до блоков
// B-2
$(document).ready(function(){   
    var $element = $('.b-block2');
    var counter = 0;
$(window).scroll(function() {
  var scroll = $(window).scrollTop()  + ($(window).height() / 4);
  //Если скролл до начала елемента
  var offset = $element.offset().top
 
    if (scroll > offset && counter == 0) {
        $element.find('.b-line-2').addClass("a-v-down");
        $element.find('.b-line-5').addClass("a-v-up");
        $element.find('.b-line-3').addClass("a-g-right");
        $element.find('.b-line-4').addClass("a-g-right");
        $element.find('.b-line-7').addClass("a-g-left");
        var i = 1;
        $element.find('.b-li').each(function() {
            $(this).addClass("a-o"+ i);
            i++;
        });
        counter = 1;
        }
    });
});
// B-3
$(document).ready(function(){   
    var $element = $('.b-block3');
    var counter = 0;
$(window).scroll(function() {
  var scroll = $(window).scrollTop()  + ($(window).height() / 4);
  //Если скролл до начала елемента
  var offset = $element.offset().top
 
    if (scroll > offset && counter == 0) {
        $element.find('.b-line-1').addClass("a-v-down");
        $element.find('.b-line-2').addClass("a-g-right");
        $element.find('.b-line-8').addClass("a-v-up");
        var i = 1;
        $element.find('.b-left').find('.b-li').each(function() {
            $(this).addClass("a-o"+ i);
            i++;
        });
        var y = 1;
        $element.find('.b-right').find('.b-li').each(function() {
            $(this).addClass("a-o"+ y);
            y++;
        });
        counter = 1;
        }
    });
});
// B-4
$(document).ready(function(){   
    var $element = $('.b-block4');
    var counter = 0;
$(window).scroll(function() {
  var scroll = $(window).scrollTop()  + ($(window).height() / 4);
  //Если скролл до начала елемента
  var offset = $element.offset().top
 
    if (scroll > offset && counter == 0) {
        $element.find('.b-line-3').addClass("a-v-up");
        $element.find('.b-line-4').addClass("a-v-down");
        $element.find('.b-line-8').addClass("a-g-left");
        $element.find('.b-img').each(function() {
            $(this).addClass("a-rotat");
        });
        counter = 1;
        }
    });
});
// B-5
$(document).ready(function(){   
    var $element = $('.b-block5');
    var counter = 0;
$(window).scroll(function() {
  var scroll = $(window).scrollTop()  + ($(window).height() / 4);
  //Если скролл до начала елемента
  var offset = $element.offset().top
 
    if (scroll > offset && counter == 0) {
        $element.find('.b-img').addClass("a-b5-1");
        $element.find('.b-centerline-1 ').attr('id',"a-b5-line-right-11");
        $element.find('.b-centerline-2 ').attr('id',"a-b5-line-right-12");
        $element.find('.b-centerline-3 ').attr('id',"a-b5-line-left-11");
        $element.find('.b-centerline-4 ').attr('id',"a-b5-line-left-12");
        $element.find('.b-center-img').addClass("a-b5-2");
        $element.find('.b-h4-2').addClass("a-b5-2");
        $element.find('.b-p-3').addClass("a-b5-2");
        setTimeout(function(){$element.find('.b-artline-1').addClass("a-b5-3");}, 2000);
        setTimeout(function(){$element.find('.b-artline-2').addClass("a-b5-3");}, 2000);
        setTimeout(function(){$element.find('.b-artline-3').addClass("a-b5-3");}, 2000);
        setTimeout(function(){$element.find('.b-artline-4').addClass("a-b5-3");}, 2000);
        setTimeout(function(){$element.find('.b-article-img').addClass("a-b5-3");}, 2000);
        setTimeout(function(){$element.find('.b-article-text').addClass("a-b5-3");}, 2000);
        setTimeout(function(){$element.find('.b-artline-5').addClass("a-b5-line-up-21");}, 2000);
        setTimeout(function(){$element.find('.b-1').find('.b-artline-6').addClass("a-b5-line-left-22");}, 2000);
        setTimeout(function(){$element.find('.b-2').find('.b-artline-6').addClass("a-b5-line-right-22");}, 2000);
        counter = 1;
        }
    });
});

//  паралакс
$(document).ready(function(){

    var elem = $('.b-block5'),         //    Контейнер, в котором будем проводить анимацию
          pos = elem.offset(),            //    Позиция элемента
          elem_left = pos.left,           //    Слева
          elem_top = pos.top,             //    Сверху
          elem_width = elem.width(),      //    Ширина элемента
          elem_height = elem.height(),    //    Высота элемента
          x_center,    //    Координаты центра по оси X
          y_center;    //    Координаты центра по оси Y
    
    //    Обрабатываем событие перемещения курсора мыши
      $('.b-block5').mousemove(function(e){    
    
    //    Определяем центр элемента (формула легко гуглится)
        x_center = ( elem_width / 2 ) - ( e.pageX - elem_left );
        y_center = ( elem_height / 2 ) - ( e.pageY - elem_top );
    

    if ($(window).width() > 991){
        //    Проходим по всем блокам с изображениями)
            $('.parallax').each(function(){
        
        var speed = $(this).attr('data-speed'),     //    Определяем скорость
                xPos = Math.round(-1*x_center/20*speed),//    Высчитываем позицию по оси X, движения будут инвертированы (-1). Формула подбиралась на глаз
                yPos = Math.round(y_center/20*speed);   //    Высчитываем позицию по оси Y
        
        //    Перемещение по оси Y делаем до определенной точки, потом перемещение останавливаем
        if (yPos < 0)
                yPos = -2*speed;
        
        //    Непосредственно перенос      
            $(this).css('transform', 'translate3d('+xPos+'px, '+yPos+'px, 0px)');
        
                });
            }
        });
});

// B-6
$(document).ready(function(){   
    var $element = $('.b-block6');
    var counter = 0;
$(window).scroll(function() {
  var scroll = $(window).scrollTop()  + ($(window).height() / 4);
  //Если скролл до начала елемента
  var offset = $element.offset().top
 
    if (scroll > offset && counter == 0) {
        $element.find('.b-line-1').addClass("a-v-up");
        $element.find('.b-line-2').addClass("a-v-down");
        $element.find('.b-line-4').addClass("a-g-right");
        $element.find('.b-left').addClass("a-rotat-0");
        var i = 2;
        $element.find('.b-item').each(function() {
            $(this).addClass("a-o"+i);
            i++;
        });
        counter = 1;
        }
    });
});
// B-7
$(document).ready(function(){   
    var $element = $('.b-block7');
    var counter = 0;
    // var $text3 = $element.find('.t-3').text();
    // var $text4 = $element.find('.t-4').text();
    // var $text5 = $element.find('.t-5').text();
    // var $text6 = $element.find('.t-6').text();
    // var $text7 = $element.find('.t-7').text();
    // $element.find('.t-3').text('');
    // $element.find('.t-4').text('');
    // $element.find('.t-5').text('');
    // $element.find('.t-6').text('');
    // $element.find('.t-7').text('');
    // $('.b-autograph').css('opacity', '0');
$(window).scroll(function() {
  var scroll = $(window).scrollTop()  + ($(window).height() / 4);
  //Если скролл до начала елемента
  var offset = $element.offset().top
 
    if (scroll > offset && counter == 0) {
        $element.find('.b-line-1').addClass("a-v-up");
        $element.find('.b-line-2').addClass("a-v-down");
        $element.find('.b-line-8').addClass("a-g-left");
        $element.find('.b-line-9').addClass("a-g-left");
        counter = 1;
        }
    });
});
// B-8
$(document).ready(function(){   
    var $element = $('.b-block8');
    var counter = 0;
$(window).scroll(function() {
  var scroll = $(window).scrollTop()  + ($(window).height() / 4);
  //Если скролл до начала елемента
  var offset = $element.offset().top
 
    if (scroll > offset && counter == 0) {
        $element.find('.b-line-1').addClass("a-v-up");
        $element.find('.b-line-2').addClass("a-v-down");
        $element.find('.b-left').addClass("a-o1");
        $element.find('.b-right').addClass("a-o3");
        counter = 1;
        }
    });
});
// B-9
$(document).ready(function(){   
    var $element = $('.b-block9');
    var counter = 0;
$(window).scroll(function() {
  var scroll = $(window).scrollTop()  + ($(window).height() / 4);
  //Если скролл до начала елемента
  var offset = $element.offset().top
 
    if (scroll > offset && counter == 0) {
        $element.find('.b-line-2').addClass("a-v-up");
        $element.find('.b-line-1').addClass("a-v-down");
        $element.find('.b-line-3').addClass("a-g-left");
        $element.find('.b-line-4').addClass("a-g-right");
        // добовляет анимаци или выключает в зависемости от ширены экрана
        $(function(){
            if ($(window).width() > 991){
                var i = 1;
                $element.find('.b-comment').each(function() {
                    $(this).addClass("a-rotat-g"+i);
                    i++;
                });
            } else {
                $element.find('.b-comment').css('opacity', '1');
            }
        });
        $(window).resize(function(){
            if ($(window).width() < 992){
                var i = 1;
                $element.find('.b-comment').each(function() {
                    $(this).removeClass("a-rotat-g"+i);
                    $(this).css('opacity', '1');
                    i++;
                });
            }
        });
        // 
        counter = 1;
        }
    });
});
// B-10
$(document).ready(function(){   
    var $element = $('.b-block10');
    var counter = 0;
$(window).scroll(function() {
  var scroll = $(window).scrollTop()  + ($(window).height() / 4);
  //Если скролл до начала елемента
  var offset = $element.offset().top
 
    if (scroll > offset && counter == 0) {
        $element.find('.b-line-1').addClass("a-v-up");
        $element.find('.b-line-2').addClass("a-g-left");
        $element.find('.b-line-3').addClass("a-g-right");
        $element.find('.b-line-7').addClass("a-v-down");
        var i = 1;
        $element.find('.b-item').each(function() {
            $(this).addClass("a-o"+i);
            i++;
        });
        counter = 1;
        }
    });
});
// B-11
$(document).ready(function(){   
    var $element = $('.b-block11');
    var counter = 0;
$(window).scroll(function() {
  var scroll = $(window).scrollTop()  + ($(window).height() / 4);
  //Если скролл до начала елемента
  var offset = $element.offset().top
 
    if (scroll > offset && counter == 0) {
        $element.find('.b-line-1').addClass("a-v-up");
        $element.find('.b-line-2').addClass("a-g-right");
        $element.find('.b-line-5').addClass("a-v-down");
        $element.find('.b-line-6').addClass("a-g-left");
        var i = 1;
        $element.find('.b-item').each(function() {
            $(this).addClass("a-top-down-"+i);
            i++;
        });
        counter = 1;
        }
    });
});
// B-12
$(document).ready(function(){   
    var $element = $('.b-block12');
    var counter = 0;
$(window).scroll(function() {
  var scroll = $(window).scrollTop()  + ($(window).height() / 4);
  //Если скролл до начала елемента
  var offset = $element.offset().top
 
    if (scroll > offset && counter == 0) {
        $element.find('.b-line-1').addClass("a-v-up");
        $element.find('.b-line-2').addClass("a-v-dowm");
        $element.find('.b-line-3').addClass("a-g-left");
        $element.find('.b-line-4').addClass("a-v-up");
        $element.find('.b-box').addClass("a-o1");
        $element.find('.b-img-1').addClass("a-left-right");
        $element.find('.b-img-2').addClass("a-bottom-up");
        counter = 1;
        }
    });
});
// B-13
$(document).ready(function(){   
    var $element = $('.b-buy');
    var counter = 0;
$(window).scroll(function() {
  var scroll = $(window).scrollTop()   + ($(window).height() / 2);
  //Если скролл до начала елемента
  var offset = $element.offset().top
 
    if (scroll > offset && counter == 0) {
        $element.find('.b-right').addClass("a-top-down-4");
        var i = 1;
        $element.find('.b-item').each(function() {
            $(this).addClass("a-o"+i);
            i++;
        });
        counter = 1;
        }
    });
});