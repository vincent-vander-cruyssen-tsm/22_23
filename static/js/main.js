$('header').after('<button id="themetoggle"></button>');

$("#themetoggle").click(function () {
    $("body").toggleClass("lightmode");
});

$(".noslides section").after("<hr>");

function calcAndShowTotal() {
    var total = 0;
    $(':checked').each(function () {
        total++;
    });
    $('.total').val(total);
}

$(':checkbox').change(calcAndShowTotal);

