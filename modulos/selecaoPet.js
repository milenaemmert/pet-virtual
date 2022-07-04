import { alterarEspecie } from "./alteracaoEspecie.js"

export function selecionarPet() {
    const pets = document.getElementsByName('pets')
    let petSelecionado
    for(let i = 0; i < pets.length; i++ ) {
        if(pets[i].checked) {
            petSelecionado = pets[i].value
            console.log(petSelecionado)

            alterarEspecie(petSelecionado)
        }          
    }

    const img = document.querySelector('.pet-imagem')
    img.setAttribute('src', `imagens/${petSelecionado}.png`)
}

