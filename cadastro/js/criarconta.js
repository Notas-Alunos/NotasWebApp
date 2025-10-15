const nomeInput = document.getElementById('nome');
const emailInput = document.getElementById('email');
const cadastrarBotao = document.getElementById('createAccount');
const symbolSenha = document.getElementById("symbol");

const passwordInput = document.getElementById('password');
const confirmaInput = document.getElementById('confirmarSenha');

const items = {
    especial: document.getElementById('item-especial'),
    maiuscula: document.getElementById('item-maiuscula'),
    numero: document.getElementById('item-numero'),
    tamanho: document.getElementById('item-tamanho'),
    match: document.getElementById('item-match')
};


function itemSenhaOk(idDoElemento) {
    let elemento = document.getElementById(idDoElemento);
    let simboloCheck = '<i class="fa-solid fa-check" style="color: green;"></i>';
    elemento.innerHTML = simboloCheck;
}

function itemSenhaFalha(idDoElemento) {
    let elemento = document.getElementById(idDoElemento);
    let simboloCheck = '<i class="fa-solid fa-xmark" style="color: red;"></i>';
    elemento.innerHTML =  simboloCheck;
}

cadastrarBotao.addEventListener('click', function (event) {
    event.preventDefault();
    let estadoSenha = todosItensOk();
    
    const nome = nomeInput.value;
    const email = emailInput.value;
    const senha = passwordInput.value;
    const dados = {
        nome: nome,
        email: email,
        password: senha
    }

    if (estadoSenha && validateEmail(email) && nome.length > 0) {
        cadastrar(dados);
    }

}
);
function cadastrar(usuario) {
    const urlFinal = urlServidor + "/auth/register";

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
            console.log(usuario);
            return response.json();
        })
        .then(data => {
            console.log("Usuário cadastrado:", data);
            window.location.href = "../../index.html";
        })
        .catch(error => {
            console.error("Erro:", error);
            alert("Ocorreu um erro ao cadastrar.");
        });
}

function validarSenha() {
    const senhaText = passwordInput.value;
    const confirmarSenha = confirmaInput.value;
    let senhasCoincidem = senhaText == confirmarSenha;
    let temCaracterEspecial = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(senhaText);
    console.log("passou por aqui", temCaracterEspecial);
    if (senhasCoincidem) {
        itemSenhaOk("senhasIguais");
    } else {
        itemSenhaFalha("senhasIguais");
    }
    let temMaiuscula = /[A-ZÀ-Ý]/.test(senhaText);
    let temNumero = /\d/.test(senhaText);
    let tem8Caracters = senhaText.length >= 8;
    // atualizaCamposSenha(regras);
}

function atualizaCamposSenha(regras) {
    setState(items.especial, regras.especial);
    setState(items.maiuscula, regras.maiuscula);
    setState(items.numero, regras.numero);
    setState(items.tamanho, regras.tamanho);
    setState(items.confirmarSenhaIgualSenha, regras.confirmarSenhaIgualSenha);
}

function validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

function todosItensOk() {
    //TODO: validar se o nome do candango tem pelo menos 2 nomes

    const isEmailok = validateEmail(emailInput.value)
    const isPasswordOk = 
    console.log("email ok", isEmailok)
}

function setState(elemento, ok) {
    if (ok) {
        elemento.classList.remove('fail');
        // el.classList.add('ok');
        elemento.querySelector('.symbol').textContent = '✓';
    } else {
        // el.classList.remove('ok');
        elemento.classList.add('fail');
        elemento.querySelector('.symbol').textContent = '✗';
    }
}
