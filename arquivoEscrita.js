const fs = require('fs')

const produto = {
    nome: 'Celular',
    valor: 1999.00,
    deconto: 0.15
}

fs.writeFile(__dirname + '/arquivoGerado.json', JSON.stringify(produto), err=>{
    console.log(err || 'Arquivo salvo com sucesso')
})