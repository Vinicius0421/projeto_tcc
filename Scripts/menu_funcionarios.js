const botoesmenu = document.querySelectorAll('.menu_funcionarios').forEach(span => {
    span.addEventListener("click", function(event){
        const botao = event.target;
        var paginatrocada = botao.innerText;
        console.log(paginatrocada)
        var site = botao.parentElement.parentElement.parentElement
        switch (paginatrocada) {
            case 'Pedidos':
                document.getElementsByTagName("main")[0].remove()
                fnAJAX(1, "/projeto_tcc/Scripts/pedidos.php")
                break;
            case 'Historico de pedidos':
                document.getElementsByTagName("main")[0].remove()
                fnAJAX(2, "/projeto_tcc/Scripts/pedidos.php")
                break;
            case 'Cadastro de produtos':
                document.getElementsByTagName("main")[0].remove()
                novoconteudo = document.createElement("main");
                site.appendChild(novoconteudo)
                novoconteudo.innerHTML = `
                <div class="container">
                    <form method="post" action="...">

                        <div class="nome_e_valor">   
                            <div class="nome_do_produto">
                                <label for="nome_produto">Nome do produto:</label>
                                <input type="text" name="nome_produto" id="nome_produto" placeholder="Nome do produto">
                            </div>
                            <div class="valor_do_produto">
                                <label for="valor">Valor:</label>
                                <input type="number" name="valor" id="valor" placeholder="Valor">
                            </div>
                        </div>
                        
                        <label for="categoria">Categoria:</label>
                        <select name="categoria" id="categoria">
                            <option value="">Selecione...</option>
                            <option value="opcao1">Fritos</option>
                            <option value="opcao2">Assados</option>
                            <option value="opcao3">Bebidas</option>
                            <option value="opcao4">Sobremesas</option>
                        </select>
                        
                        <label for="descricao">Descrição:</label>
                        <br>
                        <textarea name="descricao" id="descricao" cols="35" rows="5"></textarea>
                        <div class="botao">
                            <button type="submit">Cadastrar produto</button>
                        </div>
                    </form>
                </div>
                `
                break;
            case 'Produtos disponíveis':
                document.getElementsByTagName("main")[0].remove()
                fnAJAX(3, "/projeto_tcc/Scripts/index.php")
                break;
            default:
                break;
        }
    })
})
function mostrarHistoricoPedidos(historicoPedidos){
    let historicoPedidos = JSON.parse(historicoPedidos)
    novoconteudo = document.createElement("main");
    let site = document.getElementsByTagName('body')[0]
    site.appendChild(novoconteudo)
    let table = document.createElement('table')
    table.classList.add('tabela_pedidos')
    novoconteudo.appendChild(table)
    let tr = document.createElement('tr')
    let cabecalhoTabela = table.appendChild(tr)
    tr.classList.add('cabecalho_tabela')
    cabecalhoTabela.innerHTML = `
    <th>Número do pedido</th>
    <th>Nome do Cliente</th>
    <th>Preço</th>
    <th>Data</th>
    <th>Hora</th>
    `
    historicoPedidos.forEach(item => {
        let tr2 = document.createElement('tr')
        let td1 = document.createElement('td')
        let td2 = document.createElement('td')
        let td3 = document.createElement('td')
        let td4 = document.createElement('td')
        let td5 = document.createElement('td')
        table.appendChild(tr2)
        let idPedido = tr2.appendChild(td1)
        let nomeCliente = tr2.appendChild(td2)
        let precoPedido = tr2.appendChild(td3)
        let dataPedido =  tr2.appendChild(td4)
        let horaPedido = tr2.appendChild(td5)
        idPedido.innerText = item.IDpedido;
        nomeCliente.innerText = item.nome_cliente;
        precoPedido.innerText = item.preco_pedido;
        dataPedido.innerText = item.data_pedido;
        horaPedido.innerText = item.hora_pedido;
    })
}
function mostrarPedidos(pedidosExistentes){
    let pedidos = JSON.parse(pedidosExistentes);
    novoconteudo = document.createElement("main");
    let site = document.getElementsByTagName('body')[0]
    site.appendChild(novoconteudo)
    let table = document.createElement('table')
    table.classList.add('tabela_pedidos')
    novoconteudo.appendChild(table)
    let tr = document.createElement('tr')
    let cabecalhoTabela = table.appendChild(tr)
    tr.classList.add('cabecalho_tabela')
    cabecalhoTabela.innerHTML = `
    <th>Número do pedido</th>
    <th>Nome do Cliente</th>
    <th></th>
    <th>Status</th>
    `
    pedidos.forEach(item => {
        let tr2 = document.createElement('tr')
        let td1 = document.createElement('td')
        let td2 = document.createElement('td')
        let td3 = document.createElement('td')
        let td4 = document.createElement('td')
        table.appendChild(tr2)
        let idPedido = tr2.appendChild(td1)
        let nomeCliente = tr2.appendChild(td2)
        tr2.appendChild(td3)
        let statusProduto =  tr2.appendChild(td4)
        idPedido.innerText = item.IDpedido;
        nomeCliente.innerText = item.nome_cliente;
        statusProduto.innerText = item.status_pedido;
    });
}
function mostrarEstoque(produtosExistentes){
    let produtos = JSON.parse(produtosExistentes);
    console.log(produtos)
    novoconteudo = document.createElement("main");
    let site = document.getElementsByTagName("body")[0]
    site.appendChild(novoconteudo)
    let table = document.createElement('table')
    table.classList.add("produtos_disponiveis")
    novoconteudo.appendChild(table)
    let tr = document.createElement('tr')
    let cabecalhoTabela = table.appendChild(tr)
    tr.classList.add('cabecalho_tabela')
    cabecalhoTabela.innerHTML = `
            <th>ID do produto</th>
            <th>Nome do produto</th>
            <th></th>
            <th>Quantidade disponivel</th>`
    produtos.forEach(item => {
        let tr2 = document.createElement('tr')
        let td1 = document.createElement('td')
        let td2 = document.createElement('td')
        let td3 = document.createElement('td')
        let td4 = document.createElement('td')
        table.appendChild(tr2)
        let idProduto = tr2.appendChild(td1)
        let nomeProduto = tr2.appendChild(td2)
        tr2.appendChild(td3)
        let quantidadeProduto =  tr2.appendChild(td4)
        idProduto.innerText = item.IDproduto;
        nomeProduto.innerText = item.nome_produto;
        quantidadeProduto.innerText = item.quantidade;
    })
}
function fnAJAX(index, url){
    // Pedido do AJAX para puxar dados do servidor
    const request = new XMLHttpRequest()
    request.onload = function (){
        //teste pra ver se a conexão do ajax foi bem sucedida
        if(this.readyState == 4 && this.status == 200){
            var obj = this.responseText;
            switch (index) {
                case 1:
                    mostrarPedidos(obj)
                    break;
                case 2:
                    mostrarHistoricoPedidos(obj)
                    break;
                case 3:
                    mostrarEstoque(obj)
                    break;
                default:
                    break;
            }
    }
}
    // Parâmetros de requisição e conexão do AJAX (true é para carregar de modo assíncrono)
    request.open("GET", url, true);
    request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded")
    request.send()
}