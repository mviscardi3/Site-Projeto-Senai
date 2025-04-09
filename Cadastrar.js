document.getElementById("formCadastro").addEventListener("submit", function(e) {
  e.preventDefault();

  const nome = document.getElementById("nome").value.trim();
  const nick = document.getElementById("nick").value.trim();
  const email = document.getElementById("email").value.trim();
  const telefone = document.getElementById("telefone").value.replace(/\D/g, "");
  const senha = document.getElementById("senha").value.trim();
  const erro = document.getElementById("mensagemErro");

  if (!nome || !nick || !email || !telefone || !senha) {
    erro.textContent = "Todos os campos são obrigatórios!";
    return;
  }

  if (!email.includes("@") || !email.includes(".")) {
    erro.textContent = "E-mail inválido. Deve conter '@' e domínio.";
    return;
  }

  if (telefone.length < 11 || telefone.length > 13) {
    erro.textContent = "Número de telefone deve conter entre 11 e 13 dígitos.";
    return;
  }

  if (senha.length < 8) {
    erro.textContent = "A senha deve ter no mínimo 8 caracteres.";
    return;
  }

  localStorage.setItem("email", email);
  localStorage.setItem("senha", senha);

  erro.textContent = "";
  alert("Cadastro realizado com sucesso!");
});

document.getElementById("telefone").addEventListener("input", function(e) {
  let input = e.target.value.replace(/\D/g, "");

  if (input.length > 13) input = input.slice(0, 13);

  let ddd = input.substring(0, 3);
  let rest = input.substring(3);

  let formatted = "";
  if (input.length >= 3) {
    formatted = "(" + ddd + ") ";
    if (rest.length > 4) {
      formatted += rest.slice(0, rest.length - 4) + "-" + rest.slice(-4);
    } else {
      formatted += rest;
    }
  } else {
    formatted = input;
  }

  e.target.value = formatted;
});