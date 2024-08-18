let carrinho = []

document.addEventListener('DOMContentLoaded', () => {
    const botoescarrinho = document.querySelectorAll('.adicionar_carrinho').forEach(button => {
        button.addEventListener('click', function(event) {
            event.preventDefault();
            const produtoSelecionado = this.closest('.menu-item');
            const produto = {
            nomeProduto: produtoSelecionado.querySelector('.nome_produto').textContent,
            imagemProduto: produtoSelecionado.querySelector('.imagem_produto').src,
            precoProduto: produtoSelecionado.querySelector('.valor').textContent
            };
            console.log(produto)
            adicionarAoCarrinho(produto);
        });
    });
})     

function adicionarAoCarrinho(produto) {
    //Funcão para buscar os dados de cada produto disponível no menu
    const produtoExiste = carrinho.find(item => item.nome === produto.nome)
    if (produtoExiste){
        produtoExiste.quantity +=1
    } else {
        carrinho.push({ ...produto, quantity: 1})
    }

    atualizarCarrinho();
    salvarCarrinho();
}


function atualizarCarrinho() {
    const itensCarrinho = document.querySelector('#carrinho');
    const totalCarrinho = document.getElementById('total');

    if (itensCarrinho){
        itensCarrinho.innerHTML = '';
        let total = 0
    }
    carrinho.forEach(item => {
        const div = document.createElement('div');
        div.classList.add('img_nome_preco')
        div.innerHTML = `
        <img src="img/coxinha.png" alt="img_item" class="img_item">
        <h3 class="nome_item">Coxinha</h3>
        <p class="preco_item">4,50</p>
        `
    })
}


function salvarCarrinho(){
    sessionStorage.setItem('carrinho', JSON.stringify(carrinho));
}


function carregarCarrinho(){
    const carrinhoSalvo = sessionStorage.getItem('carrinho');
    if(carrinhoSalvo){
        carrinhoSalvo.JSON.parse(carrinhoSalvo);
    }
}

