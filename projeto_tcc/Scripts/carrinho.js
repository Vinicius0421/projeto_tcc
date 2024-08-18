function fnAJAX(url, fnctn){
// Pedido do AJAX para puxar dados do servidor
const request = new XMLHttpRequest()

request.onreadystatechange = function (){
    //teste pra ver se a conexão do ajax foi bem sucedida
    if(this.readyState == 4 && this.status == 200){
        fnctn(request)
    }
}

// Parâmetros de requisição e conexão do AJAX (true é para carregar de modo assíncrono)
request.open("GET", url, true);
request.send()
}

function replaceHeader(request){
    document.getElementById("header").innerHTML = request.responseText
}

let itensCarrinho = JSON.parse(sessionStorage.getItem('carrinho'))[0] || []

let detalhesCarrinho = Object.entries(itensCarrinho)
console.log(detalhesCarrinho)

    function mostrarProdutos() {
        detalhesCarrinho.forEach(element => {
        const produtoCarrinho = document.getElementById('carrinho');
        let div = document.createElement('div')
        let div2 = document.createElement('div')
        let img = document.createElement('img')
        let p = document.createElement('p')
        let h3 = document.createElement('h3')
        let produto = produtoCarrinho.appendChild(div);
        produto.classList.add('item')
        let detalhes = produto.appendChild(div2)
        detalhes.classList.add('img_nome_preco')
        let imagem = detalhes.appendChild(img)
        imagem.classList.add('img_item')
        let preco = detalhes.appendChild(p)
        preco.classList.add('preco_item')
        let nome = detalhes.appendChild(h3)
        nome.classList.add('nome_item')
        });
        
}

mostrarProdutos()