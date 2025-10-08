const nomeInput = document.getElementById('nome');
const emailInput = document.getElementById('email');
const continuarBotao = document.getElementById('botao');

continuarBotao.addEventListener('click', function(event) {
    console.log("Clicou no botão");
  event.preventDefault();
  const nome = nomeInput.value;
  const email = emailInput.value;
  const senha = "Senha@123";
  const dados ={
    nome:nome,
    email:email,
    senha:senha
  }
    cadastrar(dados)
  } 
);

function cadastrar(usuario) {
    let urlFinal = urlServidor + "/usuarios" 
   const cabecalho = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        }
    }

    function cadastrar(usuario) {
        const urlFinal = urlServidor + "/usuarios";
      
        fetch(urlFinal, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(usuario)
        })
        .then(response => {
          if (!response.ok) {
            throw new Error("Erro ao cadastrar usuário");
          }
          return response.json();
        })
        .then(data => {
          console.log("Usuário cadastrado:", data);
          alert("Usuário cadastrado com sucesso!");
        })
        .catch(error => {
          console.error("Erro:", error);
          alert("Ocorreu um erro ao cadastrar.");
        });
}

function validateEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}
