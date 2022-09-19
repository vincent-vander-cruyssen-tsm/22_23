$('header').after('<button id="themetoggle"></button>');

$("#themetoggle").click(function () {
    $("body").toggleClass("lightmode");
});

$(".noslides section").after("<hr>");

function calcAndShowTotal() {
    var total = 0;
    $('.formgrid :checkbox:checked').each(function () {
        total++;
    });
    $('#total').val(total);
}

$('.formgrid :checkbox').change(calcAndShowTotal).change();
// $('#total').after(querySelectorAll('.formgrid :checkbox'));