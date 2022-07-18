export function selecionarHobbies(nome) {
    const checkboxes = document.querySelectorAll('.checkbox')
    const hobbiesSelecionados = Object.values(checkboxes)
        .filter(hobby => hobby.checked)
        .map(hobby => hobby.value)
    
    const hobbies = document.querySelector('#hobbies')
    hobbies.textContent = `${nome} gosta de ${hobbiesSelecionados.join(', ')}.`

    if(hobbiesSelecionados.length < 1) {
        hobbies.textContent = `${nome} não gosta de nada!`
    }
}