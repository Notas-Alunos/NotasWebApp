const form = document.getElementById("loginForm");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const email = document.getElementById("email").value.trim();
  const senha = document.getElementById("senha").value.trim();

  if (email === "" || senha === "") {
    alert("Por favor, preencha todos os campos!");
    return;
  }

  const usuario = {
    email: email,
    password: senha
  };

  login(usuario);
});

function login(usuario) {
  const urlServidor = "https://notas-api-qvzz.onrender.com";
  const urlFinal = urlServidor + "/auth/login";

  fetch(urlFinal, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(usuario)
  })
    .then(async (response) => {

      if (!response.ok) {
        const msg = await response.text();
        throw new Error(msg || "Erro ao fazer login");
      }
      return response.json();
    })
    .then((data) => {
      console.log("Login realizado:", data);

      localStorage.setItem("token", data.token);
      localStorage.setItem("refreshToken", data.refreshToken);

      window.location.href = "../../notas/listas.html";
    })
    .catch((error) => {
      console.error("Erro:", error);
      alert("E-mail ou senha incorretos!");
    });
}
