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
    }

    connectedCallback(){
        const wrapper = document.createElement('span');
        wrapper.setAttribute("class","wrapper");

        const icon = document.createElement("span");
        icon.setAttribute("class", "icon")
        icon.setAttribute("tabindex", 0)

        const info = document.createElement("span")
        info.setAttribute("class", "info")

    
    const text = this.getAttribute("data-text");
    info.textContent = text;
    
    
    let imgUrl;
    if(this.hasAttribute("img")){
        imgUrl = this.getAttribute("img")
    }
    else
        {
        imgUrl = "M/nao-grita-nao-grita.png" 
    }

    const img = document.createElement('img')
    img.scr = img.Url;
    img.setAttribute("alt","Icone de informacao")
    img.setAttribute("width","100px")

    const style = document.createElement("Style")
    style.textContent = `
    .wrapper{position: relative; display: inline-block;}
    .info{
    visibility: hidden; width; 200px; background-color: #232; color: #ffffff
text-align: center; padding: 10px; border-radius: 6px; position: absolute; 
z-index: 1; botton: 125%: left: 50%; margin-left: -100px; opacity: 100; transition:opacity 0.3s}
    .icon hover + .info {visibility: visable; opacity: 1;}
    `

    icon.appendChild(img);
    wrapper.appendChild(icon);
    wrapper.appendChild(info);

    this.shadow.appendChild(style);
    this.shadow.appendChild(wrapper);
    
}
}
customElements.define("popup-info",PopupInfo )