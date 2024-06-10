const prompt= require('prompt-sync')()

function isMinor(num) {
    if(num<18) {
        return true
    } else {
        return false
    }
}

let idades= []
let nomes= []

for(let i=0;i<9;i++) {
    nomes[i]= prompt("Digite o nome de uma pessoa: ")
    idades[i]= parseInt(prompt("Digite a idade do(a) "+nomes[i]+": "))
    console.clear()
}

console.log("\nDados das pessoas menores de idade:\n")
for(let i=0;i<9;i++) {
    let idade = idades[i]
    if(isMinor(idade)) {
        console.log("Nome: "+nomes[i]+"\nIdade:"+idades[i]+"\n\n")
    }
}
