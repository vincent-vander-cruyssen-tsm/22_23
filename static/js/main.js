$('header').after('<button id="themetoggle"></button>');

$("#themetoggle").click(function () {
    $("body").toggleClass("lightmode");
});

$(".noslides section").after("<hr>");