
// Array de objetos con los audios
const audios = [
    { nombre: "SKINNY", imagen: "sounds/skinny.mp3" },
    { nombre: "LUNCH", imagen: "sounds/lunch.mp3"},
    { nombre: "CHIHIRO", imagen: "sounds/chihiro.mp3"},
    { nombre: "BIRDS OF A FEATHER", imagen: "sounds/birds-of-a-feather.mp3"},
    { nombre: "WILDFLOWER", imagen: "sounds/wildflower.mp3" },
    { nombre: "THE GREATEST", imagen: "sounds/the-greatest.mp3"},
    { nombre: "L'AMOUR DE MA VIE", imagen: "sounds/lamour-de-ma-vie.mp3"},
    { nombre: "THE DINNER", imagen: "sounds/the-dinner.mp3"},
    { nombre: "BITTERSUITE", imagen: "sounds/bittersuite.mp3"},
    { nombre: "BLUE", imagen: "sounds/blue.mp3"},
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
    btnPausa.classList.remove("oculto");}

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
    nombreCancion.textContent = cancion.nombre; // Actualizar el nombre de la cancion en la interfaz
    btnPlay.classList.remove("oculto");
    btnPausa.classList.add("oculto");
}

// Inicializar con la primera canción
actualizarCancion();