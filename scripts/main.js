"use strict";


$(function () {
    // フェードイン
    $(window).scroll(function () {
        const wHeight = $(window).height();
        const scrollAmount = $(window).scrollTop();
        $('.scrollanime').each(function () {
            const targetPosition = $(this).offset().top;
            if(scrollAmount > targetPosition - wHeight + 60) {
                $(this).addClass("fadeInDown");
            }
        });
    });
/*
    //ハンバーガメニュー
    $('.burger-btn').on('click',function(){//.burger-btnをクリックすると
        $('.burger-btn').toggleClass('close');//.burger-btnにcloseクラスを付与(ボタンのアニメーション)
        $('.nav-wrapper').toggleClass('nav-fadein');//.nav-wrapperが0.5秒でフェードイン(メニューのフェードイン)
    });

    $('.nav-item').on('click',function(){//.nav-itemをクリックすると
        $('.burger-btn').removeClass('close');//.burger-btnにcloseクラスを削除(ボタンのアニメーション)
        $('.nav-wrapper').removeClass('nav-fadein');//.nav-wrapperからnav-fadeinクラスを削除(メニューのフェードイン)
    });
*/
});

var scrollHeight = window.innerHeight / 2;

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  var header = document.getElementsByClassName("header");
  if (document.body.scrollTop > scrollHeight || document.documentElement.scrollTop > scrollHeight) {
    header[0].classList.add("header-scroll");
  } 
  else {
    if(header[0].classList.contains("header-scroll")){
    header[0].classList.remove("header-scroll");
  }
  }
}

function menu(x) {
    x.classList.toggle('change');
    var menu = document.getElementById('menu');
    if (menu.style.maxHeight) {
        menu.style.maxHeight = null;
    }
    else {
        menu.style.maxHeight = menu.scrollHeight + 'px';
    }
}