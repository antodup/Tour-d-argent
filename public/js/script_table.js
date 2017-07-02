/*============================================================
#title            : La Tour d'Argent
#description      : Script for table.html
#author           : DUPRE ANTHONY
#date             : 2017/05/22
#version          : Constantly on progress
#usage            : JAVASCRIPT
#notes            : 
=============================================================*/

$(document).ready(function () {
    var click;

    var swiper = new Swiper('.swiper-container_1', {
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        direction: 'horizontal',
        slidesPerView: 1,
        paginationClickable: true,
        spaceBetween: 30,
        mousewheelControl: true
    });

    //RESERVATION
    swiper.lockSwipes();
    $('#invitation_form').css("display", "none");
    $('#private_lounge_form').css("display", "none");

    if (window.matchMedia("(orientation: portrait)").matches) {
        if (document.documentElement.clientWidth <= 1024) {
            $("#table_pictures>div:first-child").css("height", "33.33%");
        } else {
            $("#table_pictures>div:first-child").css("height", "100%");
            alert('ok')
        }
    }

    if (window.matchMedia("(orientation: landscape)").matches) {
        $("#table_pictures>div:first-child").css("height", "100%");
    }

    $('.swiper-button-next').css("display", "none");
    $('.swiper-button-prev').css("display", "none");
    //CLICK
    $("#table_pictures>div:first-child").click(function () {
        $("#table_pictures>div:first-child div").removeClass("black");

        //RESPONSIVE : CHANGE HEIGHT 
        if (window.matchMedia("(orientation: landscape)").matches) {
            if (document.documentElement.clientWidth <= 1024) {
                $("#table_pictures>div").css("height", "95%");
                $("#table_pictures>div").css("width", "30%");
                $("#table_pictures>div:first-child").css("height", "100%");
                $("#table_pictures>div:first-child").css("width", "33.33%");
            } else {
                $("#table_pictures>div").css("height", "95%");
                $("#table_pictures>div:first-child").css("height", "100%");
            }
        }

        if (window.matchMedia("(orientation: portrait)").matches) {
            if (document.documentElement.clientWidth <= 1024) {
                $("#table_pictures>div").css("height", "30%");
                $("#table_pictures>div").css("width", "95%");
                $("#table_pictures>div:first-child").css("height", "33.33%");
                $("#table_pictures>div:first-child").css("width", "100%");
            } else {
                $("#table_pictures>div").css("height", "95%");
                $("#table_pictures>div:first-child").css("height", "100%");
            }
        }
        //CHANGE OTHER PICTURES 
        swiper.lockSwipes()
        $('.swiper-button-next').css("display", "none");
        $('.swiper-button-prev').css("display", "none");
        $("#table_pictures>div:not(:first-child) div").addClass("black");
        //CHANGE CONTENT 
        $("#reservation").css("display", "block");
        $("#reservation").css("opacity", "0");
        $("#private_lounge_form").css("display", "none");
        $("#invitation_form").css("display", "none");
        $("#reservation").animate({
            opacity: 1
        }, 1000);
        $('#private_lounge').css("display", "none");
        $('#invitation').css("display", "none");
        // CHANGE NAME
        $('#table_pictures>div:not(:first-child) h3').css("display", "none");
        $('#table_pictures>div:first-child h3').css("display", "block");
        click = 1;
    });
    //HOVER
    if (click != 1) {
        $("#table_pictures>div:first-child").hover(function () {
                $("#table_pictures>div:first-child div").removeClass("black-hover");
            },
            function () {
                $("#table_pictures>div:first-child div").addClass("black-hover");
            });
    } else {
        return;
    }
    //SALON PRIVE
    //CLICK
    $("#table_pictures>div:nth-child(2)").click(function () {
        $("#table_pictures>div:nth-child(2) div").removeClass("black");
        //RESPONSIVE : CHANGE HEIGHT 
        if (window.matchMedia("(orientation: landscape)").matches) {
            if (document.documentElement.clientWidth <= 1024) {
                $("#table_pictures>div").css("height", "95%");
                $("#table_pictures>div").css("width", "30%");
                $("#table_pictures>div:nth-child(2)").css("height", "100%");
                $("#table_pictures>div:nth-child(2)").css("width", "33.33%");
            } else {
                $("#table_pictures>div").css("height", "95%");
                $("#table_pictures>div:nth-child(2)").css("height", "100%");
            }
        }

        if (window.matchMedia("(orientation: portrait)").matches) {
            if (document.documentElement.clientWidth <= 1024) {
                $("#table_pictures>div").css("height", "30%");
                $("#table_pictures>div").css("width", "95%");
                $("#table_pictures>div:nth-child(2)").css("height", "33.33%");
                $("#table_pictures>div:nth-child(2)").css("width", "100%");
            } else {
                $("#table_pictures>div").css("height", "95%");
                $("#table_pictures>div:nth-child(2)").css("height", "100%");
            }
        }

        //CHANGE OTHER PICTURES 
        swiper.unlockSwipes();
        $('.swiper-button-next').css("display", "block");
        $('.swiper-button-prev').css("display", "block");
        $('#booking').css("display", "");
        $("#table_pictures>div:not(:nth-child(2)) div").addClass("black");
        //CHANGE CONTENT 
        $("#private_lounge").css("display", "block");
        $("#private_lounge").css("opacity", "0");
        $('#reservation').css("display", "none")
        $("#invitation").css("display", "none");
        if (document.documentElement.clientWidth <= 767) {
            $("#private_lounge").css("margin-top", "14%");
        } else {
            $("#private_lounge").css("margin-top", "19%");
        }
        $("#private_lounge").animate({
            opacity: 1
        }, 1000);

        $('#private_lounge_form').css("display", "flex");
        $('#invitation_form').css("display", "none");
        // CHANGE NAME
        $('#table_pictures>div:not(:nth-child(2)) h3').css("display", "none");
        $('#table_pictures>div:nth-child(2) h3').css("display", "block");
        click = 2;
    });

    //HOVER
    if (click != 2) {
        $("#table_pictures>div:nth-child(2)").hover(function () {
                $("#table_pictures>div:nth-child(2) div").removeClass("black-hover");
            },
            function () {
                $("#table_pictures>div:nth-child(2) div").addClass("black-hover");
            });
    } else {
        return;
    }

    //INVITATION
    //CLICK
    $("#table_pictures>div:last-child").click(function () {
        $("#table_pictures>div:last-child div").removeClass("black");
        //RESPONSIVE : CHANGE HEIGHT 
        if (window.matchMedia("(orientation: landscape)").matches) {
            if (document.documentElement.clientWidth <= 1024) {
                $("#table_pictures>div").css("height", "95%");
                $("#table_pictures>div").css("width", "30%");
                $("#table_pictures>div:last-child").css("height", "100%");
                $("#table_pictures>div:last-child").css("width", "33.33%");
            } else {
                $("#table_pictures>div").css("height", "95%");
                $("#table_pictures>div:last-child").css("height", "100%");
            }
        }

        if (window.matchMedia("(orientation: portrait)").matches) {
            if (document.documentElement.clientWidth <= 1024) {
                $("#table_pictures>div").css("height", "30%");
                $("#table_pictures>div").css("width", "95%");
                $("#table_pictures>div:last-child").css("height", "33.33%");
                $("#table_pictures>div:last-child").css("width", "100%");
            } else {
                $("#table_pictures>div").css("height", "95%");
                $("#table_pictures>div:last-child").css("height", "100%");
            }
        }

        //CHANGE OTHER PICTURES
        swiper.unlockSwipes();
        $('.swiper-button-next').css("display", "block");
        $('#booking_invitation').css("display", "");
        $('.swiper-button-prev').css("display", "block");
        $("#table_pictures>div:not(:last-child) div").addClass("black");
        //CHANGE CONTENT 
        $("#invitation").css("display", "block");
        $("#reservation").css("display", "none");
        $("#private_lounge").css("display", "none");
        $("#invitation").css("opacity", "0");
        $("#invitation").animate({
            opacity: 1
        }, 1000);
        $('#private_lounge_form').css("display", "none");
        $('#invitation_form').css("display", "flex");
        // CHANGE NAME
        $('#table_pictures>div:not(:last-child) h3').css("display", "none");
        $('#table_pictures>div:last-child h3').css("display", "block");
        click = 3;
    });
    //HOVER
    if (click != 3) {
        $("#table_pictures>div:last-child").hover(function () {
                $("#table_pictures>div:last-child div").removeClass("black-hover");
            },

            function () {
                $("#table_pictures>div:last-child div").addClass("black-hover");
            });
    } else {
        return;
    }

});
