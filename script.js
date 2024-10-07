// Seleciona o ícone do menu (hamburguer) e a lista de itens do menu
const hamburguerIcon = document.getElementById("hamburguer"); // Seleciona o ícone de menu
const menuLista = document.getElementById("listaMenu"); // Seleciona a lista do menu

// Adiciona um evento de clique ao ícone de hambúrguer
hamburguerIcon.addEventListener("click", clickMenu); // Chama a função clickMenu quando o ícone é clicado

// Função que alterna a visibilidade do menu ao clicar no ícone
function clickMenu() {
  menuLista.classList.toggle("show"); // Adiciona ou remove a classe 'show' na lista do menu
}

// Adiciona um evento de clique na janela para fechar o menu se clicar fora dele
window.addEventListener("click", function (event) {
  // Verifica se o clique não foi no ícone do hambúrguer ou na lista do menu
  if (
    !hamburguerIcon.contains(event.target) && // Verifica se o clique não foi no ícone
    !menuLista.contains(event.target) // Verifica se o clique não foi na lista do menu
  ) {
    menuLista.classList.remove("show"); // Remove a classe 'show' se clicar fora do menu
  }
});
