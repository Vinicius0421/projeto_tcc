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

const botoescarrinho = document.getElementsByClassName('adicionar_carrinho');

for (let i = 0; i < botoescarrinho.length; i++) {
    // Event listener para os botôes de adicionar ao carrinho
    botoescarrinho[i] = addEventListener("click", adicionarAoCarrinho)
}

function adicionarAoCarrinho(event) {
    //Funcão para buscar os dados de cada produto disponível no menu
    const infoProdutos = event.target.parentElement;
    const imagemProduto = infoProdutos.getElementsByClassName('imagem_produto')[0].src
    const precoProduto = infoProdutos.getElementsByClassName('valor')[0].innerText.replace("R$", "").replace(",", ".")
    const nomeProduto = infoProdutos.getElementsByClassName('nome_produto')[0].innerText

    console.log(imagemProduto)
    console.log(precoProduto)
    console.log(nomeProduto)
}