function totalVendasPorVendedor(vendas) {
    let resumoVendas = {};

    vendas.forEach(function(venda) {
        if (resumoVendas[venda.vendedor]) {
            resumoVendas[venda.vendedor] += venda.valor;
        } else {
            resumoVendas[venda.vendedor] = venda.valor;
        }
    });
    return resumoVendas;
}

let vendas = [
    { vendedor: "João", valor: 100 },
    { vendedor: "Maria", valor: 150 },
    { vendedor: "João", valor: 200 },
    { vendedor: "Carlos", valor: 120 },
    { vendedor: "Maria", valor: 180 }
];

let resumo = totalVendasPorVendedor(vendas);

console.log("Total de vendas por vendedor:", resumo);
