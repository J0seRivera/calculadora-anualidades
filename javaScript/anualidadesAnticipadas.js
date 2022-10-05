//---------Anualidades Anticipadas----------//

let formulario = document.forms.fAnAnticipadas
let resultado = document.getElementById('res-an-anticipadas')

formulario.renta.oninput = calcularAn
formulario.tiempo.oninput = calcularAn
formulario.interes.oninput = calcularAn

function calcularAn() {
  var r = formulario.renta.value
  var n = formulario.tiempo.value
  var i = (formulario.interes.value)/100

  let indice = (1 + i)

  var total = r * indice * (((indice**n)-1) / i)
  resultado.innerHTML = total.toFixed(2)
}