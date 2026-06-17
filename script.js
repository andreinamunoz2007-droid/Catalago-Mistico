// Seleccionar todos los botones de filtro y todas las entradas
const buttons = document.querySelectorAll('.filter-btn');
const entries = document.querySelectorAll('.entry');

// Agregar evento a cada botón
buttons.forEach(btn => {
    btn.addEventListener('click', function() {
        // Quitar la clase 'active' de todos los botones
        buttons.forEach(b => b.classList.remove('active'));
        // Agregar 'active' al botón clickeado
        this.classList.add('active');

        // Obtener el filtro seleccionado
        const filter = this.dataset.filter;

        // Mostrar u ocultar entradas según el filtro
        entries.forEach(entry => {
            if (filter === 'all') {
                entry.classList.remove('hidden');
            } else {
                // Si la emoción de la entrada coincide con el filtro, se muestra
                if (entry.dataset.emotion === filter) {
                    entry.classList.remove('hidden');
                } else {
                    entry.classList.add('hidden');
                }
            }
        });
    });
});