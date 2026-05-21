// class Pessoa{
//     constructor(nome, idade){
//         this.nome = nome
//         this.idade = idade
//     }
// }

// const tio = new Pessoa("Mateus", 15) 

// class Alfabeto Grego{
//     constructor( α,β,γ,δ,ε,ζ,η,θ,ι,k,λ,μ,ν,ξ,ο,π,ρ,σ,ς,τ,υ,φ,χ,ψ,ω){
//         this.α = α
//         this.β = β
//         this.γ = γ
//         this.π = π
//         this.δ = δ
//     }
// }

// const letras = new Alfabeto Grego(α,β,γ,δ,π)

class PopupInfo extends HTMLElement{
    constructor(){
        super()
        this.shadow = this.attachShadow({mode: 'open'})

        const template = document.getElementById('popup-template')

        this.shadow.appendChild(template.contentEditable.cloneNode(true))

    }

    connectedCallback()
    {
        if(this.hasAttribute('img')){
            const img = this.shadowRoot.querySelector('img')
            img.src = this.getAttribute('img')
        }
    }
}
customElements.define("popup-info",PopupInfo )