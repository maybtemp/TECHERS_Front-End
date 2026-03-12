

// document.getElementById(id)//retorna o elemento com o id passado
// document.getElementsByClassName(nome)//retorna com todas as tags dessa classe
// document.getElementsByClassName(nome)//retornar um vetor com todas as tags com esse nome

// const titulo = document.getElementById(titulo1)

// titulo.textContent = "Titulo adicionado com JS"
// titulo.setAttribute("class", "titulo-base")
// titulo.style.color = "red"

let src = "SlimeFace.webp"
let text = "Slime"
let titulo = "UMA IMAGEM DE UM SLIME"

const infoCard = document.getElementById('info1')
const tituloCard = document.getElementById('titulo1')
const imgCard = document.getElementById('img1')

imgCard.setAttribute('src', src)
infoCard.textContent = text
tituloCard.textContent = titulo