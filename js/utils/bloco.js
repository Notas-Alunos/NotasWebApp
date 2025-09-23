const params = new URLSearchParams(window.location.search);
const titulo = params.get('titulo');
const tituloElem = document.getElementById('tituloLista');
if (titulo) tituloElem.textContent = `📒 ${titulo}`;

const textAreaElements = document.getElementById('conteudo');

function salvar() {
  localStorage.setItem(`bloco_${titulo}`, textAreaElements.innerHTML);
  alert("Anotação salva!");
  window.location.href = "/telaNotas/listas.html"
  
}

function editar() {
  if (textAreaElements.getAttribute('contenteditable') === 'false') {
    textAreaElements.setAttribute('contenteditable', 'true')
  }
  else {
    textAreaElements.setAttribute('contenteditable', 'false')
  }
}

function carregar() {
  const texto = localStorage.getItem(`bloco_${titulo}`);
  if (texto) textAreaElements.innerHTML = texto;
  
}