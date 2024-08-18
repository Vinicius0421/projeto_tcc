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

let itensCarrinho = JSON.parse(sessionStorage.getItem('carrinho')) || []

console.log(itensCarrinho)
