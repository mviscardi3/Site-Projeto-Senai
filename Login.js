
const nicknameSalvo = localStorage.getItem("nickname");
const senhaSalva = localStorage.getItem("senha");

document.querySelector('form').addEventListener('submit', function (e) {
    const email = document.querySelector('input[type="email"]').value.trim();
    const senha = document.querySelector('input[type="password"]').value.trim();

    if (email === '' || senha === '') {
        alert('Por favor, preencha todos os campos!');
        e.preventDefault(); // Impede o envio do formulário
    }
});