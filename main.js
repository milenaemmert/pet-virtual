import { selecionarPet } from "./modulos/selecaoPet.js"
import { nomearPet } from "./modulos/nomeacaoPet.js"
import { tocarMusica } from "./modulos/musica.js"
import { selecionarHobbies } from "./modulos/selecaoHobbies.js"
import { esconderFormulario } from "./modulos/formularioDisplay.js"
import { alterarVideoYoutube } from "./modulos/alteracaoVideo.js"

export const linkEspecies = [
    {
        pet: 'coelho',
        wiki: 'https://pt.wikipedia.org/wiki/Coelho',
        texto: 'Oryctolagus',
        youtube: 'https://www.youtube.com/embed/4W_VxeSqpR8'
    },
    {
        pet: 'unicornio',
        wiki: 'https://pt.wikipedia.org/wiki/Unic%C3%B3rnio',
        texto: 'Unicornis',
        youtube: 'https://www.youtube.com/embed/paiYodNIWEA'
    },
    {
        pet: 'porco',
        wiki: 'https://pt.wikipedia.org/wiki/Porco',
        texto: 'Tayassuidae',
        youtube: 'https://www.youtube.com/embed/AvuG2oWhdKQ'
    },
    {
        pet: 'dino',
        wiki: 'https://pt.wikipedia.org/wiki/Tiranossauro',
        texto: 'Tyrannosaurus',
        youtube: 'https://www.youtube.com/embed/-GfNEDs3ERw'
    },
    {
        pet: 'alien',
        wiki: 'https://pt.wikipedia.org/wiki/Vida_extraterrestre',
        texto: 'Alien',
        youtube: 'https://www.youtube.com/embed/YfQuzUDPu98'
    },
    {
        pet: 'vaca',
        wiki: 'https://pt.wikipedia.org/wiki/Bos_taurus',
        texto: 'Bos taurus',
        youtube: 'https://www.youtube.com/embed/-Sk9vtegX8k'
    }
]

const formulario = document.querySelector('#formulario')

formulario.onsubmit = function (e) {
    e.preventDefault()
    selecionarPet()
    const nome = nomearPet() 
    tocarMusica()
    selecionarHobbies(nome)
    esconderFormulario()
}


const radioButton = document.getElementsByName('pets')

radioButton.forEach(pet => {
    pet.onclick = function() {
        const nomePet = pet.value
        const petSelecionado = linkEspecies.find(obj => obj.pet === nomePet)
        alterarVideoYoutube(petSelecionado)
    }
})














