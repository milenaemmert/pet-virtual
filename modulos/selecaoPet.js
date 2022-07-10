import { alterarEspecie } from "./alteracaoEspecie.js"

export function selecionarPet() {
    const petSelecionado = document.querySelector('input[name="pets"]:checked').value

    /* 
    //usando o find:
    const pets = document.getElementsByName('pets')
    const petSelecionado = Object.values(pets)
        .find(pet => pet.checked).value   
    */
   
    alterarEspecie(petSelecionado)
    const img = document.querySelector('.pet-imagem')
    img.setAttribute('src', `imagens/${petSelecionado}.png`)
}

