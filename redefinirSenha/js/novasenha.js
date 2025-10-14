document.addEventListener('DOMContentLoaded', () => {
  const novaSenhaForm = document.getElementById('novaSenhaForm');

  if (!novaSenhaForm) return;

  novaSenhaForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const emailInput = document.getElementById('email');
    const novaSenhaInput = document.getElementById('novaSenha');
    const confirmarInput = document.getElementById('confirmarSenha');

    if (!emailInput || !novaSenhaInput || !confirmarInput) return;

    const email = emailInput.value.trim();
    const novaSenha = novaSenhaInput.value.trim();
    const confirmar = confirmarInput.value.trim();

    if (email === "" || novaSenha === "" || confirmar === "") {
      alert("Por favor, preencha todos os campos!");
      return;
    }

    if (novaSenha !== confirmar) {
      alert("As senhas não coincidem!");
      return;
    }

    localStorage.setItem("usuarioEmail", email);
    localStorage.setItem("usuarioSenha", novaSenha);

    alert("Senha redefinida com sucesso!");
    window.location.href = "../index.html";
  });
});

