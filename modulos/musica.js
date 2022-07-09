export function tocarMusica() {
    const estiloMusical = document.getElementById('estiloMusical')
    const tocar = document.querySelector('#tocar')
    
    let musicaTocando
    let musicaPausada = false
    tocar.addEventListener('click', function() {
        tocar.classList.add('display-none')
        const pausar = document.querySelector('#pausar')
        pausar.classList.remove('display-none')
        //imgTocar.setAttribute('src', '../imagens/pause.png')
        
        const audios = document.querySelectorAll('.audio')
        audios.forEach(function(estilo) {
            let idDoEstilo = estilo.id
            if(estiloMusical.value === idDoEstilo) {
                const musicaASerTocada = document.getElementById(idDoEstilo)
                musicaASerTocada.play()
                musicaTocando = musicaASerTocada
            }
        })
        
        pausar.addEventListener('click', () => {
            tocar.classList.remove('display-none')
            pausar.classList.add('display-none')
            musicaTocando.pause()
            !musicaPausada
        })

        //funcionou aqui, dentro desse clique, nao entendi bem o pq (voltar aqui depois!!!)
        musicaTocando.addEventListener('ended', function() {
            tocar.classList.remove('display-none')
            pausar.classList.add('display-none')
        })
    })

    const parar = document.querySelector('#parar')
    parar.addEventListener('click', function() {
        
        musicaTocando.pause()
        musicaTocando.currentTime = 0

        if(!musicaPausada) {
            tocar.classList.remove('display-none')
            pausar.classList.add('display-none')
        }
    })

    
}