export function esconderFormulario() {
    const form = document.getElementById('formulario')
    form.classList.add('display-none')
    mostrarResultado()
}

export function mostrarResultado() {
    const petVirtual = document.getElementById('petVirtual')
    petVirtual.classList.remove('display-none')
}