let amigos = [];

const txtAmigo = document.querySelector('.sorteio-config');
const btnAdicionar = document.querySelector('.add');
const listaParticipantes = document.querySelector('.amigos-add');
const mensagemErro = document.querySelector('.mensagem-erro')

btnAdicionar.addEventListener('click', () => {

    if (txtAmigo.value.length === 0) {
        mensagemErro.textContent = "Imbecil Coloca o nome de alguém"
    } else {
        mensagemErro.textContent = ''
        if (listaParticipantes.innerHTML === "") {
            listaParticipantes.textContent = txtAmigo.value;
        } else {
            listaParticipantes.textContent += " , " + txtAmigo.value;
        }
        amigos.push(txtAmigo.value);
        txtAmigo.value = '';
    }
})