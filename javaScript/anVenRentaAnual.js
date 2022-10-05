//-------Renta Anual anualidades vencidas-----//

var formularioR = document.forms.fRAnual
var rRenta = document.getElementById('res-r-anual')

formularioR.S.oninput = calcularR
formularioR.tiempo.oninput = calcularR
formularioR.interes.oninput = calcularR

function calcularR() {
  var s = formularioR.S.value
  var n = formularioR.tiempo.value
  var i = (formularioR.interes.value)/100

  var total = s * (i/(((1+i)**n)-1))
  rRenta.innerHTML = total.toFixed(2)
}