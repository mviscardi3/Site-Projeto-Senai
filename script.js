// Adiciona produto ao Local Storage
function adicionarAoCarrinho(nome, preco, imagem) {
    let carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];

    carrinho.push({ nome, preco, imagem });

    localStorage.setItem('carrinho', JSON.stringify(carrinho));

    // Atualiza contador do carrinho
    document.getElementById('cart-count').innerText = carrinho.length;
}

// Exibe os produtos na página do Carrinho
function mostrarCarrinho() {
    let carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
    const container = document.getElementById('carrinho-itens');
    const limparBtn = document.getElementById('limpar-btn');

    if (!container) return;

    // Se o carrinho estiver vazio, exibir mensagem e esconder botão
    if (carrinho.length === 0) {
        container.innerHTML = "<p style='text-align: center; font-size: 20px;'>Seu carrinho está vazio 😢</p>";
        limparBtn.style.display = "none"; // Esconde o botão
        return;
    }

    // Exibe o botão se houver itens no carrinho
    limparBtn.style.display = "block";

    container.innerHTML = ""; // Limpa o container antes de adicionar os itens

    carrinho.forEach((produto, index) => {
        const item = document.createElement('div');
        item.className = 'item-carrinho';
        item.innerHTML = `
            <img src="${produto.imagem}" width="100" alt="${produto.nome}">
            <h3>${produto.nome}</h3>
            <p>${produto.preco}</p>
            <button onclick="removerDoCarrinho(${index})" style="background: red; color: white; border: none; padding: 5px 10px; cursor: pointer;">
                Remover
            </button>
            <hr>
        `;
        container.appendChild(item);
    });
}

// Atualiza contador do carrinho em todas as páginas
function atualizarContadorCarrinho() {
    const carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
    const contador = document.getElementById('cart-count');
    if (contador) contador.innerText = carrinho.length;
}

// Executa em todas as páginas ao carregar
window.onload = () => {
    atualizarContadorCarrinho();
    mostrarCarrinho();
};

function removerDoCarrinho(index) {
    let carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];

    carrinho.splice(index, 1); // Remove o item pelo índice

    localStorage.setItem('carrinho', JSON.stringify(carrinho)); // Atualiza o Local Storage

    location.reload(); // Recarrega a página para atualizar a lista
}

function limparCarrinho() {
    localStorage.removeItem('carrinho'); // Apaga tudo do Local Storage
    location.reload(); // Recarrega a página
}
