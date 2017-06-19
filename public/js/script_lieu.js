/*============================================================
#title            : La Tour d'Argent
#description      : Script for lieu.html
#author           : DUPRE ANTHONY
#date             : 2017/05/22
#version          : Constantly on progress
#usage            : JAVASCRIPT
#notes            : 
=============================================================*/

$(document).ready(function () {
    var click,
        select = $(".swiper-slide_2>div:first-child");

    var swiper = new Swiper('.swiper-container_1', {
        pagination: '.swiper-pagination',
        direction: 'horizontal',
        slidesPerView: 1,
        paginationClickable: true,
        spaceBetween: 30,
        mousewheelControl: true
    });

    //ANDRE TERRAIL
    $("#family_pictures>div:first-child div").removeClass("black");
    $("#family_pictures>div:first-child").css("height", "100%");
    $('#family_pictures>div:first-child h3').css("display", "block");
    //CLICK
    $("#family_pictures>div:first-child").click(function () {
        $("#family_pictures>div:first-child div").removeClass("black");
        //CHANGE HEIGHT
        $("#family_pictures>div").css("height", "95%");
        $("#family_pictures>div:first-child").css("height", "100%");
        //CHANGE OTHER PICTURES 
        $("#family_pictures>div:not(:first-child) div").addClass("black");
        //CHANGE CONTENT P
        $("#terrail>p").css("opacity", "0");
        $("#terrail>p").animate({
            opacity: 1
        }, 1000);
        $("#terrail>p").html("André Terrail, le grand-père de l’actuel propriétaire, rachète la Tour d’Argent à Frédéric Delair en 1914 et fait entrer dans sa légende les recettes d’Adolphe Dugléré ainsi que les rarissimes bouteilles du Café Anglais. Entrepreneur infatigable, la Tour rejoint la collection de ses nombreux établissements parmi lesquels on compte le San Régis, l’Hôtel Bellman, le Georges V à Paris, l’Hôtel St Christophe à Miramar d’Esterel, l’Escargot Montorgueil et Potel & Chabot.");
        // CHANGE NAME
        $('#family_pictures>div>h3').css("display", "none");
        $('#family_pictures>div:first-child h3').css("display", "block");
        click = 1;
    });
    //HOVER
    if (click != 1) {
        $("#family_pictures>div:first-child").hover(function () {
                $("#family_pictures>div:first-child div").removeClass("black-hover");
            },
            function () {
                $("#family_pictures>div:first-child div").addClass("black-hover");
            });
    } else {
        return;
    }
    //CLAUDE TERRAIL
    //CLICK
    $("#family_pictures>div:nth-child(2)").click(function () {
        $("#family_pictures>div:nth-child(2) div").removeClass("black");
        //CHANGE HEIGHT
        $("#family_pictures>div").css("height", "95%");
        $("#family_pictures>div:nth-child(2)").css("height", "100%");

        //CHANGE OTHER PICTURES 
        $("#family_pictures>div:not(:nth-child(2)) div").addClass("black");
        //CHANGE CONTENT P
        $("#terrail>p").css("opacity", "0");
        $("#terrail>p").animate({
            opacity: 1
        }, 1000);
        $("#terrail>p").html("En 1947, André Terrail transmet les rênes de la Tour d’Argent à son fils, Claude. Sous sa direction, la Tour d’Argent ouvre un second restaurant à Tokyo, célèbre son 400ème anniversaire, et connaît de nombreuses évolutions la maintenant au plus haut niveau de la gastronomie mondiale. Entrepreneur visionnaire et meneur d’hommes, l’histoire retiendra un grand Maître de Maison dont la maxime favorite était : “Il n’y a rien de plus sérieux que le plaisir”. Disparu en 2006, son fils André perpétue l’histoire de cette grande Maison.")
        // CHANGE NAME
        $('#family_pictures>div>h3').css("display", "none");
        $('#family_pictures>div:nth-child(2) h3').css("display", "block");
        click = 2;
    });

    //HOVER
    if (click != 2) {
        $("#family_pictures>div:nth-child(2)").hover(function () {
                $("#family_pictures>div:nth-child(2) div").removeClass("black-hover");
            },
            function () {
                $("#family_pictures>div:nth-child(2) div").addClass("black-hover");
            });
    } else {
        return;
    }

    //ANDRE TERRAIL SON
    //CLICK
    $("#family_pictures>div:last-child").click(function () {
        $("#family_pictures>div:last-child div").removeClass("black");
        //CHANGE HEIGHT
        $("#family_pictures>div").css("height", "95%");
        $("#family_pictures>div:last-child").css("height", "100%");
        //CHANGE OTHER PICTURES 
        $("#family_pictures>div:not(:last-child) div").addClass("black");
        //CHANGE CONTENT P
        $("#terrail>p").css("opacity", "0");
        $("#terrail>p").animate({
            opacity: 1
        }, 1000);
        $("#terrail>p").html("André Terrail rejoint l’entreprise familiale en 2003 et succède à son père en 2006. Il entame ainsi un nouveau chapitre dans l’illustre histoire de cet établissement. Tout en satisfaisant aux attentes d’une clientèle exigeante il s’attache à faire évoluer la Maison en respectant son héritage. Il s’appuie sur une équipe de grands professionnels pour embrasser l’esprit de son époque. André Terrail est titulaire d’un Bachelor of Science in Business Administration de Babson College et d’un Master of Business Administration de l’INSEAD.");
        // CHANGE NAME
        $('#family_pictures>div>h3').css("display", "none");
        $('#family_pictures>div:last-child h3').css("display", "block");
        click = 3;
    });
    //HOVER
    if (click != 3) {
        $("#family_pictures>div:last-child").hover(function () {
                $("#family_pictures>div:last-child div").removeClass("black-hover");
            },

            function () {
                $("#family_pictures>div:last-child div").addClass("black-hover");
            });
    } else {
        return;
    }

    //swiper CHRONOLOGY
    var swiper_2 = new Swiper('.swiper-container_2', {
        paginationClickable: true,
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        spaceBetween: 30,
        effect: 'fade'
    });

    //CHRONOLOGY
    $("#chronology_pictures>.swiper-slide_2:first-child>div:first-child div").removeClass("black");
    $("#chronology_pictures>.swiper-slide_2>div:first-child h3").css("display", "none");
    $("#chronology_pictures>.swiper-slide_2>div").click(function () {
        select.removeClass("select");
        $(select.find("div")).addClass("black");
        $(select.find("h3")).css("display", "block");
        $(select.find("h3")).addClass("opacity");
        $('.' + select.attr('value')).css("display", "none");
        if ($(this).attr('value') != "story11") {
            $(this).addClass("select");
        } else {
            $(this).addClass("select_story11");
        }
        $($(this).find("div")).removeClass("black");
        $($(this).find("h3")).css("display", "none");
        select = $(this);
        $('.' + $(this).attr('value')).css("display", "block");
        $('.' + $(this).attr('value')).addClass("opacity");

        if ($(this).attr('value') != "story11" && $(this).attr('value') != "story5") {
            $("#chronology").css("margin-top", "22%");
        } else {
            $("#chronology").css("margin-top", "17%");
        }

    });

});
