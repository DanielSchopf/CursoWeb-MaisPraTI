const prompt= require('prompt-sync')();

function tabelaOrigem(codigo) {
    let origem
    switch(true){
        case codigo == 1:
            origem = "Sul"
            break;
        case codigo == 2:
            origem = "Norte"
            break;
        case codigo == 2:
            origem = "Norte"
            break;
        case codigo == 3:
            origem = "Leste"
            break;
        case codigo == 4:
            origem = "Oeste"
            break;
        case codigo == 5 || codigo == 6:
            origem = "Nordeste"
            break;
        case codigo == 7 || codigo == 8 || codigo == 9:
            origem = "Sudeste"
            break;
        case codigo >= 10 && codigo <= 20:
            origem = "Centro-Oeste"
            break;
        case codigo >= 25 && codigo <= 50:
            origem = "Centro-Oeste"
            break;
        default:
            origem = "Produto Importado"
            break;
    } 
    console.log("A origem do produto é: " + origem)
}

let codigoProduto= parseInt(prompt("Digite o código do produto: "))
tabelaOrigem(codigoProduto)