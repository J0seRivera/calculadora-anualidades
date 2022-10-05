//---------Valor actual----------//

var formulario = document.forms.fVActual
var resultado = document.getElementById('res-vActual')

formulario.renta.oninput = calcularVA
formulario.interes.oninput = calcularVA
formulario.capitalizacion.oninput = calcularVA
formulario.tiempo.oninput = calcularVA

function calcularVA() {
  var r = formulario.renta.value
  var j = (formulario.interes.value)/100
  var m = formulario.capitalizacion.value
  var n = formulario.tiempo.value
  let indice = (1 + (j/m))
  let a = (indice**(m*n)) - 1
  let b = (indice**m ) - 1

  var total = r * (a/b)
  resultado.innerHTML = total.toFixed(2)
}