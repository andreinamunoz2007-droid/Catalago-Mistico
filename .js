// 1. Guardamos el texto místico que se inyectará en el modal
const textoMístico = "Desde tiempos antiguos, las flores han sido las guardianas de nuestros sentimientos más profundos. Cuando las palabras no alcanzan, cada pétalo, color y aroma se convierte en un mensaje secreto. Bienvenidos a este rincón botánico, un espacio diseñado para explorar la Floriografía y descubrir el alma, el misticismo y la poesía oculta detrás de cada especie.";

// 2. Seleccionamos los elementos exactos de tu HTML y CSS
const modal = document.getElementById('flor-modal');
const btnCerrarModal = document.getElementById('btn-cerrar-modal');
const modalTexto = document.querySelector('#flor-modal p');

// 3. Función para abrir el modal agregando tu clase CSS ".mostrar"
function abrirModalMístico() {
    // Inyectamos el texto místico dentro del párrafo del modal
    modalTexto.textContent = textoMístico;
    
    // Añadimos la clase que activa la opacidad y los eventos del puntero
    modal.classList.add('mostrar');
}

// 4. Función para cerrar el modal quitando la clase ".mostrar"
function cerrarModal() {
    modal.classList.remove('mostrar');
}

// 5. Escuchadores de eventos (Event Listeners)

// Al hacer clic en el botón "Cerrar"
btnCerrarModal.addEventListener('click', cerrarModal);

// Al hacer clic fuera de la tarjeta blanca (en el fondo oscuro/overlay)
window.addEventListener('click', (e) => {
    if (e.target === modal) {
        cerrarModal();
    }
});

// 6. Lanzar el modal automáticamente al cargar la página
document.addEventListener('DOMContentLoaded', abrirModalMístico);