const botoesmenu = document.getElementsByClassName('menu_funcionarios');

for (let i = 0; i < botoesmenu.length; i++) {
    botoesmenu[i] = addEventListener("click", troca_pagina)
}

function troca_pagina(event){
        const botao = event.target;
        const main = botao.parentElement.parentElement
        main.getElementsByTagName("main")[0].remove()
        
    
        let novoconteudo = document.createElement("main");
        novoconteudo.classList.add("aba_cadastro")
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
        clicou = false
    }