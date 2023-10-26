let url = window.location.href;

const idd = url.substring(url.lastIndexOf('=') + 1);

//Quando rolar a página o navbar altera as classes
document.addEventListener('scroll', function() {
  const navbar = document.querySelector('.navbar');
  if (window.scrollY > 300) {
    navbar.classList.add('navbar-scrolled');
  } else {
    navbar.classList.remove('navbar-scrolled');
  }
});

function montarPagina(valor) {
  window.location.href = "detalhes.html?produto=" + valor;
}