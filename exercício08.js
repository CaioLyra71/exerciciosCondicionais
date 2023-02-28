const idade = 18
const patologia = true
const altura = 180
const ehEstudante = false

if (idade < 12 || idade > 65 || patologia === true || altura <= 150) {
    console.log("ACESSO NEGADO!")
} else if (ehEstudante === true || idade < 18) {
    console.log("O valor a ser pago é de R$10,00")
} else {
    console.log("O valor a ser pago é de R$20,00")
}