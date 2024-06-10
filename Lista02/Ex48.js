function combinarInventarios(inventarioLojaA, inventarioLojaB) {
    let inventarioComb = {};

    for (let itemA in inventarioLojaA) {
        inventarioComb[itemA] = inventarioLojaA[itemA];
    }

    for (let itemB in inventarioLojaB) {
        if (inventarioComb[itemB]) {
            inventarioComb[itemB] += inventarioLojaB[itemB];
        } else {
            inventarioComb[itemB] = inventarioLojaB[itemB];
        }
    }
    return inventarioComb;
}

let inventarioLojaA = {
    "maçã": 8,
    "banana": 12,
    "laranja": 18
};

let inventarioLojaB = {
    "banana": 16,
    "pera": 8,
    "uva": 22
};


let inventarioCombinado = combinarInventarios(inventarioLojaA, inventarioLojaB);
console.log("Inventário combinado:", inventarioCombinado);
