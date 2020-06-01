window.onload = function () {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const option = urlParams.get('option')
  var section = "";
  var btnOption = "";

  switch (option) {
    case 'MOKA':
      section = document.getElementById("MOKA");
      btnOption = document.getElementById("BTN_MOKA");
      break;
    case 'CHURRERIA':
      section = document.getElementById("CHURRERIA");
      btnOption = document.getElementById("BTN_CHURRERIA");
      break;
    default:
      section = document.getElementById("MOKA");
      btnOption = document.getElementById("BTN_MOKA");
  }

  btnOption.classList.add("shadow");
  section.classList.add("show");
  window.location.href = "#OPTIONS";
};