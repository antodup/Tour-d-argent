/*============================================================
#title            : La Tour d'Argent
#description      : Script for chef.html
#author           : DUPRE ANTHONY
#date             : 2017/05/22
#version          : Constantly on progress
#usage            : JAVASCRIPT
#notes            : 
=============================================================*/

$(document).ready(function () {

    //swiper parallax
    var swiper = new Swiper('.swiper-container_1', {
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        direction: 'horizontal',
        slidesPerView: 1,
        paginationClickable: true,
        spaceBetween: 30,
        mousewheelControl: true
    });

    //swiper classique
    var swiper_2 = new Swiper('.swiper-container_2', {
        paginationClickable: true,
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        spaceBetween: 30,
        effect: 'fade'
    });

    //swiper chef
    var swiper = new Swiper('.swiper-container_3', {
        paginationClickable: true,
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        spaceBetween: 30,
        effect: 'fade',
        centeredSlides: true,
        autoplay: 3000,
        autoplayDisableOnInteraction: false
    });



});
