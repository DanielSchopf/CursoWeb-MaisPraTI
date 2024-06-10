const prompt= require('prompt-sync')()

function validaHorario(horario) {
    const regex= /^([0-1][0-9]|2[0-3]):([0-5][0-9]):([0-5][0-9])$/;
    return regex.test(horario)
}

let horarios=[]
let horario
    for(let i=0;i<5;i++) {
        horario= prompt("Digite um horário no formato (HH:MM:SS): ")
        if(validaHorario(horario)){
            horarios.push(horario)
        } else {
            console.log("Padrão incorreto!")
        }
    }

console.clear()
console.log("Horário válidos:")

for(let i=0;i<horarios.length;i++) {
    console.log(horarios[i])
}
