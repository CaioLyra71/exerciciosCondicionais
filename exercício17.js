const valorDoProduto = 100000
const quantidadeDoParcelamento = 10
const valorPago = 30000

valorParaPagar = (valorDoProduto - valorPago) / 100
valorParcela = (valorDoProduto / quantidadeDoParcelamento)
parcelasRestantes = (valorDoProduto - valorPago) / valorParcela

console.log(`Restam pagar ${parcelasRestantes} parcelas, totalizando R$${valorParaPagar}`)