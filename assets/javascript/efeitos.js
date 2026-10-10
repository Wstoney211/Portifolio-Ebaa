// Efeito 1: texto digitando
const frases = [
  "Desenvolvedor FullStack",
  "Estudante de Informática",
  "Programador C# e .NET",
  "Criador de sites",
];
const alvo = document.querySelector("#digitando");
let frase = 0;
let letra = 0;
let apagando = false;

function digitar() {
  const texto = frases[frase];

  if (apagando == false) {
    letra++;
  } else {
    letra--;
  }
  alvo.innerHTML = texto.substring(0, letra);

  if (apagando == false && letra == texto.length) {
    apagando = true;
    setTimeout(digitar, 1500);
    return;
  }
  if (apagando == true && letra == 0) {
    apagando = false;
    frase++;
    if (frase >= frases.length) {
      frase = 0;
    }
  }

  if (apagando == true) {
    setTimeout(digitar, 50);
  } else {
    setTimeout(digitar, 100);
  }
}
digitar();

// Bibilioteca Animation On Scroll
AOS.init({
  duration: 800,
  once: true,
});
