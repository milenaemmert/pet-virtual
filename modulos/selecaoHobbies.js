export function selecionarHobbies(nome) {
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