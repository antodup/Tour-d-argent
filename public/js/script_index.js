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
            $("#place>a>div:first-child").addClass("box-info-hover");
        },

        function () {
            $("#place>a>div:first-child").removeClass("box-info-hover");
        });

    $('#place').hover(function () {
        $('#place>a>div:first-child').addClass("box-info-hover");
    }, function () {
        $('#place>a>div:first-child').removeClass("box-info-hover");
    });

    $("#title-cooker").hover(function () {
            $("#cooker>a>div:first-child").addClass("box-info-hover");
        },

        function () {
            $("#cooker>a>div:first-child").removeClass("box-info-hover");
        });

    $('#cooker').hover(function () {
        $('#cooker>a>div:first-child').addClass("box-info-hover");
    }, function () {
        $('#cooker>a>div:first-child').removeClass("box-info-hover");
    });

    $("#title-card").hover(function () {
            $("#card>a>div:first-child").addClass("box-info-hover");
        },

        function () {
            $("#card>a>div:first-child").removeClass("box-info-hover");
        });

    $('#card').hover(function () {
        $('#card>a>div:first-child').addClass("box-info-hover");
    }, function () {
        $('#card>a>div:first-child').removeClass("box-info-hover");
    });


    $("#title-table").hover(function () {
            $("#table>a>div:first-child").addClass("box-info-hover");
        },

        function () {
            $("#table>a>div:first-child").removeClass("box-info-hover");
        });

    $('#table').hover(function () {
        $('#table>a>div:first-child').addClass("box-info-hover");
    }, function () {
        $('#table>a>div:first-child').removeClass("box-info-hover");
    });

});
