const formulario = document.querySelector("#formulario");
const nome = document.querySelector("#nome");
const telefone = document.querySelector("#telefone");
const email = document.querySelector("#email");
const mensagem = document.querySelector("#mensagem");

const modal = document.querySelector("#modal");
const modalTitulo = document.querySelector("#modal-titulo");
const modalTexto = document.querySelector("#modal-texto");
const modalBotao = document.querySelector("#modal-botao");

nome.addEventListener("input", function () {
  nome.value = nome.value.replace(/[^a-zA-ZÀ-ú ]/g, "");
});

telefone.addEventListener("input", function () {
  let valor = telefone.value.replace(/\D/g, "");
  valor = valor.substring(0, 11);
  valor = valor.replace(/^(\d{2})(\d)/, "($1) $2");
  valor = valor.replace(/(\d{5})(\d)/, "$1-$2");
  telefone.value = valor;
});

email.addEventListener("input", function () {
  email.value = email.value.replace(/\s/g, "").toLowerCase();
});

function abrirModal(titulo, texto) {
  modalTitulo.innerHTML = titulo;
  modalTexto.innerHTML = texto;
  modal.showModal();
}

modalBotao.addEventListener("click", function () {
  modal.close();
});

formulario.addEventListener("submit", function (evento) {
  evento.preventDefault();

  if (
    nome.value == "" ||
    telefone.value == "" ||
    email.value == "" ||
    mensagem.value == ""
  ) {
    abrirModal(
      "Campos vazios",
      "Preencha nome, telefone, email e mensagem antes de enviar.",
    );
    return;
  }

  // envio pelo Web3Forms
  fetch("https://api.web3forms.com/submit", {
    method: "POST",
    body: new FormData(formulario),
  })
    .then(function (resposta) {
      return resposta.json();
    })
    .then(function (dados) {
      if (dados.success) {
        abrirModal(
          "Mensagem enviada!",
          "Obrigado, " + nome.value + ". Eu respondo assim que possível.",
        );
        formulario.reset();
      } else {
        abrirModal(
          "Erro ao enviar",
          "Não foi possível enviar a mensagem. Tente de novo mais tarde.",
        );
      }
    })
    .catch(function () {
      abrirModal(
        "Erro ao enviar",
        "Não foi possível enviar a mensagem. Tente de novo mais tarde.",
      );
    });
});
