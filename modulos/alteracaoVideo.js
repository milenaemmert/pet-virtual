import { linkEspecies } from "../main.js"

export function alterarVideoYoutube(especieEncontrada) {
    const iframe = document.querySelector('iframe')
    
    iframe.setAttribute('src', especieEncontrada.youtube)
}

const radioButton = document.getElementsByName('pets')
radioButton.forEach(pet => {
    pet.onclick = function() {
        const nomePet = pet.value
        const petSelecionado = linkEspecies.find(obj => obj.pet === nomePet)
        alterarVideoYoutube(petSelecionado)
    }
})
