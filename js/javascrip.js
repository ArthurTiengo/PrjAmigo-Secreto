let amigos = [];

const txtAmigo = document.querySelector(".sorteio-config");
const btnAdicionar = document.querySelector(".add");
const btnSortear = document.querySelector(".sorteio")
const btnReiniciar = document.querySelector(".reiniciar")
const listaParticipantes = document.querySelector(".amigos-add");
const mensagemErro = document.querySelector(".mensagem-erro");
const sorteio = document.querySelector(".results")

btnAdicionar.addEventListener("click", () => {
  if (ValidarAmigo()) {
    adicionar();
  }
});
txtAmigo.addEventListener("click", () => {
  txtAmigo.value = "";
});

btnReiniciar.addEventListener('click', () => {
  amigos = [];
  listaParticipantes.textContent = '';
  mensagemErro.textContent = '';
  txtAmigo.value = '';

});

btnSortear.addEventListener('click', () => {
  sortear()
})

function adicionar() {
  if (amigos.includes(txtAmigo.value)) {
    MostrarErro(`${txtAmigo.value} Ja Esta na lista adicione outro nome`);
    return;
  }
  LimparMsgErro();
  amigos.push(txtAmigo.value);
  listaParticipantes.textContent = amigos.join(", ");
  txtAmigo.value = "";
}

function ValidarAmigo() {
  if (txtAmigo.value.length <= 3) {
    MostrarErro('Insira um nome Valido')
    return false;
  }
  return true;
}

function reiniciar() {
  txtAmigo.value = '';
  amigos = []
  listaParticipantes.innerHTML = ''
  sorteio.innerHTML = "";
}

function LimparMsgErro() {
  mensagemErro.textContent = "";
}

function MostrarErro(textoMensagem) {
  mensagemErro.textContent = `ERRO:${textoMensagem}`
}



function embaralhar(lista) {
  for (let indice = lista.length; indice; indice--) {
    const indiceAleatorio = Math.floor(Math.random() * indice);
    [lista[indice - 1], lista[indiceAleatorio]] = [lista[indiceAleatorio], lista[indice - 1]];
  }
}

function sortear() {
  if (amigos.length < 4) {
    alert('Adicione ao menos 4 amigos!');
    return;
  }
  embaralhar(amigos);
  sorteio.innerHTML = "";
  for (let i = 0; i < amigos.length; i++) {
    if (i == amigos.length - 1) {
      sorteio.innerHTML = sorteio.innerHTML + '<li>' + amigos[i] + '➜' + amigos[0] + '</li>'
    } else {
      sorteio.innerHTML = sorteio.innerHTML + '<li>' + amigos[i] + '➜' + amigos[i + 1] + '</li>'
    }
  }

}


