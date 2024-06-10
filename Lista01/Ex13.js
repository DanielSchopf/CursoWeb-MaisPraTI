const prompt = require('prompt-sync')();

function tabuada(numero) {
    for(let i = 1; i<=10; i++) {
        console.log(`${i} x ${numero} = ` + i*numero)
    }
}

let num= parseInt(prompt("VocÊ deseja saber a tabuada de qual número? "))
tabuada(num)