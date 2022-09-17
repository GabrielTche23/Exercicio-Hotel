let hotel = []
let reserva = []
let contador = 0

FazerCadastro();
CadastrarReserva();





function FazerCadastro(){
    let id = contador
    let nome = prompt("Digite seu nome: ")
    let categoria = prompt("Digite a categoria que deseja ficar: ")
    let endereco = prompt("Digite o endereço: ")
    let telefone = prompt("Digite o telefone: ")
    hotel[hotel.length] = id
    hotel[hotel.length] = nome
    hotel[hotel.length] = categoria
    hotel[hotel.length] = endereco
    hotel[hotel.length] = telefone
    if(id == contador){
        contador++
    }
}
function CadastrarReserva(){
    let id = contador
    let idHotel = 0
    let nomeResponsavel = prompt("Digite o nome do responsavel: ")
    let diaEntrada = prompt("Digite o dia de Entrada: ")
    let diaSaida = prompt("Digite o dia da Saida: ")
    reserva[reserva.length] = id
    reserva[reserva.length] = idHotel
    reserva[reserva.length] = nomeResponsavel
    reserva[reserva.length] = diaEntrada
    reserva[reserva.length] = diaSaida
    if(id == contador){
        contador++
        idHotel++
    }
}
