import { ProfileCard } from './ProfileCard.js'

const meuCard = document.querySelector('profile-card')

meuCard.addEventListener('seguir-clicado', (event) => {
    const dados = event.detail;
    console.log(`[API]Registrando que voce seguiu o usuário: ${dados. usuario}`);
    alert(`Voce comecou a seguir${dados.usuario}!`)
});