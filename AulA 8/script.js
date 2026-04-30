const botao = document.querySelector('#botao')
const placar = document.querySelector('#placar')
const container = document.querySelector('#game-container')

let pontos = 0

function moverBotao(){
    const largura = container.clientWidth - 100
    const altura = container.clientHeight - 40

    const x = Math.random() * largura
    const y = Math.random() * altura

    botao.style.left = `${x}px`
    botao.style.top = `${y}px`
}

botao.addEventListener('mouseover', moverBotao)

botao.addEventListener('click', () => {
    pontos++
    placar.textContent = pontos
    alert("-_-")
})