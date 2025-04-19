let A = parseInt(prompt("Digite o primeiro valor: "))
let B = parseInt(prompt("Digite o segundo valor: "))

let temp = A
A = B
B = temp
alert("O valor antes da troca era: A = " + A + ", B = " + B);
alert("O valor depois da troca é: B = " + B + ", A = " + A);
