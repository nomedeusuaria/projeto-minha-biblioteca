const livros = require("../database")
const read = require("readline-sync")

const listarLivrosOrdenados = () => {

    const opcaoInicial = read.question("Deseja ver livros ordenados por número de paginas? S/N ").toUpperCase()
    if (opcaoInicial === "S") {
        livros.sort((A, B) => {
            return A.paginas - B.paginas
        })
        console.table(livros)

    }else if(opcaoInicial === "N"){
        console.log(`Caso deseje retornar ao menu inicial, digite: "npm start".`)
    }else{
        console.log(`Digite uma opção válida.`)
    }
}

module.exports = listarLivrosOrdenados