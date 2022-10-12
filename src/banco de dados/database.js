const pgp = require ( 'pg-promise')

const db = pgp({
    user: "postgres",
    password: "123456",
    host: "localhost",
    port: 5432,
    database: "DB.SYS1"
})
module.exports = 



/*
//Criar conexão com o banco
cliente.connect() //abrir conexão
cliente.query("select * from bookshop ") //executar a query
.then(results => { //jogar resultado da query no results
    const resultado = results.rows //jogar as linhas do resultado na constante resultado
    console.table(resultado) //exibir resultado no console
})

.finally(() => cliente.end()) //fecha conexão
 
*/
module.exports = cliente;