let dados = {
    nome: "Maria",
    idade: 25,
    numeros: [1, 2, 3, 4, 5],
    cidade: "São Paulo",
    interesses: ["esportes", "música", "leitura"],
    notas: [8, 7, 9, 6]
};

function filtrarArrays(objeto) {
    let novoObjeto = {};
    for (let chave in objeto) {
        if (Array.isArray(objeto[chave])) {
            novoObjeto[chave] = objeto[chave];
        }
    }
    return novoObjeto;
}

let arraysApenas = filtrarArrays(dados);
console.log("Novo objeto apenas com as propriedades que são arrays:", arraysApenas);
