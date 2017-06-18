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
});
