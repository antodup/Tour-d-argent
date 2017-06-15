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
    var i = 0;

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

    //Click
    $("#enter").click(function () {
        $("#loader").fadeOut(500, "linear", function () {

            $("main").css("display", "flex");

            //ANIMATE SECTION
            $("#place").addClass("animate_place");
            $("#cooker").addClass("animate_cooker");
            $("#card").addClass("animate_card");
            $("#table").addClass("animate_table");

            //ANIMATE TEXT 
            $("#title-place").addClass("text_menu_place");
            $("#title-cooker").addClass("text_menu_cooker");
            $("#title-card").addClass("text_menu_card");
            $("#title-table").addClass("text_menu_table");

            //ANIMATE TEXT SHADOW
            $("#shadow-place").addClass("text_menu_place");
            $("#shadow-cooker").addClass("text_menu_cooker");
            $("#shadow-card").addClass("text_menu_card");
            $("#shadow-table").addClass("text_menu_table");

        });
    });



    //HOME
    $("#title-place").hover(function () {
            $("#place div:first-child").addClass("box-info-hover");
        },

        function () {
            $("#place div:first-child").removeClass("box-info-hover");
        });

    $("#title-cooker").hover(function () {
            $("#cooker div:first-child").addClass("box-info-hover");
        },

        function () {
            $("#cooker div:first-child").removeClass("box-info-hover");
        });


    $("#title-card").hover(function () {
            $("#card div:first-child").addClass("box-info-hover");
        },

        function () {
            $("#card div:first-child").removeClass("box-info-hover");
        });


    $("#title-table").hover(function () {
            $("#table div:first-child").addClass("box-info-hover");
        },

        function () {
            $("#table div:first-child").removeClass("box-info-hover");
        });


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
