const sequence ={
    _id: 1,
    get id(){return this._id++}
}

const Produtos = {}

function salvarProduto(produto){
    if(!produto.id) produto.id = sequence.id
    Produtos[produto.id] = produto
    return produto
}

function getProduto(id){
    return Produtos[id] || {}
}

function getProdutos(){
    return Object.values(Produtos)
}

function excluirProduto(id){
    const produto = Produtos[id]
    delete Produtos[id]
    return produto
}

module.exports = {salvarProduto, getProduto, getProdutos, excluirProduto}
