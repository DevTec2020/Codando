let opcao =""
let Vagas = []

do {
    opcao = prompt(`Bem Vindo ao Portal de Vagas\n
                Escolha uma opção:
                1- Listar Vagas 
                2- Criar Nova Vaga
                3- Visualizar Vaga
                4- Inscrever Candidato
                5- Excluir vaga
                6- Sair`)

    switch(opcao) {
        case "1":
            console.log(Vagas)
            let listarVagas = ""
            for(i=0; i<Vagas.length; i++){
                listarVagas+= `${i} - ${Vagas[i].nomeVaga} (${Vagas[i].candidatos.length} Candidatos)\n`
            }

            listarVagas === "" ? listarVagas = "\nNenhuma Vaga Cadastrada" : listarVagas = listarVagas

            alert(`Listando vagas:\n ${listarVagas}`)
            break
        case "2":
            let nomeVaga = prompt("Qual o nome da vaga ?")
            let descricao = prompt("Descreva a vaga:")
            let dtLimite = prompt("Diga a data limite:")

            confirm(`Confirma os dados ?\n Nome da vaga: ${nomeVaga}\n Descrção: ${descricao}\n Data Limite: ${dtLimite}\n`)
            criarVaga(nomeVaga, descricao, dtLimite)
            break
        case "3":
            let buscar = prompt("Digite o indice da vaga")
            let candidatos=""
            for(i=0; i< Vagas[buscar].candidatos; i++){
                candidatos+= Vagas[buscar].candidatos[i]
            }

            candidatos === "" ? candidatos = 0 : candidatos = candidatos

            alert(`Dados da Vaga:\n\n Cargo: ${Vagas[buscar].nomeVaga}\n Descrição: ${Vagas[buscar].descricao}\n Data Limite: ${Vagas[buscar].dtLimite}\n Candidatos: ${candidatos}`)

            break
        case "4":
            alert("Escolhido 4")
            break
        case "5":
            alert("Escolhido 5")
            break
        case "6":
            alert("Saindo ...")
            break
        default:
            alert("Opção invalida")
            break
    }
}while(opcao !== "6")



function criarVaga(nomeVaga, descricao, dtLimite){
    const novaVaga = {nomeVaga, descricao, dtLimite, candidatos:[]}
    Vagas.push(novaVaga)
}