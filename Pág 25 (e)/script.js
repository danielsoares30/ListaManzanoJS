let valor = parseInt(prompt("Digite o valor da prestação (R$)"))
let taxa = parseInt(prompt("Digite a taxa de juros (em %)"))
let tempo = parseInt(prompt("Digite o tempo de atraso da prestação ( em meses)"))

let prestacao = valor + (valor * taxa /100) * tempo
alert("O valor total da prestação é: " + prestacao.toFixed(2))
