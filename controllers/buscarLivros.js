const livros = require('../database')
const read = require('readline-sync')

const buscarLivros = () => {

  const opcaoInicial = read.question('Deseja buscar por categoria? S/N ').toUpperCase()


  if (opcaoInicial === 'S') {
    
    const categorias = livros.map(livro => livro.categoria)
    console.table(categorias)

    const inputCategoria = read.question('Digite uma categoria conforme tabela acima: ')

    const confirmacao = read.question('Tem certeza? S/N ').toUpperCase()

    if (confirmacao === 'S') {
      const livrosFiltrados = livros.filter(livro => livro.categoria === inputCategoria)
      console.table(livrosFiltrados)
    }else if(opcaoInicial === "N"){
        console.log(`Caso deseje retornar ao menu inicial, digite: "npm start".`)
    }else{
        console.log(`Digite uma opção válida.`)
    }
  }
}

module.exports = buscarLivros