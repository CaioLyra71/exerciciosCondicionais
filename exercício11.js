const rendaMensalEmCentavos = 300000
const tempoDecorrido = 12
const totalJaPagoPeloAluno = 1000000

if (tempoDecorrido < 60 && totalJaPagoPeloAluno < 1800000 && rendaMensalEmCentavos >= 200000) {
    valorDevido = (rendaMensalEmCentavos * 0.18) / 100
    console.log(`O valor da parcela desse mês é de R$${valorDevido.toFixed(2)}`)
} if (tempoDecorrido >= 60) {
    console.log(" O valor da parcela esse mês é de R$0 reais, devido ao tempo decorrido de contrato já ter atingido 60 meses")
} if (totalJaPagoPeloAluno >= 1800000) {
    console.log(" O valor da parcela esse mês é de R$0 reais, devido ao aluno já ter atingido o valor pago de R$ 18000")
} if (rendaMensalEmCentavos < 200000) {
    console.log(" O valor da parcela esse mês é de R$0 reais, devido à renda mensal do  aluno ser inferior à estipulada no contrato")
}