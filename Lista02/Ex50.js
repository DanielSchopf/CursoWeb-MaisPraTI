const prompt = require('prompt-sync')();

let hoteis = [];
let reservas = [];

function adicionarHotel(id, nome, cidade, quartosTotais, quartosDisponiveis) {
    let hotel = {
        id: id,
        nome: nome,
        cidade: cidade,
        quartosTotais: quartosTotais,
        quartosDisponiveis: quartosDisponiveis
    };
    hoteis.push(hotel);
}

function buscarHoteisPorCidade(cidade) {
    let hoteisNaCidade = hoteis.filter(function(hotel) {
        return hotel.cidade === cidade;
    });
    return hoteisNaCidade;
}

function fazerReserva(idReserva, idHotel, nomeCliente) {
    let hotel = hoteis.find(function(h) {
        return h.id === idHotel;
    });
    if (hotel && hotel.quartosDisponiveis > 0) {
        hotel.quartosDisponiveis--;
        let reserva = {
            idReserva: idReserva,
            idHotel: idHotel,
            nomeCliente: nomeCliente
        };
        reservas.push(reserva);
        return true;
    } else {
        return false;
    }
}

function cancelarReserva(idReserva) {
    let reservaIndex = reservas.findIndex(function(r) {
        return r.idReserva === idReserva;
    });
    if (reservaIndex !== -1) {
        let reserva = reservas[reservaIndex];
        let hotel = hoteis.find(function(h) {
            return h.id === reserva.idHotel;
        });
        hotel.quartosDisponiveis++;
        reservas.splice(reservaIndex, 1);
        return true;
    } else {
        return false;
    }
}

function listarReservas() {
    let lista = reservas.map(function(reserva) {
        let hotel = hoteis.find(function(h) {
            return h.id === reserva.idHotel;
        });
        return {
            idReserva: reserva.idReserva,
            nomeCliente: reserva.nomeCliente,
            hotel: hotel
        };
    });
    return lista;
}

function exibirMenu() {
    console.log("===== MENU =====");
    console.log("1. Adicionar Hotel");
    console.log("2. Buscar Hotéis por Cidade");
    console.log("3. Fazer Reserva");
    console.log("4. Cancelar Reserva");
    console.log("5. Listar Reservas");
    console.log("0. Sair");
}

function iniciarSistema() {
    let opcao;
    do {
        exibirMenu();
        opcao = parseInt(prompt("Selecione uma opção: "));
        switch (opcao) {
            case 1:
                let id = parseInt(prompt("ID do hotel: "));
                let nome = prompt("Nome do hotel: ");
                let cidade = prompt("Cidade do hotel: ");
                let quartosTotais = parseInt(prompt("Quartos totais do hotel: "));
                let quartosDisponiveis = parseInt(prompt("Quartos disponíveis do hotel: "));
                adicionarHotel(id, nome, cidade, quartosTotais, quartosDisponiveis);
                break;
            case 2:
                let cidadeBusca = prompt("Digite a cidade para buscar hotéis: ");
                let hoteisEncontrados = buscarHoteisPorCidade(cidadeBusca);
                console.log("Hotéis encontrados em " + cidadeBusca + ":", hoteisEncontrados);
                break;
            case 3:
                let idReserva = parseInt(prompt("ID da reserva: "));
                let idHotelReserva = parseInt(prompt("ID do hotel para reserva: "));
                let nomeClienteReserva = prompt("Nome do cliente para reserva: ");
                if (fazerReserva(idReserva, idHotelReserva, nomeClienteReserva)) {
                    console.log("Reserva feita com sucesso!");
                } else {
                    console.log("Não foi possível fazer a reserva. Quartos insuficientes ou hotel não encontrado.");
                }
                break;
            case 4:
                let idReservaCancelar = parseInt(prompt("ID da reserva para cancelar: "));
                if (cancelarReserva(idReservaCancelar)) {
                    console.log("Reserva cancelada com sucesso!");
                } else {
                    console.log("Não foi possível cancelar a reserva. Reserva não encontrada.");
                }
                break;
            case 5:
                let listaReservas = listarReservas();
                console.log("Lista de reservas:", listaReservas);
                break;
            case 0:
                console.log("Sistema encerrado.");
                break;
            default:
                console.log("Opção inválida. Por favor, selecione uma opção válida.");
                break;
        }
    } while (opcao !== 0);
}

iniciarSistema();
