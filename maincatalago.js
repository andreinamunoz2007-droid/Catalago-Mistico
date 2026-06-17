// Base de datos local (Arreglo de Objetos)
const flores = [
    {
        id: 1,
        nombre: "Rosa Roja",
        cientifico: "Rosa gallica",
        imagen: "beautiful-red-rose-flowers-in-summer-time-nature-background-with-flowering-scarlet-roses-inspirational-natural-floral-spring-blooming-garden-or-park-backdrop-beauty-flower-vintage-retro-art-design-photo.jpg",
        significado: "Representa el amor profundo, la pasión ardiente, el respeto y la admiración mística entre dos almas conectadas."
    },
    {
        id: 2,
        nombre: "Girasol",
        cientifico: "Helianthus annuus",
        imagen: "images (19).jpeg",
        significado: "Símbolo de adoración, lealtad, longevidad y la búsqueda constante de la luz espiritual y la verdad."
    },
    {
        id: 3,
        nombre: "Lavanda",
        cientifico: "Lavandula angustifolia",
        imagen: "images (20).jpeg",
        significado: "Evoca la pureza del espíritu, la serenidad del alma, el silencio sanador y la calma devocional profunda."
    },
    {
        id: 4,
        nombre: "Lirio Blanco",
        cientifico: "Lilium candidum",
        imagen: "images (21).jpeg",
        significado: "Simboliza la inocencia restaurada, la majestad del ser, la pureza celestial y los nuevos comienzos trascendentales."
    }
];

const contenedor = document.getElementById('jardin-contenedor');
const modal = document.getElementById('flor-modal');
const modalTitulo = document.getElementById('modal-flor-titulo');
const modalSignificado = document.getElementById('modal-flor-significado');
const btnCerrar = document.getElementById('btn-cerrar-modal');

// Función para inyectar tarjetas dinámicamente en el DOM
function cargarFlores() {
    flores.forEach(flor => {
        const tarjeta = document.createElement('article');
        tarjeta.classList.add('flor-card');

        tarjeta.innerHTML = `
            <div class="flor-imagen-wrapper">
                <img src="${flor.imagen}" alt="${flor.nombre}" class="flor-img">
            </div>
            <div class="flor-info">
                <h3 class="flor-nombre">${flor.nombre}</h3>
                <p class="flor-cientifico">${flor.cientifico}</p>
                <button class="btn-descubrir" onclick="abrirSignificado(${flor.id})">Descubrir Secreto</button>
            </div>
        `;
        contenedor.appendChild(tarjeta);
    });
}

// Manejo de eventos del sistema (Clicks e interacción)
function abrirSignificado(id) {
    const florSeleccionada = flores.find(f => f.id === id);
    if (florSeleccionada) {
        modalTitulo.textContent = florSeleccionada.nombre;
        modalSignificado.textContent = florSeleccionada.significado;
        modal.classList.add('open');
    }
}

btnCerrar.addEventListener('click', () => {
    modal.classList.remove('open');
});

modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.classList.remove('open');
    }
});

// Inicializar el jardín al cargar la pantalla
document.addEventListener('DOMContentLoaded', cargarFlores);