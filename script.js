function pesquisar() {
  const campo = document.getElementById("campo-pesquisa");
  const resultado = document.getElementById("resultado-pesquisa");
  const termo = campo.value.trim();

  resultado.classList.remove("oculto");
  resultado.textContent = termo
    ? `Resultados para: ${termo}`
    : "Digite algo para pesquisar.";
}

function login() {
  const email = document.getElementById("email").value.trim();
  const senha = document.getElementById("senha").value;
  const msg = document.getElementById("mensagem-login");

  if (email === "teste@exemplo.com" && senha === "123456") {
    msg.textContent = "Login realizado com sucesso!";
  } else {
    msg.textContent = "E-mail ou senha inválidos.";
  }
}

function limparLogin() {
  document.getElementById("email").value = "";
  document.getElementById("senha").value = "";
  document.getElementById("mensagem-login").textContent = "";
}

function cadastrarUsuario() {
  const nome = document.getElementById("nome").value.trim();
  const genero = document.getElementById("genero").value;
  const aceite = document.getElementById("aceite").checked;
  const msg = document.getElementById("mensagem-cadastro");

  if (nome && genero && aceite) {
    msg.textContent = "Cadastro realizado com sucesso!";
  } else {
    msg.textContent = "Preencha os campos e aceite os termos.";
  }
}
