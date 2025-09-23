const url = "https://notas-api-qvzz.onrender.com";
const endpointItems = url + "/usuarios";

const area = document.getElementById("areaTitulos");
//area.innerHTML = "";


function criarItem() {
  const novoItem = document.getElementById("conteudo").innerText;
console.log(novoItem);

  const novoUsuario = {
    "descricao": novoItem,
    "dataLimite": "2025-09-23T00:25:34.663Z",
    "usuarioId": 1
  };

  fetch(
    endpointItems,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json" // indicando que está enviando JSON
      },
      body: JSON.stringify(novoUsuario)
     },
  )
    .then(response => {
      if (!response.ok) throw new Error("Erro ao excluir");
      renderizarTitulo();
    })
    .catch(error => console.error(error));
}

function excluirApiItem(id, descricao) {
  if (confirm(`Deseja excluir "${descricao}" da API?`)) {
    let urlFinal = endpointItems + "/" + id;

    fetch(urlFinal, { method: "DELETE" })
      .then(response => {
        if (!response.ok) throw new Error("Erro ao excluir");
        renderizarTitulo();
      })
      .catch(error => console.error(error));
  }
}


function renderizarTitulo() {
  //area.innerHTML = ""; 
 
  fetch(endpointItems)
    .then(response => {
      if (!response.ok) {
        throw new Error("Erro na requisição: " + response.status);
      }
      return response.json();
    })
    .then(data => {
      data.forEach(item => {
        const div = document.createElement("div");
        div.classList.add("bloco");

        const link = document.createElement("a");
        link.textContent = item.descricao;
        link.href = `bloco.html?titulo=${encodeURIComponent(item.descricao)}`;
        link.classList.add("titulo-link");

        const btnExcluir = document.createElement("button");
        btnExcluir.textContent = "Excluir";
        btnExcluir.classList.add("btn-excluir");
        btnExcluir.onclick = () => excluirApiItem(item.id, item.descricao);

        div.appendChild(link);
        div.appendChild(btnExcluir);
        area.appendChild(div);
      });
    })
    .catch(error => {
      //console.error("Erro:", error);
    });
}

renderizarTitulo();