const ladoA = -1
const ladoB = 2

if ((ladoA > 6 || ladoA < 0) || (ladoB > 6 || ladoB < 0)) {
    console.log("Entrada inválida, as peças do dominó vão de 0 até 6 em cada lado")
} else {
    if (ladoA != ladoB) {
        console.log("Não!")
    }
} if (ladoA == 1 && ladoB === 1) {
    console.log("Bucha de às")
} if (ladoA == 2 && ladoB === 2) {
    console.log("Bucha de duque")
} if (ladoA == 3 && ladoB === 3) {
    console.log("Bucha de terno")
} if (ladoA == 4 && ladoB === 4) {
    console.log("Bucha de quadra")
} if (ladoA == 5 && ladoB === 5) {
    console.log("Bucha de quina")
} if (ladoA == 6 && ladoB === 6) {
    console.log("Bucha de sena")
} if (ladoA == 0 && ladoB === 0) {
    console.log("Bucha de branco")
}







