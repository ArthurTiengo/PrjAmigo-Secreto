let amigos = [];

const txtAmigo = document.querySelector(".sorteio-config");
const btnAdicionar = document.querySelector(".add");
const listaParticipantes = document.querySelector(".amigos-add");
const mensagemErro = document.querySelector(".mensagem-erro");

btnAdicionar.addEventListener("click", () => {
  if (ValidarAmigo()) {
    adicionar();
  }
});
txtAmigo.addEventListener("click", () => {
  txtAmigo.value = "";
});

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

function LimparMsgErro() {
  mensagemErro.textContent = "";
}

function MostrarErro(textoMensagem) {
    mensagemErro.textContent = `ERRO:${textoMensagem}`
}
