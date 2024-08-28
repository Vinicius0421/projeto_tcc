document.addEventListener('DOMContentLoaded', () =>{
    document.querySelectorAll('.menos').forEach(button => {
        button.addEventListener("click", removerProduto)
    })
    document.querySelectorAll('.mais').forEach(button =>{
        button.addEventListener("click", adicionarProduto)
    })
})
function calcularTotal(){
    var total = 0
     const itensCarrinho = document.querySelectorAll('.item').forEach(item => {
        let detalheItens = item.querySelector('.img_nome_preco')
        let quantidadeItens = item.querySelector('.add_delete')
        let quantidadeUnitaria = quantidadeItens.getElementsByClassName('quant_item')[0].innerText
        let precoUnitario = parseFloat(detalheItens.getElementsByClassName('preco_item')[0].innerText.replace("R$", "").replace(",", "."));
        let subtotal = parseFloat(precoUnitario * quantidadeUnitaria)
        total += subtotal
    })
    console.log(total);
    let precoFinal = document.getElementById('total')
    precoFinal.innerText ="Total: R$ " + total;
}
function adicionarProduto (){
    let produto = this.closest('.item')
    let quantidade = produto.getElementsByClassName('quant_item')[0]
    let x = parseFloat(quantidade.innerText)
    x += 1
    quantidade.innerHTML = `${x}`
    calcularTotal()
}
function removerProduto (){
    let produto = this.closest('.item')
    let quantidade = produto.getElementsByClassName('quant_item')[0]
    let x = quantidade.innerText
    if (x == 1){
        produto.remove()
    } else {
        x -= 1
        quantidade.innerHTML = `${x}`
    }
    calcularTotal()
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
    console.log(item.imagemProduto)
    preco.innerHTML = `${item.precoProduto}`
    nome.innerHTML = `${item.nomeProduto}` 
    })
}
mostrarProdutos()
calcularTotal()