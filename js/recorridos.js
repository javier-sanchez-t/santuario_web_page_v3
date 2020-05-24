window.onload = function () {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const option = urlParams.get('option')
  var section = "";
  var btnOption = "";

  switch (option) {
    case 'LUCIERNAGAS':
      section = document.getElementById("LUCIERNAGAS");
      btnOption = document.getElementById("BTN_LUCIERNAGAS");
      break;
    case 'MAGUEYES':
      section = document.getElementById("MAGUEYES");
      btnOption = document.getElementById("BTN_MAGUEYES");
      break;
    case 'VALQUIRICO':
      section = document.getElementById("VALQUIRICO");
      btnOption = document.getElementById("BTN_VALQUIRICO");
      break;
    case 'TRASLADO':
      section = document.getElementById("TRASLADO");
      btnOption = document.getElementById("BTN_TRASLADO");
      break;
    default:
      section = document.getElementById("LUCIERNAGAS");
      btnOption = document.getElementById("BTN_LUCIERNAGAS");
  }

  btnOption.classList.add("shadow");
  section.classList.add("show");
  window.location.href = "#OPTIONS";
};