__includeOnce(-1898141835); // DevTools Library.ijs
const DataSet = require('@nginstack/engine/lib/dataset/DataSet');

//  Instanciando Dataset
const ds = new DataSet();

// Descrevendo os campos
ds.createField('numero', 'int32');
ds.createField('nome', 'string', 30);
ds.createField('ativo', 'boolean');

// Comando para criar o campo
ds.create();

// ------------ Incerindo registros ----------------
ds.append();
ds.setField('numero', 10);
ds.setField('nome', 'João');
ds.setField('ativo', true);
ds.post(); // Confirma

// Outra forma de fazer
ds.append([20, 'Pedro', false]);
ds.post();

// Copiando de outro DataSet
// ds.append(OutroDataSet);


// Chama para visualizar a grid
ds;