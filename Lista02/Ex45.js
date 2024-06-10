function contarStrings(array) {
    let objeto = {};

    array.forEach(function(string) {
        if (objeto[string]) {
            objeto[string]++;
        } else {
            objeto[string] = 1;
        }
    });
    return objeto;
}

let arrayDeStrings = ["maçã", "banana", "maçã", "laranja", "banana", "maçã"];
let objetoContador = contarStrings(arrayDeStrings);
console.log("Objeto com contagens:", objetoContador);
