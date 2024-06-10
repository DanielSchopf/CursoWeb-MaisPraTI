function contarPropriedadesString(objeto) {
    let contador = 0;

    for (let chave in objeto) {
        if (typeof objeto[chave] === "string") {
            contador++;
        }
    }
    return contador;
}

let meuObjeto = {
    nome: "Daniel",
    idade: 20,
    email: "daniel@example.com",
    cidade: "Santa Maria"
};

let numeroDeStrings = contarPropriedadesString(meuObjeto);
console.log("Número de propriedades do tipo string:", numeroDeStrings);
