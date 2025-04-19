let tempo = parseInt(prompt("Digite o tempo gasto na viagem (em horas):"))
let velocidade = parseInt(prompt("Digite a velocidade média durante a viagem (em km/h):"))

let distancia = tempo * velocidade
let litros = distancia / 12

alert ("Velocidade média: " + velocidade + "km/h")
alert ("O tempo gasto: " + tempo.toFixed(2))
alert ("A distância percorrida : " + distancia.toFixed(2) + "km")
alert ("O litro do combustível usado: " + litros.toFixed(2))