window.onload = function () {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const option = urlParams.get('option')
  var section = "";
  var btnOption = "";

  switch (option) {
    case 'HOTEL_ALBA':
      section = document.getElementById("HOTEL_ALBA");
      btnOption = document.getElementById("BTN_HOTEL_ALBA");
      break;
    case 'POSADA_PINOS':
      section = document.getElementById("POSADA_PINOS");
      btnOption = document.getElementById("BTN_POSADA_PINOS");
      break;
    case 'RANCHO_TORRE':
      section = document.getElementById("RANCHO_TORRE");
      btnOption = document.getElementById("BTN_RANCHO_TORRE");
      break;
    default:
      section = document.getElementById("HOTEL_ALBA");
      btnOption = document.getElementById("BTN_HOTEL_ALBA");
  }

  btnOption.classList.add("shadow");
  section.classList.add("show");
  window.location.href = "#OPTIONS";
};