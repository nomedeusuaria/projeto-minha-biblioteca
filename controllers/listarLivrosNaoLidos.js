const livros = require('../database')
const read = require('readline-sync')


const listarLivrosNaoLidos = () => {
   const opcaoInicial = read.question('Deseja ver os livros que ainda nao foram lidos? S/N').toUpperCase()
   
    if (opcaoInicial === 'S') {
        const livrosNaoLidos = livros.filter(livro => livro.leu === false)
        console.table(livrosNaoLidos)
        
    }else if(opcaoInicial === "N"){
        console.log(`Caso deseje retornar ao menu inicial, digite: "npm start".`)
    }else{
        console.log(`Digite uma opção válida.`)
    }
}
module.exports = listarLivrosNaoLidos