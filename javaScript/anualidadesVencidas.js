//---------Anualidades vencidas----------//

var formulario = document.forms.fAnVencidas
var resultado = document.getElementById('res-an-vencidas')

formulario.renta.oninput = calcular
formulario.tiempo.oninput = calcular
formulario.interes.oninput = calcular

function calcular() {
  var r = formulario.renta.value
  var n = formulario.tiempo.value
  var i = (formulario.interes.value)/100

  var total = r * ((((1+i)**n)-1)/i)
  resultado.innerHTML = total
}