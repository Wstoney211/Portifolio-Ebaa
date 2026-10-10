const botaoTema = document.querySelector("#botao-tema");
const icone = botaoTema.querySelector("i");

if (localStorage.getItem("tema") == "escuro") {
  document.body.classList.add("escuro");
  icone.className = "fa-solid fa-sun";
}

botaoTema.addEventListener("click", function () {
  document.body.classList.toggle("escuro");

  if (document.body.classList.contains("escuro")) {
    localStorage.setItem("tema", "escuro");
    icone.className = "fa-solid fa-sun";
  } else {
    localStorage.setItem("tema", "claro");
    icone.className = "fa-solid fa-moon";
  }
});
