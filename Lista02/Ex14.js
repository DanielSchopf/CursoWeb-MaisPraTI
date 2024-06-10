const prompt= require('prompt-sync')()

let pessoas = []

for(let i=0;i<7;i++) {
    let pessoa = prompt("Digite um nome: ")
    pessoas[i]= pessoa
}
console.clear()
for(let j=7;j>=0;j--) {
    console.log(pessoas[j])
}