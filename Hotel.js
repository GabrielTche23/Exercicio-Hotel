//Hotel
let id = [1,2,3,4]
let nome = ["hotel1","hotel2","hotel3","hotel4"]
let categoria = ["a","b","c","d"]
let endereço = ["endereço1","endereço2","endereço3","endereço4"]
let telefone = ["telefone1","telefone2","telefone3","telefone4"]
//Reserva
let idHotel = [1,2,3,4]
let nomeResponsavel = ["gabriel","nathan","gabriel","ruan"]
let diaEntrada = [10,26,13,18]
let diaSaida = [27,28,16,25]

//FazerCadastro();
//CadastrarReserva();
//ExibirReservas(2);
//ExibirHotel(1);
ExibirReservasdeUmaPessoa("gabriel")

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
            reservaAux[reservaAux.length] = nome[index]
            reservaAux[reservaAux.length] = nomeResponsavel[index]
            reservaAux[reservaAux.length] = diaEntrada[index]
            reservaAux[reservaAux.length] = diaSaida[index]
        }
    })
    console.log("Reserva do Hotel: ", idHotelParametro)
    reservaAux.forEach(reserva => console.log(reserva))
}

function ExibirHotel(idParametro){
    let hotelAux = []
    id.forEach((hotel,index) => {
        if(hotel == idParametro){
            hotelAux[hotelAux.length] = nome[index]
            hotelAux[hotelAux.length] = endereço[index]
            hotelAux[hotelAux.length] = diaEntrada[index]
            hotelAux[hotelAux.length] = diaSaida[index]
        }
    })
}

function ExibirReservasdeUmaPessoa(nomeParametro){
    let reservasAux = []
    nomeResponsavel.forEach((nomes,index) => {
        if(nomes == nomeParametro){
            reservasAux[reservasAux.length] = nome[index]
            reservasAux[reservasAux.length] = nomeResponsavel[index]
            reservasAux[reservasAux.length] = diaEntrada[index]
            reservasAux[reservasAux.length] = diaSaida[index]
        }
    })
    reservasAux.forEach(reservas => console.log(reservas))
}

function ExibirCategoria(categoriaParametro){
    let categoriaAux = []
    categoria.forEach((categoria,index) => {
        if(categoria == categoriaParametro){
            categoriaAux[categoria.length] = categoria[index]
            return categoriaAux
        }
    })
}

function AtualizarTelefone(idHotelParametro,telefoneParametro){
    idHotel.forEach((id,index) => {
            if(id == idHotelParametro){
                telefone[index] = telefoneParametro
            }
    })
}