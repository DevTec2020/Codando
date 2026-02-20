__includeOnce(-1898141835); // DevTools Library.ijs

// Consultando dados de Recuros dentro do banco
const classes = require("@nginstack/engine/lib/database/Classes").getInstance();

const ds = classes.getCachedDataSet(-2007800000 /* Recursos */);

// ds;


// Mostra os registros da tabela ivfs

const dbCache = require("@nginstack/engine/context").dbCache;
// dbCache.getTable('ivfs'); // Mostra os registros da tabela ivfs



// Consulta as chaves negativas na tabela ENTIDADE 
const database = require("@nginstack/engine/context").database;

const ds = database.query('select * from entidade where chave < 0');
//ds;

