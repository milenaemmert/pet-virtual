import { alterarEspecie } from "./alteracaoEspecie.js"

export function selecionarPet() {
    const petSelecionado = document.querySelector('input[name="pets"]:checked').value
   
    alterarEspecie(petSelecionado)
    const img = document.querySelector('.pet-imagem')
    img.setAttribute('src', `imagens/${petSelecionado}.png`)
}

