export function esconderFormulario() {
    const petVirtual = document.getElementById('petVirtual')
    petVirtual.classList.remove('display-none')
    mostrarResultado()
}

export function mostrarResultado() {
    const form = document.getElementById('formulario')
    form.classList.add('display-none')
}