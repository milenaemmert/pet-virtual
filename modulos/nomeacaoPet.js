export function nomearPet() {
    const inputNome = document.querySelector('#nome')
    const nome = inputNome.value.toUpperCase()
    document.querySelector('.pet-nome').textContent = nome

    return nome
}