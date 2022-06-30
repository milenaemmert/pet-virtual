const formulario = document.querySelector('#formulario')

formulario.onsubmit = function (e) {
    e.preventDefault()
    selecionarPet()
    const nome = nomearPet() 
    tocarMusica()
    selecionarHobbies(nome)
    esconderFormulario()
}

function selecionarPet() {
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

const linkEspecies = [
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

function alterarEspecie(petSelecionado) {
    const especie = document.querySelector('#especie')

    const especieEncontrada = linkEspecies.find(obj => obj.pet === petSelecionado)
    console.dir('especie encontrada' + especieEncontrada)
    especie.setAttribute('href', especieEncontrada.wiki)
    
    especie.innerText = especieEncontrada.texto

    alterarVideoYoutube(especieEncontrada)
}

function alterarVideoYoutube(especieEncontrada) {
    const iframe = document.querySelector('iframe')
    
    iframe.setAttribute('src', especieEncontrada.youtube)
}

function nomearPet() {
    const inputNome = document.querySelector('#nome')
    const nome = inputNome.value.toUpperCase()
    document.querySelector('.pet-nome').innerText = nome

    return nome
}

function selecionarHobbies(nome) {
    const checkboxes = document.querySelectorAll('.checkbox')
    const arrayHobbies = [] 
    checkboxes.forEach(function (hobby) {
        if(hobby.checked) {                
            arrayHobbies.push(hobby.value)       
        }
    })

    const hobbies = document.querySelector('#hobbies')
    hobbies.innerText = `${nome} gosta de ${arrayHobbies.join(', ')}.`

    if(arrayHobbies.length < 1) {
        hobbies.innerText = `${nome} não gosta de nada!`
    }
}

function tocarMusica() {
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

function esconderFormulario() {
    const petVirtual = document.getElementById('petVirtual')
    petVirtual.classList.remove('display-none')
    mostrarResultado()
}

function mostrarResultado() {
    const form = document.getElementById('formulario')
    form.classList.add('display-none')
}