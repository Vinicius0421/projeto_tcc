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

//function replaceHeader(request){
  //  document.getElementById("header").innerHTML = request.responseText
//}

document.addEventListener('DOMContentLoaded', () =>{
    document.querySelectorAll('.menos').forEach(button => {
        button.addEventListener("click", removerProduto)
    })
    document.querySelectorAll('.mais').forEach(button =>{
        button.addEventListener("click", adicionarProduto)
    })
})

function adicionarProduto (){
    let quantidade = this.closest('.quant_item').innerText
    quantidade = quantidade + 1
    quantidade.textContent = quantidade
}

function removerProduto (){
    let produto = this.closest('.item')
    let quantidade = this.closest('.quant_item').innerText

    if(quantidade == 1){
        produto.remove()
    } else {
        quantidade -= 1
    }
}


let itensCarrinho = JSON.parse(sessionStorage.getItem('carrinho')) || []

function mostrarProdutos() {
    itensCarrinho.forEach(item => {
    const produtoCarrinho = document.getElementById('carrinho');
    let div = document.createElement('div')
    let div2 = document.createElement('div')
    let div3 = document.createElement('div')
    let img = document.createElement('img')
    let h3 = document.createElement('h3')
    let p = document.createElement('p')
    let produto = produtoCarrinho.appendChild(div);
    produto.classList.add('item')
    let detalhes = produto.appendChild(div2)
    detalhes.classList.add('img_nome_preco')
    let imagem = detalhes.appendChild(img)
    imagem.classList.add('img_item')
    let nome = detalhes.appendChild(h3)
    let preco = detalhes.appendChild(p)
    let containerBotoes = produto.appendChild(div3)
    containerBotoes.classList.add('add_delete')
    containerBotoes.innerHTML = `
            <button class="menos">-</button>
            <p class="quant_item">${item.quantity}</p>
            <button class="mais">+</button>
    `
    nome.classList.add('nome_item') 
    preco.classList.add('preco_item')
    imagem.src = item.imagemProduto
    preco.innerHTML = `${item.precoProduto}`
    nome.innerHTML = `${item.nomeProduto}` 
    })
}

mostrarProdutos()