let nota1 = parseInt(prompt("Digite a primeira nota do aluno: "))
let nota2 = parseInt(prompt("Digite a segunda nota do aluno: "))
let nota3 = parseInt(prompt("Digite a terceira nota do aluno: "))
let nota4 = parseInt(prompt("Digite a última nota do aluno: "))

let media = (nota1 + nota2 + nota3 + nota4) / 4

if (media >= 5) {
    alert("O aluno foi aprovado com a nota: " + media)
} else {
    alert("O aluno foi reprovado com a nota: " + media)
}