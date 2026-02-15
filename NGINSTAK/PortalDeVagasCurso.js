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