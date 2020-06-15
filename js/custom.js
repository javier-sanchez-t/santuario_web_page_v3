$(window).bind('scroll', function () {
 if ($(window).scrollTop() > 50) {
  $('.navbar').addClass('fixed-top');
 } else {
  $('.navbar').removeClass('fixed-top');
 }
});

$('#INICIO_LINK').click(function () {
 $("html, body").delay(0).animate({
  scrollTop: $('#INICIO').offset().top
 }, 1000);
});

function goToSection(sectionName) {
 $('#CLOSE').click();
 $("html, body").delay(0).animate({
  scrollTop: $(sectionName).offset().top
 }, 1000);
}

// Restricts input for the given textbox to the given inputFilter.
function setInputFilter(textbox, inputFilter) {
 ["input", "keydown", "keyup", "mousedown", "mouseup", "select", "contextmenu", "drop"].forEach(function (event) {
  textbox.addEventListener(event, function () {
   if (inputFilter(this.value)) {
    this.oldValue = this.value;
    this.oldSelectionStart = this.selectionStart;
    this.oldSelectionEnd = this.selectionEnd;
   } else if (this.hasOwnProperty("oldValue")) {
    this.value = this.oldValue;
    this.setSelectionRange(this.oldSelectionStart, this.oldSelectionEnd);
   }
  });
 });
}

// Install input filters.
setInputFilter(document.getElementById("cantidad"), function (value) {
 return /^-?\d*$/.test(value);
});

setInputFilter(document.getElementById("noReservacion"), function (value) {
 return /^-?\d*$/.test(value);
});

setInputFilter(document.getElementById("noVisitantes"), function (value) {
 return /^-?\d*$/.test(value);
});

setInputFilter(document.getElementById("telefonoAgencias"), function (value) {
 return /^-?\d*$/.test(value);
});


function clearModalFacturacion() {
 document.getElementById("noReservacion").value = '';
 document.getElementById("fechaReservacion").value = '';
 document.getElementById("cantidad").value = '';
 document.getElementById("rfc").value = '';
 document.getElementById("extranjero").checked = false;
}

function clearModalAgencias() {
 document.getElementById("nombreAgencia").value = "";
 document.getElementById("fechaAgencias").value = "";
 document.getElementById("noVisitantes").value = "";
 document.getElementById("telefonoAgencias").value = "";
 document.getElementById("correoAgencias").value = "";
}

function sendEmail(subject, bodyEmail, modalName, to) {
 $.LoadingOverlay("show");

 Email.send({
  SecureToken: "f69ef3a3-f200-4be9-aecc-9a89adfd1e85",
  To: to,
  From: "bosquemagicodev@gmail.com",
  Subject: subject,
  Body: bodyEmail
 }).then(
  message => {
   $.LoadingOverlay("hide");
   $('#' + modalName).modal('hide');

   if (message == 'OK') {
    alert("Sus datos han sido enviados, en breve atenderemos su solicitud. \n\n ¡Gracias!");
   } else {
    console.log(message);
    alert("Ocurrió un error con su solicitud, inténtelo más tarde.");
   }
  });
}


function sendAgenciasForm() {
 var nombreAgencia = document.getElementById("nombreAgencia").value;
 var fechaAgencias = document.getElementById("fechaAgencias").value;
 var noVisitantes = document.getElementById("noVisitantes").value;
 var telefonoAgencias = document.getElementById("telefonoAgencias").value;
 var correoAgencias = document.getElementById("correoAgencias").value;
 console.log(noVisitantes);

 if (nombreAgencia == null || nombreAgencia == undefined || nombreAgencia.trim() == ""
  || fechaAgencias == null || fechaAgencias == undefined || fechaAgencias.trim() == ""
  || noVisitantes == null || noVisitantes == undefined || noVisitantes.trim() == ""
  || telefonoAgencias == null || telefonoAgencias == undefined || telefonoAgencias.trim() == ""
  || correoAgencias == null || correoAgencias == undefined || correoAgencias.trim() == "") {
  alert("Ingrese los campos requeridos.");
  return;
 }

 var bodyEmail = `
    <strong>Nombre:</strong> ${nombreAgencia} <br/>
    <strong>Fecha de viaje:</strong> ${fechaAgencias} <br/>
    <strong>No. visitantes:</strong> ${noVisitantes} <br/>
    <strong>Teléfono:</strong> ${telefonoAgencias} <br/>
    <strong>Correo:</strong> ${correoAgencias} <br/>`;

 sendEmail('Solicitud de información: AGENCIAS', bodyEmail, 'agenciasModal', 'negocios@bosquemagico.com.mx');
 clearModalAgencias();
}


function sendFacturasForm() {
 var noReservacion = document.getElementById("noReservacion").value;
 var fechaViaje = document.getElementById("fechaReservacion").value;
 var cantidad = document.getElementById("cantidad").value;
 var RFC = document.getElementById("rfc").value;
 var extranjero = document.getElementById("extranjero").checked;

 if (noReservacion == null && noReservacion == undefined && noReservacion == ""
  && fechaViaje == null && fechaViaje == undefined && fechaViaje == ""
  && cantidad == null && cantidad == undefined && cantidad == "") {
  alert("Ingrese los campos requeridos.");
  return;
 }

 var bodyEmail = "<strong>No. Reservación:</strong> " + noReservacion + "<br/>" +
  "<strong>Fecha de viaje:</strong> " + fechaViaje + "<br/>" +
  "<strong>Cantidad:</strong> $" + cantidad;

 if (RFC != null && RFC != undefined && RFC != "") {
  bodyEmail += "<br/><strong>RFC:</strong> " + RFC;
 }

 if (extranjero) {
  bodyEmail += "<br/><strong>Extranjero: </strong> Sí";
 } else {
  bodyEmail += "<br/><strong>Extranjero: </strong> No";
 }

 sendEmail('Solicitud de FACTURA', bodyEmail, 'facturaModal', 'facturas@bosquemagico.com.mx');
 clearModalFacturacion();
}


$('#BTN_TOP').click(function () {
 $("html, body").delay(0).animate({
  scrollTop: 0
 }, 1000);
});

window.onscroll = function () { scrollFunction() };
mybutton = document.getElementById("BTN_TOP");
function scrollFunction() {
 if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
  mybutton.style.display = "block";
 } else {
  mybutton.style.display = "none";
 }
}