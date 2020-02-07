require('./global')

console.log(minhaApp.saudacao())

minhaApp.nome = 'Eita'
console.log(minhaApp.nome) // Ele altera o valor do atributo global para eita.. usando freeze no outro modulo não altera
                            // Usando o Object.freeze() -> Sistema legal

