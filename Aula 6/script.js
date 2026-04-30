// console.log("What Is This")
// console.log(3*5)

// // const, var, let//
// let idade = 15
// const nome = "Mateus"

// console.log(nome)

// console.log('Bem vindo, ${nome}!')  
// // is elseif else//
// // if(true){

// // }   
// // elif(){

// // }
// // else(){

// // }
// // for(let i = 0; i <= 10; i++){

// // }
// // for(let i = 10; i => 0; i--){

// // }
// let letras = ["b"]
// console.log(letras[0])
// letras[0] = "a"

// for (let i = 0; i < letras.length; i++){
//     console.log(letras[i])
// }
function mudarTudo(){
    const titulo = document.getElementById(`titulo`)
    titulo.innerText = "Lista de compras!"
    titulo.style.color = "blue"
    let itens = ["a", "b", "c", "d", "e"]
    let container = document.getElementById("lista-frutas")
    container.innerHTML = ""
    for(let i = 0; i < itens.length; i++){
        container.innerHTML += `<p>Item ${i+1} ${itens[i]}</p>`
    }

}
