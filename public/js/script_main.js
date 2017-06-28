/*============================================================
#title            : La Tour d'Argent
#description      : Script for all pages 
#author           : DUPRE ANTHONY
#date             : 2017/05/22
#version          : Constantly on progress
#usage            : JAVASCRIPT
#notes            : 
=============================================================*/
$(document).ready(function () {
    var i = 0;

    $("body").css("display", "none");
    $("body").fadeIn(2000);

    //RESPONSIVE PHONE LANDSCAPE
    //CHANGE ORIENTATION
    $(window).on("orientationchange", function (event) {
        if (document.documentElement.clientWidth <= 767) {
            if (window.matchMedia("(orientation: landscape)").matches) {
                $("main").css("display", "none");
                $("header").css("display", "none");
                $("#loader").css("display", "none");
                $("body").append('<div id="orientation_phone"> <img src="../static/pictures/burger/logo_grey.svg" alt="La Tour Argent"><span>Retournez le smartphone verticalement</span></div>');
                $("body").addClass("orientation_landscape");
            } else {
                $("main").css("display", "block");
                $("header").css("display", "block");
                $("#loader").css("display", "flex");
                $("#orientation_phone").remove();
                $("body").removeClass("orientation_landscape");
            }
        }
    });

    if (document.documentElement.clientWidth <= 767) {
        if (window.matchMedia("(orientation: landscape)").matches) {
            $("main").css("display", "none");
            $("header").css("display", "none");
            $("#loader").css("display", "none");
            $("body").append('<div id="orientation_phone"> <img src="../static/pictures/burger/logo_grey.svg" alt="La Tour Argent"><span>Retournez le smartphone verticalement</span></div>');
            $("body").addClass("orientation_landscape");
        }
    }

    //FONT LE MONDE 
    try {
        Typekit.load({
            async: true
        });
    } catch (e) {}

    //BURGER 
    $("#button").click(function () {
        $(".hamburger").toggleClass("focus");
        $(".content").toggleClass("show");

        if (i == 0) {
            $('#logo').css("display", "none");
            i++;
        } else {
            $('#logo').css("display", "block");
            i--;
        }
    });

    $("nav").click(function () {
        $(".content").toggleClass('show');
        $(".hamburger").toggleClass("focus");
    });

    $(".navigation").click(function () {
        $('#logo').css("display", "block");
        i--;
        console.log(i);
    })

    $(document).on("scroll", function () {
        if ($(document).scrollTop() > 50) {
            $('header').css("position", "fixed");
        } else {
            $('header').css("position", "relative");
        }
    });
});
