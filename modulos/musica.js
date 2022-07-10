export function tocarMusica() {
    const estiloMusical = document.getElementById('estiloMusical')
    const tocar = document.querySelector('#tocar')
    
    let musicaTocando
    let musicaPausada = false
    tocar.addEventListener('click', () => {
        tocar.classList.add('display-none')
        const pausar = document.querySelector('#pausar')
        pausar.classList.remove('display-none')
        
        const audios = document.querySelectorAll('.audio')
        audios.forEach(estilo => {
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
        musicaTocando.addEventListener('ended', () => {
            tocar.classList.remove('display-none')
            pausar.classList.add('display-none')
        })
    })

    const parar = document.querySelector('#parar')
    parar.addEventListener('click', () => {
        
        musicaTocando.pause()
        musicaTocando.currentTime = 0

        if(!musicaPausada) {
            tocar.classList.remove('display-none')
            pausar.classList.add('display-none')
        }
    })  
}