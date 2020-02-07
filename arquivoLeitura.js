const fs = require('fs')

const caminho = __dirname + '/arquivo.json'
//sincrono...

const conteudo = fs.readFileSync(caminho, 'utf-8') //NÃO RECOMENDADO PARA NÃO TRAVAR O EVENT LOOP
console.log(conteudo)

//assincrono...

fs.readFile(caminho, 'utf-8', (err, arq)=>{ //LENDO ARQUIVOS PASSANDO CALLBACK
    const config = JSON.parse(arq) // TEM QUE CONVERTER ARQUIVO JSON PARA OBJETO E DAR ACESSO
    console.log(`${config.db.host}: ${config.db.port}`)
})

//Jeito mais simples 

const config = require('./arquivo.json') // REQUIRE ARQUIVO JÁ VEM CONVERTIDO COMO OBJETO
console.log(config.db)

fs.readdir(__dirname, (erro, arquivos)=>{ //LENDO DIRETORIOS RETORNA UM ARRAY DE TODOS OS ARQS.
    console.log('Conteúdos da pasta')
    console.log(arquivos)
})


