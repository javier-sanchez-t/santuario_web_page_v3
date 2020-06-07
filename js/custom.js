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


$('#BTN_TOP').click(function () {
    $("html, body").delay(0).animate({
     scrollTop:0
    }, 1000);
});

window.onscroll = function() {scrollFunction()};
mybutton = document.getElementById("BTN_TOP");
function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}