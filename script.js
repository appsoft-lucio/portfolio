// Função para alternar a classe do menu
function clickMenu() {
  // Seleciona a lista de menu pelo seu ID
  const menu = document.getElementById("listaMenu");

  // Verifica se a lista de menu já tem a classe "menu-ativo"
  if (menu.classList.contains("menu-ativo")) {
    // Se sim, remove a classe para ocultar o menu
    menu.classList.remove("menu-ativo");
  } else {
    // Caso contrário, adiciona a classe para mostrar o menu
    menu.classList.add("menu-ativo");
  }
}
