function agruparTransacoesPorCategoria(transacoes) {
    let transacoesPorCategoria = {};

    for (let i = 0; i < transacoes.length; i++) {
        let transacao = transacoes[i];
        if (transacoesPorCategoria[transacao.categoria]) {
            transacoesPorCategoria[transacao.categoria].push(transacao);
            transacoesPorCategoria[transacao.categoria].subtotal += transacao.valor;
        } else {
            transacoesPorCategoria[transacao.categoria] = [transacao];
            transacoesPorCategoria[transacao.categoria].subtotal = transacao.valor;
        }
    }
    return transacoesPorCategoria;
}

let transacoes = [
    { id: 1, valor: 100, data: "2024-06-01", categoria: "Alimentação" },
    { id: 2, valor: 50, data: "2024-06-02", categoria: "Transporte" },
    { id: 3, valor: 150, data: "2024-06-03", categoria: "Alimentação" },
    { id: 4, valor: 80, data: "2024-06-04", categoria: "Lazer" },
    { id: 5, valor: 120, data: "2024-06-05", categoria: "Transporte" }
];

let transacoesAgrupadas = agruparTransacoesPorCategoria(transacoes);
console.log("Transações agrupadas por categoria:", transacoesAgrupadas);
