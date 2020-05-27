window.onload = function () {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const option = urlParams.get('option')
  var section = "";
  var btnOption = "";
console.log(option);

  switch (option) {
    case 'CAMPAMENTO_BOUTIQUE':
      section = document.getElementById("CAMPAMENTO_BOUTIQUE");
      btnOption = document.getElementById("BTN_CAMPAMENTO_BOUTIQUE");
      break;
    case 'CAMPAMENTO':
      section = document.getElementById("CAMPAMENTO");
      btnOption = document.getElementById("BTN_CAMPAMENTO");
      break;
    case 'ESPACIO_ACAMPAR':
      section = document.getElementById("ESPACIO_ACAMPAR");
      btnOption = document.getElementById("BTN_ESPACIO_ACAMPAR");
      break;
    default:
      section = document.getElementById("CAMPAMENTO_BOUTIQUE");
      btnOption = document.getElementById("BTN_CAMPAMENTO_BOUTIQUE");
  }

  btnOption.classList.add("shadow");
  section.classList.add("show");
  window.location.href = "#OPTIONS";
};