// Seleciona o ícone de pesquisa e o campo de entrada
const searchIcon = document.getElementById("search-icon");
const searchInput = document.getElementById("search-input");

// Adiciona um ouvinte de evento de clique ao ícone de pesquisa
searchIcon.addEventListener("click", function() {
  // Verifica se o campo de entrada está oculto
  if (searchInput.style.display === "none" || searchInput.style.display === "") {
    // Exibe o campo de entrada
    searchInput.style.display = "inline-block";
    // Define o foco no campo de entrada
    searchInput.focus();
  } else {
    // Oculta o campo de entrada
    searchInput.style.display = "none";
  }
});
