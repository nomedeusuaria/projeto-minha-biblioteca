const livros = require("../database")
const read = require("readline-sync")

const buscarAutor = () => {
    const buscarAutor = read.question("Deseja procurar por autores? S/N ").toUpperCase()

    if (buscarAutor === "S") {
        const listarAutores = livros.filter(livro => livro.autor === true)
        console.table(listarAutores)
    }else if(opcaoInicial === "N"){
        console.log(`Caso deseje retornar ao menu inicial, digite: "npm start".`)
    }else{
        console.log(`Digite uma opção válida.`)
    }
}
module.exports = buscarAutor