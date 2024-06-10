const prompt= require('prompt-sync')();

function modificadorNumeros(n1, n2, n3, n4) {
    let num4 = n1 + n2 + n3
    let num1 = n1 +25
    let num2 = n2* 3
    let num3 = n3*0.12

    console.log("Número 01 modificado: "+ num1)
    console.log("Número 02 modificado: "+ num2)
    console.log("Número 03 modificado: "+ num3)
    console.log("Número 04 modificado: "+ num4)
}

let n1= parseInt(prompt("Digite o valor 01: "))
let n2= parseInt(prompt("Digite o valor 02: "))
let n3= parseInt(prompt("Digite o valor 03: "))
let n4= parseInt(prompt("Digite o valor 04: "))
modificadorNumeros(n1, n2, n3, n4)