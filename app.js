const read = require("readline-sync")
const buscarLivros = require("./controllers/buscarLivros")
const livros = require("./database")

const answer = read.question(`
=============== MENU ===============


1 - CATEGORIA: Busca livros por categoria
2 - AUTORES: Busca livros por autor
3 - RECOMENDADOS: Busca livros recomendados
4 - ORDENAR: Ordena livros por quantidade de páginas
5 - LISTA DE DESEJO: Busca livros não lidos
6 - SAIR

Selecione uma opcao [1-5]:
`)

console.log(livros)

switch (answer) {
    case '1':
      buscarLivros()
      break
      case '2':
        buscarAutor()
        break
      case '3':
        listarLivrosOrdenados()
        break
    case '4':
        listarLivrosRecomendados()
        break
    case '5':
        listarLivrosNaoLidos()
        break
    case '6':
        console.log('Até a próxima')
        break
    default:
        console.log('fim do algorítimo')
}