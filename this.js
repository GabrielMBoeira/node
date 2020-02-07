console.log(this === global) // retorna false
console.log(this === module) // retorna false

console.log(this === module.exports) // retorna true
console.log(this === exports) // retorna true

function logThis(){
    console.log('Dentro de uma função') //This dentro da função não aponta para exports 
    console.log(this === exports)       //-> dentro da funcão this aponta para global
    console.log(this === module.exports) //This dentro da função não aponta para module.exports
    console.log(this === global)  
    this.perigo = '...'      //-> dentro da funcão this aponta para global
}                                  

// module.exports === algo publico.. fora do módulo
logThis()