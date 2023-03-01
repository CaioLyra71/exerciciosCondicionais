const jogada1 = "tesoura"
const jogada2 = "pedra"

if (jogada1 === jogada2) {
    console.log("Empate!!!")
} else if (jogada1 === "pedra" && jogada2 === "papel") {
    console.log(jogada2)
} else if (jogada1 === "pedra" && jogada2 === "tesoura") {
    console.log(jogada1)
} else if (jogada1 === "papel" && jogada2 === "pedra") {
    console.log(jogada1)
} else if (jogada1 === "papel" && jogada2 === "tesoura") {
    console.log(jogada2)
} else if (jogada1 === "tesoura" && jogada2 === "pedra") {
    console.log(jogada2)
} else if (jogada1 === "tesoura" && jogada2 === "papel") {
    console.log(jogada1)
}

