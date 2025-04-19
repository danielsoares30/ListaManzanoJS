let cotacao = parseInt(prompt("Digite a cotação do dólar: "))
let real = parseInt(prompt("Digite o valor que você possui em real: "))

let dolar = real / cotacao

alert("O valor em dólares é: U$ " + dolar.toFixed(2))