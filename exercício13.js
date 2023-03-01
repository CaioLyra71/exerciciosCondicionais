const tipoDePagamento = "cheque"
const valorDoProduto = 13000

if (tipoDePagamento === "credito") {
    const valorFinal = (valorDoProduto - (valorDoProduto * 0.05)) / 100
    console.log(`Valor a ser pago: R$${valorFinal.toFixed(2)}`)
} if (tipoDePagamento === "debito" || tipoDePagamento === "dinheiro") {
    const valorFinal = (valorDoProduto - (valorDoProduto * 0.10)) / 100
    console.log(`Valor a ser pago: R$${valorFinal.toFixed(2)}`)
} if (tipoDePagamento === "cheque") {
    const valorFinal = (valorDoProduto - (valorDoProduto * 0.03)) / 100
    console.log(`Valor a ser pago: R$${valorFinal.toFixed(2)}`)
}