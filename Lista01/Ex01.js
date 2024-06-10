const prompt= require('prompt-sync')();

function CelsiusParaFahrenheit(tempC) {
    let tempF = (tempC* 9/5) + 32
    console.log("A temperatura em Fahrenheit é: " + tempF.toFixed(2)+ " graus")
}

let tempC= parseFloat(prompt("Digite uma temperatura em Celsius: "))
CelsiusParaFahrenheit(tempC)