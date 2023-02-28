const ladoA = 0
const ladoB = 0

if ((ladoA > 6 || ladoA < 0) || (ladoB > 6 || ladoB < 0)) {
    console.log("Entrada inválida, as peças do dominó vão de 0 até 6 em cada lado")
} else if (ladoA === ladoB) {
    console.log("SIM!")
} else {
    console.log("NÃO!")
}
