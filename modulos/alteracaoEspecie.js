import { linkEspecies } from "../main.js"
import { alterarVideoYoutube } from "./alteracaoVideo.js"

export function alterarEspecie(petSelecionado) {
    const especie = document.querySelector('#especie')

    const especieEncontrada = linkEspecies.find(obj => obj.pet === petSelecionado)
    console.dir('especie encontrada' + especieEncontrada)
    especie.setAttribute('href', especieEncontrada.wiki)
    
    especie.innerText = especieEncontrada.texto

    alterarVideoYoutube(especieEncontrada)
}