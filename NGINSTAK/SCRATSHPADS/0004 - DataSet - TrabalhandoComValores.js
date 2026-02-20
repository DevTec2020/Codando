__includeOnce(-1898141835); // DevTools Library.ijs
const DataSet = require('@nginstack/engine/lib/dataset/DataSet');

const ds = new DataSet();

// Criando os campos nomeados com um array
ds.fieldDefs.add([
    {name: 'numero', type: 'number'},
    {name: 'nome', type: 'string', size: 30},
    {name: 'valido', type: 'boolean'}
]);
ds.create();

// Exemplo de como é criado sem array (forma padrão)
// ds.fieldDefs.add('nome', 'string',  30)

// Incerindo valores
ds.append([10, 'João', true]);
ds.append([20, 'Pedro', false]);
ds.post();


// ------ Formas de obter os dados do array ------ 
for (ds.first(); !ds.eof; ds.next()) {
    let numero = ds.getField('numero'); // Pegando pelo nome do campo
    ds.setField('numero', numero + 5);
    ds.post();

//   // OU
//     ds.str() // Texto ou Memo
//     ds.bool() // Booleanos
//     ds.dbkey() // Para Chaves
//     ds.val() // Caso não souber o tipo do campo

//   // OU
//     ds.getField(0); // Repassando qual colocação no array

}


// ------ Adicionando valores por Loop ------ 
ds.first(); // Forçando ir para o primeiro registro do ds
let c = 20;
while (c < 25){
    c++;
    ds.append([c * ds.recNo, 'Pessoa' + c, true ]);  // recNo => é o número do registro. O número fica no campo #
    ds.post();
}
// ds;


// ------ Limpa os dados do ds -----------
// ds.empty(); 
// ds;

// ------ Forma mais segura pois gera o Delta ------
// while(!ds.isEmpty){
//     ds.del();
// }

// ------ Removendo Valores por Loop ------ 
ds.first();
while (!ds.eof) {
    if(ds.bool('valido')){
        ds.next();
    } else {
        ds.del();
    }
}

ds.indexFieldNames = 'NUMERO'; // Ordenando Valores mostrados "crescente"
ds.indexFieldNames = '-NUMERO'; // Ordenando Valores mostrados "decrescente"
// OBs. o recNo que é o número da linha, continua, mas os valores são trocados.

ds;