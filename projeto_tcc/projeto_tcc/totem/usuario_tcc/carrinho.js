const botoescarrinho = document.getElementsByClassName('adicionar_carrinho');

for (let i = 0; i < botoescarrinho.length; i++) {
    botoescarrinho[i] = addEventListener("click", adicionarAoCarrinho)
}

function adicionarAoCarrinho(event) {
    const infoProdutos = event.target.parentElement;
    const imagemProduto = infoProdutos.getElementsByClassName('imagem_produto')[0].src;
    const precoProduto = infoProdutos.getElementsByClassName('valor')[0].innerText.replace("R$", "").replace(",", ".")
    const nomeProduto = infoProdutos.getElementsByClassName('nome_produto')[0].innerText
}