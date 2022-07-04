export function nomearPet() {
    const inputNome = document.querySelector('#nome')
    const nome = inputNome.value.toUpperCase()
    document.querySelector('.pet-nome').innerText = nome

    return nome
}