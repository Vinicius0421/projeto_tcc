const botoesmenu = document.getElementsByClassName('menu_funcionarios');

for (let i = 0; i < botoesmenu.length; i++) {
    botoesmenu[i] = addEventListener("click", troca_pagina)
}


function troca_pagina(event){
        const botao = event.target;
        console.log(botao)
        var paginatrocada = botao.innerText;
        console.log(paginatrocada)
        var main = botao.parentElement.parentElement

        
        switch (paginatrocada) {
            case 'Pedidos':
                document.getElementsByTagName("main")[0].remove()
                var novoconteudo = document.createElement("main");
                main.appendChild(novoconteudo)
                novoconteudo.innerHTML = `
                <table class="tabela_pedidos">
                    <tr class="cabecalho_tabela">
                        <th>Número do pedido</th>
                        <th>Nome do Cliente</th>
                        <th></th>
                        <th>Status</th>
                    </tr>
                    <tr>
                        <td>22144</td>
                        <td>João</td>
                        <td></td>
                        <td>Preparando</td>
                    </tr>
                    <tr>
                        <td>22144</td>
                        <td>Maria</td>
                        <td></td>
                        <td>Preparando</td>
                    </tr>
                    <tr>
                        <td>22144</td>
                        <td>João</td>
                        <td></td>
                        <td>Preparando</td>
                    </tr>
                </table>
                `
                break;

            case 'Historico de pedidos':
                document.getElementsByTagName("main")[0].remove()
                novoconteudo = document.createElement("main");
                main.appendChild(novoconteudo)
                novoconteudo.innerHTML = `
                <table class="tabela_historico">
                    <tr class="cabecalho_tabela">
                        <th>Número do pedido</th>
                        <th>Nome do Cliente</th>
                        <th>Preço</th>
                        <th>Data</th>
                        <th>Hora</th>
                    </tr>
                    <tr>
                        <td>22144</td>
                        <td>João</td>
                        <td>R$ 15,00</td>
                        <td>07/11/2024</td>
                        <td>16:53</td>
                    </tr>
                    <tr>
                        <td>22144</td>
                        <td>Maria</td>
                        <td>R$ 15,00</td>
                        <td>07/11/2024</td>
                        <td>16:53</td>
                    </tr>
                    <tr>
                        <td>22144</td>
                        <td>João</td>
                        <td>R$ 15,00</td>
                        <td>07/11/2024</td>
                        <td>16:53</td>
                    </tr>
                </table>
                `
                break;

            case 'Cadastro de produtos':
                document.getElementsByTagName("main")[0].remove()
                novoconteudo = document.createElement("main");
                novoconteudo.classList.add("aba_cadastro");
                main.appendChild(novoconteudo)
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
                novoconteudo = document.createElement("main");
                main.appendChild(novoconteudo)
                novoconteudo.innerHTML = `
                <table class="produtos_disponiveis">
                    <tr class="cabecalho_tabela">
                        <th>ID do produto</th>
                        <th>Nome do produto</th>
                        <th></th>
                        <th>Quantidade disponivel</th>
                    </tr>
                    <tr>
                        <td>31445</td>
                        <td>Coxinha</td>
                        <td></td>
                        <td>31</td>
                    </tr>
                    <tr>
                        <td>31445</td>
                        <td>Coxinha</td>
                        <td></td>
                        <td>31</td>
                    </tr>
                    <tr>
                        <td>31445</td>
                        <td>Coxinha</td>
                        <td></td>
                        <td>31</td>
                    </tr>
                </table>
                `
                break;
        
            default:
                break;
        }
        
    }