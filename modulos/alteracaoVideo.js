import { linkEspecies } from "../main.js"

(function () {
    const primeiroPet = document.querySelector('input[name="pets"]')
    primeiroPet.setAttribute('checked', true)
})()

export function alterarVideoYoutube(petSelecionado) {
    const iframe = document.querySelector('iframe')
    iframe.setAttribute('src', petSelecionado.youtube)
}

function capturarPetRadio() {
    const petChecked = document.querySelector('input[name="pets"]:checked').value
    const petSelecionado = linkEspecies.find(obj => obj.pet === petChecked)
    alterarVideoYoutube(petSelecionado)
}

window.onload = () => {
    capturarPetRadio()
}

const petChecked = document.querySelectorAll('input[name="pets"]')
petChecked.forEach(pet => {
    pet.addEventListener('click', (e) => {
        capturarPetRadio()
    })
}) 