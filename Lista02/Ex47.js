function aplicarFuncaoEmPropriedades(objeto, funcao) {
    let novoObjeto = {};

    for (let chave in objeto) {
        novoObjeto[chave] = funcao(objeto[chave]);
    }
    return novoObjeto;
}

let objetoEntrada = {
    nome: "Daniel",
    idade: 20,
    email: "daniel@example.com"
};

function transformarMaiusculas(valor) {
    if (typeof valor === "string") {
        return valor.toUpperCase();
    } else {
        return valor;
    }
}

let novoObjeto = aplicarFuncaoEmPropriedades(objetoEntrada, transformarMaiusculas);
console.log("Novo objeto com propriedades transformadas:", novoObjeto);
