/*============================================================
#title            : La Tour d'Argent
#description      : Script for index.html
#author           : DUPRE ANTHONY
#date             : 2017/05/22
#version          : Constantly on progress
#usage            : JAVASCRIPT
#notes            : 
=============================================================*/

$(document).ready(function () {

    //FONT LE MONDE 
    try {
        Typekit.load({
            async: true
        });
    } catch (e) {}

    //Height body
    var FullBodyHeight = function () {
        $('body').css('height', window.innerHeight);
    }
    setInterval(FullBodyHeight, 0);

    //loader 
    $(window).load(function () {
        $("#loader").fadeOut("1000");
        $(".menu").css("display", "block");
    });

    //BURGER 
    $("button").click(function () {
        $(".hamburger").toggleClass("focus");
        $(".content").toggleClass("show");
    });

    $("nav").click(function () {
        $(".content").toggleClass('show');
        $(".hamburger").toggleClass("focus");
    });
});
