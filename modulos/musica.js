export function tocarMusica() {
    const estiloMusical = document.getElementById('estiloMusical')
    console.log(estiloMusical.value)
    const tocar = document.querySelector('#tocar')
    const parar = document.querySelector('#parar')
    let musicaTocando
    tocar.addEventListener('click', function() {
        const audios = document.querySelectorAll('.audio')
        audios.forEach(function(estilo) {
            let idDoEstilo = estilo.id
            if(estiloMusical.value === idDoEstilo) {
                const musicaASerTocada = document.getElementById(idDoEstilo)
                musicaASerTocada.play()
                musicaTocando = musicaASerTocada
            }
        })      
    })
    parar.addEventListener('click', function() {
        musicaTocando.pause()
        musicaTocando.currentTime = 0
    })  
}