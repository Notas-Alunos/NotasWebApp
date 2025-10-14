const url = "https://notas-api-qvzz.onrender.com";
const endpointItems = url + "/usuarios";

const area = document.getElementById("areaTitulos");

const token = localStorage.getItem("token");

if (!token) {
  alert("Você precisa estar logado para acessar esta página.");
  window.location.href = "../../login.html";
}

function criarItem() {
  const novoItem = document.getElementById("conteudo").value.trim();

  if (!novoItem) {
    alert("Digite algo antes de adicionar!");
    return;
  }

  const novoUsuario = {
    descricao: novoItem,
    nome: novoItem,
    dataLimite: "2025-09-23T00:25:34.663Z",
    usuarioId: 1 
  };

  fetch(endpointItems, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": "Bearer " + token 
    },
    body: JSON.stringify(novoUsuario)
  })
    .then(response => {
      if (!response.ok) throw new Error("Erro ao salvar");
      return response.json();
    })
    .then(() => renderizarTitulo())
    .catch(error => console.error(error));
}

function excluirApiItem(id, descricao) {
  if (confirm(`Deseja excluir "${descricao}" da API?`)) {
    const urlFinal = endpointItems + "/" + id;

    fetch(urlFinal, {
      method: "DELETE",
      headers: {
        "Authorization": "Bearer " + token // ✅ Enviando token
      }
    })
      .then(response => {
        if (!response.ok) throw new Error("Erro ao excluir");
        renderizarTitulo();
      })
      .catch(error => console.error(error));
  }
}

function renderizarTitulo() {
  area.innerHTML = "";

  fetch(endpointItems, {
    headers: {
      "Authorization": "Bearer " + token 
    }
  })
    .then(response => {
      if (!response.ok) throw new Error("Erro na requisição: " + response.status);
      return response.json();
    })
    .then(data => {
      area.innerHTML = ""; 
      data.forEach(item => {
        const div = document.createElement("div");
        div.classList.add("bloco");

        const link = document.createElement("a");
        link.textContent = item.nome || item.descricao;
        link.href = `bloco.html?titulo=${encodeURIComponent(item.nome || item.descricao)}`;
        link.classList.add("titulo-link");

        const btnExcluir = document.createElement("button");
        btnExcluir.textContent = "Excluir";
        btnExcluir.classList.add("btn-excluir");
        btnExcluir.onclick = () => excluirApiItem(item.id, item.nome || item.descricao);

        div.appendChild(link);
        div.appendChild(btnExcluir);
        area.appendChild(div);
      });
    })
    .catch(error => console.error("Erro:", error));
}

renderizarTitulo();
