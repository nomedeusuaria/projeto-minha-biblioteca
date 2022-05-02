const livros = require("../database")
const read = require("readline-sync")

const listarLivrosRecomendados = () => {
    const livrosRecomendados = read.question("Deseja filtrar os livros recomendados? S/N ").toUpperCase()

    if (livrosRecomendados === "S") {
        const listaRecomendados = livros.filter(livro => livro.recomenda === true)
        console.table(listaRecomendados)
    }else if(opcaoInicial === "N"){
        console.log(`Caso deseje retornar ao menu inicial, digite: "npm start".`)
    }else{
        console.log(`Digite uma opção válida.`)
    }
}
module.exports = listarLivrosRecomendados