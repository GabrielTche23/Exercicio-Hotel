let hotel = []
let reserva = []
let contador = 0


function FazerCadastro(){
    let id = contador
    let nome = prompt("Digite seu nome: ")
    let categoria = prompt("Digite a categoria que deseja ficar: ")
    let endereco = prompt("Digite o endereço: ")
    let telefone = prompt("Digite o telefone: ")
    hotel[hotel.length] = id,nome,categoria,endereco,telefone
    if(id == contador){
        contador++
    }
}