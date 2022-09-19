//Hotel
let id = [1,2,3,4]
let nome = ["gabriel","nathan","mahoni","ruan"]
let categoria = ["a","b","c","d"]
let endereço = ["endereço1","endereço2","endereço3","endereço4"]
let telefone = ["telefone1","telefone2","telefone3","telefone4"]
//Reserva
let idHotel = [1,2,3,4]
let nomeResponsavel = ["fulano","ciclano","joao","martins"]
let diaEntrada = [10,26,13,18]
let diaSaida = [27,28,16,25]

//FazerCadastro();
//CadastrarReserva();
//ExibirReservas(2);



function FazerCadastro(){
    let registrarId = prompt("Digite o ID: ")
    let registrarNome = prompt("Digite seu nome: ")
    let registrarCategoria = prompt("Digite a categoria que deseja ficar: ")
    let registrarEndereco = prompt("Digite o endereço: ")
    let registrarTelefone = prompt("Digite o telefone: ")
    id[id.length] = registrarId
    nome[nome.length] = registrarNome
    categoria[categoria.length] = registrarCategoria
    endereço[endereço.length] = registrarEndereco
    telefone[telefone.length] = registrarTelefone
}
function CadastrarReserva(){
    let registrarId = prompt("Digite o ID: ")
    let registrarIdHotel = prompt("Digite o ID do Hotel: ")
    let registrarNomeResponsavel = prompt("Digite o nome do responsavel: ")
    let registrarDiaEntrada = prompt("Digite o dia de Entrada: ")
    let registrarDiaSaida = prompt("Digite o dia da Saida: ")
    id[id.length] = registrarId
    idHotel[idHotel.length] = registrarIdHotel
    nomeResponsavel[nomeResponsavel.length] = registrarNomeResponsavel
    diaEntrada[diaEntrada.length] = registrarDiaEntrada
    diaSaida[diaSaida.length] = registrarDiaSaida
    if(diaEntrada[index] > diaEntrada[index]){
        console.log("Impossivel fazer isso.")
    }
}

function ExibirReservas(idHotelParametro){
    let reservaAux = []
    idHotel.forEach((reserva,index) => {
        if(reserva == idHotelParametro){
            reservaAux[reservaAux.length] = idHotel[index]
            reservaAux[reservaAux.length] = nomeResponsavel[index]
            reservaAux[reservaAux.length] = diaEntrada[index]
            reservaAux[reservaAux.length] = diaSaida[index]
        }
    })
    console.log("Reserva do Hotel: ", idHotelParametro)
    reservaAux.forEach(reserva => console.log(reserva))
}