let colores = [
    "#f1f1f1",
    "#ffd6a5",
    "#caffbf",
    "#bdb2ff",
    "#ffc6ff"
];

function cambiarColor() {
    const items = document.querySelectorAll("#lista-modulos li");

    items.forEach(item => {
        const colorAleatorio = colores[Math.floor(Math.random() * colores.length)];
        item.style.backgroundColor = colorAleatorio;
    });
}
