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
    //swiper section_pictures   
    var swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        effect: 'coverflow',
        initialSlide: 3,
        grabCursor: true,
        centeredSlides: true,
        autoplay: 3500,
        autoplayDisableOnInteraction: false,
        effect: 'fade',
        slidesPerView: 'auto',
        coverflow: {
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true
        }
    });

    $(document).on("scroll", function () {
        if ($(document).scrollTop() > 50) {
            $('')
        }

    });
});
