vagas = []

function listarVagas(){
    const vagasEmTexto = Vagas.reduce(function (textoFinal, vaga, indice){
        textoFinal += indice + ". "
        textoFinal += vaga.nome
        textoFinal += " (" + vaga.candidatos.length + " candidatos)\n"
        return textoFinal
    }, "")

    alert(vagasEmTexto)
}

function novaVaga(){
    const nome = prompt("informe um nome para a vaga:")
    const descricao = prompt("Informe uma descrição para a vaga:")
    const dataLimite = prompt("Informe a data limite (dd/mm/aaaa) para a vaga:")

    const confirmacao = confirm(`Deseja criar uma vaga com essas informações ?\n
        Nome: ${nome} \nDescrição: ${descricao} \nData limite: ${dataLimite}`
    )

    if(confirmacao){
        const novaVaga = {nome, descricao, dataLimite, candidatos: []}
        vagas.push(novaVaga)
        alert("Vaga Criada.")
    }
}

function exibirVaga(){
    const indice = prompt("Informe o indice da vaga que deseja consultar:")
    const vaga = Vagas[indice]

    const candidatosEmTexto = vaga.candidatos.reduce( function (textoFinal, candidado){
        return textoFinal  + `\n ${candidado}`
    },"")

    alert(
        `Vaga nº ${indice}
        Nome: ${vaga.nome}
        Descrição: ${vaga.descricao}
        Data Limite: ${vaga.dataLimite}
        Quantidade de Candidatos: ${vaga.candidatos.length}
        Candidatos Inscritos: ${candidatosEmTexto}`
    )
}

function inscreverCandidato(){
    const candidato = prompt("Informe o nome do(a) candidato(a):")
    const indice = prompt("Informe o indice da vaga para qual o(a) candidato(a) irá se inscrever:")
    const vaga = vaga[indice]

    const confirmacao = confirm(
        `Deseja inscrever o(a) candidato(a) ${candidato} na vaga ${indice} Nome: ${vaga.nome} Descrição: ${vaga.descricao} Data Limite: ${vaga.dataLimite}`
    )

    if(confirmacao){
        vaga.candidatos.push(candidato)
        alert("Inscrição Realizada")
    }
}

function excluirVaga(){
    const indice = prompt("Informe o indice da vaga que deseja excluir:")
    const vaga = Vagas[indice]   

    const confirmacao = confirm(
        `Tem certeza que deseja excluír a vaga:
        ${indice} Nome: ${vaga.nome} Descrição: ${vaga.descricao} Data Limite: ${vaga.dataLimite}`
    )

    if(confirmacao){
        Vagas.splice(indice,1)
        alert("Vaga Excluída.")
    }
}

function exibirMenu(){
    const opcao = prompt(
        `Bem Vindo ao Portal de Vagas\n
        Escolha uma opção:
        1- Listar Vagas 
        2- Criar Nova Vaga
        3- Visualizar Vaga
        4- Inscrever Candidato
        5- Excluir vaga
        6- Sair`
    )

    return opcao
}


function executar(){
    let opcao = ""

    do {
        opcao = exibirMenu()

        switch(opcao) {
            case "1":
                listarVagas()
                break
            case "2":
                novaVaga()
                break
            case "3":
                exibirVaga()
                break
            case "4":
                inscreverCandidato()
                break
            case "5":
                excluirVaga()
                break
            case "6":
                alert("Saindo ...")
                break
            default:
                alert("Opção invalida")
                break
        }
    } while(opcao !== "6")
}