
// Array de objetos con los audios
const audios = [
    { nombre: "SKINNY", imagen: "sounds/skinny.mp3", orden: 1 },
    { nombre: "LUNCH", imagen: "sounds/lunch.mp3", orden: 2 },
    { nombre: "CHIHIRO", imagen: "sounds/chihiro.mp3", orden: 3 },
    { nombre: "BIRDS OF A FEATHER", imagen: "sounds/birds-of-a-feather.mp3", orden: 4 },
    { nombre: "WILDFLOWER", imagen: "sounds/wildflower.mp3", orden: 5 },
    { nombre: "THE GREATEST", imagen: "sounds/the-greatest.mp3", orden: 6 },
    { nombre: "L'AMOUR DE MA VIE", imagen: "sounds/lamour-de-ma-vie.mp3", orden: 7 },
    { nombre: "THE DINNER", imagen: "sounds/the-dinner.mp3", orden: 8 },
    { nombre: "BITTERSUITE", imagen: "sounds/bittersuite.mp3", orden: 9 },
    { nombre: "BLUE", imagen: "sounds/blue.mp3", orden: 10 },
];

//ELEMENTOS DEL DOM
const btnFlechaAnterior = document.querySelector("#btn-cancion-anterior");
const btnFlechaSiguiente = document.querySelector("#btn-cancion-siguiente");
const btnPlay = document.querySelector("#btn-play");
const btnPausa = document.querySelector("#btn-pause");
const nombreCancion = document.querySelector("#nombre-cancion");
const audio = document.querySelector("#audio-cancion");

// EVENTOS BOTONES
btnFlechaAnterior.addEventListener("click", (e) => {
    e.preventDefault();
    cambiarCancionAnterior();
});
btnFlechaSiguiente.addEventListener("click", (e) => {
    e.preventDefault();
    cambiarCancionSiguiente();
});
btnPlay.addEventListener("click", (e) => {
    e.preventDefault();
    ponerPlay();

});
btnPausa.addEventListener("click", (e) => {
    e.preventDefault();
    ponerPausa();
});

//FUNCIONES
let indiceActual = 0; // Índice de la canción que se está reproduciendo

// Cambiar a la canción anterior
function cambiarCancionAnterior() {
    indiceActual = (indiceActual - 1 + audios.length) % audios.length; // Ciclo circular
    actualizarCancion();
}

// Cambiar a la canción siguiente
function cambiarCancionSiguiente() {
    indiceActual = (indiceActual + 1) % audios.length; // Ciclo circular
    actualizarCancion();
}

// Reproducir la canción actual
function ponerPlay() {
    audio.play();

    btnPlay.classList.add("oculto");
    btnPausa.classList.remove("oculto");
}

// Pausar la reproducción
function ponerPausa() {
    audio.pause();

    btnPausa.classList.add("oculto");
    btnPlay.classList.remove("oculto");

}

// Actualizar la canción en el reproductor
function actualizarCancion() {
    const cancion = audios[indiceActual];
    audio.src = cancion.imagen; // Cambiar la fuente del audio
    nombreCancion.textContent = cancion.nombre; // Actualizar el nombre mostrado
    btnPlay.classList.remove("oculto");
    btnPausa.classList.add("oculto");
}

// Inicializar con la primera canción
actualizarCancion();