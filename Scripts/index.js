window.addEventListener('DOMContentLoaded', function(event){
let carrinho = []

    // Adiciona Event Listeners e pega as informções dos produtos que serão adicionados ao carrinho
    const botoescarrinho = document.querySelectorAll('.adicionar_carrinho').forEach(button=> {
    button.addEventListener('click', puxarDados) 
    });

function puxarDados(event){
    const produtoSelecionado = this.closest('.menu-item');
    const produto = {
    nomeProduto: produtoSelecionado.querySelector('.nome_produto').textContent,
    imagemProduto: produtoSelecionado.querySelector('.imagem_produto').src,
    precoProduto: produtoSelecionado.querySelector('.valor').textContent
    };
    adicionarAoCarrinho(produto);
    console.log(produto)
}

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


// Salva o carrinho
function salvarCarrinho(){
    sessionStorage.setItem('carrinho', JSON.stringify(carrinho));
}

// Carrega o carrinho
function carregarCarrinho(){
    const carrinhoSalvo = sessionStorage.getItem('carrinho');
    if(carrinhoSalvo){
        carrinhoSalvo.JSON.parse(carrinhoSalvo);
    }
}
//Mostra os produtos puxados do banco de dados
function mostrarProdutos(produtosExistentes){
    let produtos = JSON.parse(produtosExistentes)
    console.log(produtos)
    produtos.forEach(item => {
        let div = document.createElement("div");
        let a = document.getElementsByClassName("menu-container")[0]
        let menu = a.getElementsByClassName('menu')[0]
        let produto = menu.appendChild(div)
        let img = document.createElement('img')
        let p = document.createElement('p')
        let p2 = document.createElement('p')
        let btn = document.createElement('button')
        let imgProduto = produto.appendChild(img)
        let nomeProduto = produto.appendChild(p)
        let precoProduto = produto.appendChild(p2)
        let btnAdicionarAoCarrinho = produto.appendChild(btn)
        btnAdicionarAoCarrinho.addEventListener("click", puxarDados)
        produto.classList.add('menu-item')
        precoProduto.classList.add("valor")
        imgProduto.classList.add('imagem_produto')
        nomeProduto.classList.add('nome_produto')
        btnAdicionarAoCarrinho.classList.add('adicionar_carrinho')
        nomeProduto.innerText = item.nome_produto
        precoProduto.innerText = "R$ " + item.preco_unitario.replace(".", ",")
        imgProduto.src = `${item.imagem}`
        btnAdicionarAoCarrinho.innerText = "Adicionar ao carrinho"
    });  
}

function fnAJAX(){
    // Pedido do AJAX para puxar dados do servidor
    const request = new XMLHttpRequest()
    
    request.onload = function (){
        //teste pra ver se a conexão do ajax foi bem sucedida
        if(this.readyState == 4 && this.status == 200){
            produtosExistentes = this.responseText;
            mostrarProdutos(produtosExistentes);
    }
}
    // Parâmetros de requisição e conexão do AJAX (true é para carregar de modo assíncrono)
    request.open("POST", "/projeto_tcc/Scripts/index.php", true);
    request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded")
    request.send()
}
fnAJAX()
}) 