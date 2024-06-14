const txtAmigo = document.querySelector('.sorteio-config');
const btnAdicionar = document.querySelector('.add');
const listaParticipantes = document.querySelector('amigos-add');

btnAdicionar.addEventListener('click', () => {
    listaParticipantes.textContent += txtAmigo.value + ", ";
    txtAmigo.value = '';
})