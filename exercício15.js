const primeiroNome = "Caio"
const sobrenome = ""
const apelido = ""

if (primeiroNome === "") {
    console.log("Preencha o primeiro nome")
} else {
    if (primeiroNome && sobrenome && apelido) {
        console.log(`${primeiroNome} ${sobrenome} - "${apelido}"`)
    } else if (primeiroNome && sobrenome) {
        console.log(primeiroNome, sobrenome)
    } else if (primeiroNome && apelido) {
        console.log(`${primeiroNome} - "${apelido}"`)
    } else if (primeiroNome) {
        console.log(primeiroNome)
    } else if (apelido) {
        console.log(apelido)
    } else if (sobrenome) {
        console.log(sobrenome)
    }
}


