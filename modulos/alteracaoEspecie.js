import { linkEspecies } from "../main.js"

export function alterarEspecie(petSelecionado) {
    const especie = document.querySelector('#especie')

    const especieEncontrada = linkEspecies.find(obj => obj.pet === petSelecionado)
    especie.setAttribute('href', especieEncontrada.wiki)
    
    especie.textContent = especieEncontrada.texto
}