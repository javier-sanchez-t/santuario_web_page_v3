window.onload = function () {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const option = urlParams.get('option')
  var section = "";
  var btnOption = "";

  switch (option) {
    case 'CAMPAMENTO':
      section = document.getElementById("CAMPAMENTO");
      btnOption = document.getElementById("BTN_CAMPAMENTO");
      break;
    case 'CAMPAMENTO_BOUTIQUE':
      section = document.getElementById("CAMPAMENTO_BOUTIQUE");
      btnOption = document.getElementById("BTN_CAMPAMENTO_BOUTIQUE");
      break;
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
      section = document.getElementById("CAMPAMENTO");
      btnOption = document.getElementById("BTN_CAMPAMENTO");
  }

  btnOption.classList.add("shadow");
  section.classList.add("show");
  window.location.href = "#OPTIONS";
};