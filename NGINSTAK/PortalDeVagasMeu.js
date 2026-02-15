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

    let indiceVaga = 0

    switch(opcao) {
        case "1":
            alert(`Listando vagas:\n ${listarVagas()}`)
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

            alert(buscarvaga(buscar))
            
            break
        case "4":
            indiceVaga = prompt("Digite o indice da vaga")

            const INDICE = Vagas[indiceVaga]
            if (INDICE) {
                alert(`${cadastrarCandidato(INDICE)}`)
            } else {
                alert("Vaga Não encontrada, liste todas na opção 1")
            }
            break
        case "5":
            indiceVaga = prompt("Digite o indice da vaga")

            excluirVaga(indiceVaga)

            break
        case "6":
            alert("Saindo ...")
            break
        default:
            alert("Opção invalida")
            break
    }
}while(opcao !== "6")


function listarVagas(){
    let VagasEncontradas = ""
    for(i=0; i<Vagas.length; i++){
        VagasEncontradas+= `${i} - ${Vagas[i].nomeVaga} (${Vagas[i].candidatos.length} Candidatos)\n`
    }

    VagasEncontradas === "" ? VagasEncontradas = "\nNenhuma Vaga Cadastrada" : VagasEncontradas = VagasEncontradas

    return VagasEncontradas
}

function criarVaga(nomeVaga, descricao, dtLimite){
    const novaVaga = {nomeVaga, descricao, dtLimite, candidatos:[]}
    Vagas.push(novaVaga)
}

function buscarvaga(indiceParaBuscar){
    let nomeCandidatos=""
    const INDICE = Vagas[indiceParaBuscar]

    if(INDICE){
        for(i=0; i< INDICE.candidatos.length; i++){
            nomeCandidatos+= `${INDICE.candidatos[i]}\n`
        }
    
        let qtdCandidatos= INDICE.candidatos.length
    
        return(` 
        Cargo: ${INDICE.nomeVaga} 
        Descrição: ${INDICE.descricao} 
        Data Limite: ${INDICE.dtLimite}
        Qtd de Candidatos: ${qtdCandidatos}
        Nome dos Candidatos:\n ${nomeCandidatos}
        `)
    } else {
        return("Vaga Não encontrada, liste todas na opção 1")
    }

}

function cadastrarCandidato(INDICE){
    
    let nomeCandidato = prompt("Digite o nome do candidato")

    confirm(`Deseja cadastrar o candidado (${nomeCandidato}) na Vaga (${INDICE.nomeVaga}) ?`)

    INDICE.candidatos.push(nomeCandidato)

    return("Candidato cadastrado")
}

function excluirVaga(indiceVaga){
    const INDICE = Vagas[indiceVaga]
    if (INDICE) {
        let confirmaExcluir = confirm(`Deseja Excluir essa vaga ?\n ${buscarvaga(indiceVaga)}`)

        if (confirmaExcluir){
                Vagas.splice(indiceVaga,1)
        }
            
        return alert(`Vaga excluída`)
    }  else {
        alert("Vaga Não encontrada, liste todas na opção 1")
    }
}
