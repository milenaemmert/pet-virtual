export function selecionarHobbies(nome) {
    const checkboxes = document.querySelectorAll('.checkbox')
    const arrayHobbies = [] 
    checkboxes.forEach(hobby => {
        if(hobby.checked) {                
            arrayHobbies.push(hobby.value)       
        }
    })

    const hobbies = document.querySelector('#hobbies')
    hobbies.textContent = `${nome} gosta de ${arrayHobbies.join(', ')}.`

    if(arrayHobbies.length < 1) {
        hobbies.textContent = `${nome} não gosta de nada!`
    }
}