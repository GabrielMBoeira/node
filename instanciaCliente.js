const contadorA = require('./instanciaUnica')
const contadorB = require('./instanciaUnica') // retona o valor que está no momento pq module.exports = {} 
                                              // A e B apontam para o mesmo objeto


const contadorC = require('./instanciaNova')() // valor não altera pq é uma função Factory.. toda vez q é chamada
const contadorD = require('./instanciaNova')() // ela gera novo objeto A e B apontam para obj diferentes

contadorA.inc()
contadorA.inc() 
console.log(contadorA.valor, contadorB.valor)

contadorC.inc()
contadorC.inc()
console.log(contadorC.valor, contadorD.valor)