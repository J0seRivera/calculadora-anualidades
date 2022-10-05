/*Calculo del tiempo para las anualidades vencidas*/

var formularioT = document.forms.fAnVTiempo
var rTiempo = document.getElementById('res-anv-tiempo')

formularioT.renta.oninput = calcularT
formularioT.anualidadVencida.oninput = calcularT
formularioT.interes.oninput = calcularT

function calcularT() {
  var s = formularioT.anualidadVencida.value
  var r = parseFloat(formularioT.renta.value)
  var i = (formularioT.interes.value)/100


  var total = ((Math.log10((s*i)+r))-Math.log10(r)) / Math.log10(1+i)
  rTiempo.innerHTML = total.toFixed(2)+" años"

}