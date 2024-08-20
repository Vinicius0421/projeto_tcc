let carrinho = []

document.addEventListener('DOMContentLoaded', () => {
    // Adiciona Event Listeners e pega as informções dos produtos que serão adicionados ao carrinho
    const botoescarrinho = document.querySelectorAll('.adicionar_carrinho').forEach(button => {
        button.addEventListener('click', function(event) {
            ;
            const produtoSelecionado = this.closest('.menu-item');
            const produto = {
            nomeProduto: produtoSelecionado.querySelector('.nome_produto').textContent,
            imagemProduto: produtoSelecionado.querySelector('.imagem_produto').src,
            precoProduto: produtoSelecionado.querySelector('.valor').textContent
            };
            adicionarAoCarrinho(produto);
        });
    });
})     

function adicionarAoCarrinho(produto) {
    // Verifica se o produto existe no carrinho antes de adicionar e adiciona
    const produtoExiste = carrinho.find(item => item.nomeProduto == produto.nomeProduto)
    if (produtoExiste){
        produtoExiste.quantity +=1
    } else {
        carrinho.push({ ...produto, quantity: 1})
    }
    salvarCarrinho();
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

function fnAJAX(){
    // Pedido do AJAX para puxar dados do servidor
    const request = new XMLHttpRequest()
    
    request.onload = function (){
        //teste pra ver se a conexão do ajax foi bem sucedida
        if(this.readyState == 4 && this.status == 200){
            const obj = this.responseText
           // document.getElementById("header").innerHTML =
           console.log(obj)
    }
}
    // Parâmetros de requisição e conexão do AJAX (true é para carregar de modo assíncrono)
    request.open("GET", "/projeto_tcc/scripts/index.php");
    request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded")
    request.send()
}
fnAJAX()