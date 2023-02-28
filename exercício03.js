const ladoA = 10
const ladoB = 10

if (ladoA > 6 || ladoB > 6) {
    console.log("Entrada inválida, as peças do dominó só vão até 6 em cada lado")
} else if (ladoA === ladoB) {
    console.log("SIM!")
} else {
    console.log("NÃO!")
}
