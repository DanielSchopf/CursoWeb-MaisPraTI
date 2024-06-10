const prompt= require('prompt-sync')()

function pontosAtividade (tempoAtv) {
    let pontosHora
    switch(true) {
        case (tempoAtv <= 10):
            pontosHora = tempoAtv*2
            break
        case (tempoAtv >10 && tempoAtv <= 20):
            pontosHora= tempoAtv*5
            break
        case (tempoAtv > 20):
            pontosHora = tempoAtv*10
            break
    }
    let valorGanho= pontosHora * 0.05
    console.log("Você ganhou R$ " + valorGanho + " reais pelas atividades realizadas!")
}

let tempoAtividade= parseInt(prompt("Quantas horas de atividade física você fez no mês? "))
pontosAtividade(tempoAtividade)