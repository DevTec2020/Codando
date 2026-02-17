const vendas = [
    { id: 1, produto: 'Notebook', preco: 4500, status: 'ENTREGUE', cliente: 'Ana' },
    { id: 2, produto: 'Mouse', preco: 150, status: 'PENDENTE', cliente: 'Bruno' },
    { id: 3, produto: 'Teclado', preco: 300, status: 'CANCELADO', cliente: 'Ana' },
    { id: 4, produto: 'Monitor', preco: 1200, status: 'ENTREGUE', cliente: 'Carlos' },
    { id: 5, produto: 'Notebook', preco: 4500, status: 'ENTREGUE', cliente: 'Bruno' },
    { id: 6, produto: 'Cabo HDMI', preco: 50, status: 'PENDENTE', cliente: 'Ana' }
];


// filtrarEntregues: Deve retornar uma lista contendo apenas as vendas com status 'ENTREGUE'. (Dica: use filter)
const filtrarEntregues = vendas.filter(venda => venda.status === 'ENTREGUE' )


// gerarListaDePrecos: Deve retornar um array contendo apenas os preços das vendas, para cálculos futuros. Ex: [4500, 150, ...]. (Dica: use map)
const gerarListaDePrecos = vendas.map(venda => venda.preco)


// calcularFaturamentoTotal: Deve somar o valor de todas as vendas realizadas (independente do status) e retornar o valor total. (Dica: use reduce)
const calcularFaturamentoTotal = vendas.reduce((total, venda) => {
    return total + venda.preco;
}, 0)


// resumoDeVendas: (Desafio Extra) Deve retornar um novo array de objetos, onde cada objeto contém apenas: id, resumo (uma string dizendo "Ana comprou Notebook") e valorAjustado (o preço com 10% de desconto aplicado).
const resumoDeVendas = vendas.map(venda => {
    const id = venda.id
    const resumo = `${venda.cliente} comprou ${venda.produto}`
    const valorAjustado  = venda.preco - (venda.preco * 0.10)

    let relatorioVendas = {id, resumo, valorAjustado}

    return relatorioVendas
} )


// buscarVendaPorId(id): Recebe um ID e retorna o objeto da venda específica. Se não achar, retorna undefined. (Dica: use find)
function buscarVendaPorId(idBuscado) {
   return vendas.find(venda => venda.id === idBuscado)
}


// Eu quero saber as compras agrupadas por cada cliente.
const agruparVendasPorCliente  = vendas.reduce((acumulador, venda) => {
    const chave = venda.cliente;

    if(!acumulador[chave]){
        acumulador[chave] = []
    }

    acumulador[chave].push(venda)

    return acumulador

},{})


// Eu quero saber as compras agrupadas por status.
const agrupamentoPorStatus = vendas.reduce((acumulador, venda) => {
    const chave =  venda.status
    
    if(!acumulador[chave]){
        acumulador[chave] = []
    }

    acumulador[chave].push(venda)

    return acumulador
},{})



console.log(agrupamentoPorStatus)