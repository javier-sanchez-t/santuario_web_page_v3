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

function clearModalFacturacion() {
 document.getElementById("noReservacion").value = '';
 document.getElementById("fechaReservacion").value = '';
 document.getElementById("cantidad").value = '';
 document.getElementById("rfc").value = '';
 document.getElementById("extranjero").checked = false;
}

function sendFacturasForm() {
 var noReservacion = document.getElementById("noReservacion").value;
 var fechaViaje = document.getElementById("fechaReservacion").value;
 var cantidad = document.getElementById("cantidad").value;
 var RFC = document.getElementById("rfc").value;
 var extranjero = document.getElementById("extranjero").checked;

 /*if (noReservacion != null && noReservacion != undefined && noReservacion != ""
     && fechaViaje != null && fechaViaje != undefined && fechaViaje != ""
     && cantidad != null && cantidad != undefined && cantidad != "") {
     return;
 }*/

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

 Email.send({
  Host: "smtp.gmail.com",
  Username: "jefe10jav@gmail.com",
  Password: "",
  To: 'jefe10jav@gmail.com',
  From: "jefe10jav@gmail.com",
  Subject: "Solicitud de facturación",
  Body: bodyEmail
 }).then(
  message => {
   $('#facturaModal').modal('hide')

   if (message == 'OK') {
    alert("Sus datos han sido enviados, en breve atenderemos su solicitud. \n\n ¡Gracias!");
   } else {
    console.log(message);
    
    alert("Ocurrió un error con su solicitud, inténtelo más tarde.");
   }
  }
 );
}