$('#INICIO_LINK').click(function () {
 $("html, body").delay(0).animate({
  scrollTop: $('#INICIO').offset().top
 }, 1000);
});

function goToSection(sectionName) {
 $("html, body").delay(0).animate({
  scrollTop: $(sectionName).offset().top
 }, 1000);
}