export function alterarVideoYoutube(especieEncontrada) {
    const iframe = document.querySelector('iframe')
    
    iframe.setAttribute('src', especieEncontrada.youtube)
}