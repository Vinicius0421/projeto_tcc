<?php
    include_once('conexao.php');
    if ( isset( $_FILES[ 'imagem' ][ 'name' ] ) && $_FILES[ 'imagem' ][ 'error' ] == 0 ) {
        $arquivo_tmp = $_FILES[ 'imagem' ][ 'tmp_name' ];
        $nome = $_FILES[ 'imagem' ][ 'name' ];
     
        // Pega a extensão
        $extensao = pathinfo ( $nome, PATHINFO_EXTENSION );
     
        // Converte a extensão para minúsculo
        $extensao = strtolower ( $extensao );
     
        // Somente imagens, .jpg;.jpeg;.gif;.png
        // Aqui eu enfileiro as extensões permitidas e separo por ';'
        // Isso serve apenas para eu poder pesquisar dentro desta String
        if ( strstr ( '.jpg;.jpeg;.gif;.png', $extensao ) ) {
            // Cria um nome único para esta imagem
            // Evita que duplique as imagens no servidor.
            // Evita nomes com acentos, espaços e caracteres não alfanuméricos
            $novoNome = uniqid ( time () ) . '.' . $extensao;
     
            // Concatena a pasta com o nome
            $destino = "C:/wamp64/www/projeto_tcc/projeto_tcc/usuario_tcc/img/" . $novoNome;
            $destinoModificado = substr($destino, 13);
     
            // tenta mover o arquivo para o destino
            if ( @move_uploaded_file ( $arquivo_tmp, $destino ) ) {
                $nome_produto = $_POST['nome_produto'];
                $preco_produto = $_POST['valor'];
                $categoria_produto = $_POST['categoria'];
                $quantidade = $_POST['quantidade'];

                $query = "INSERT INTO produtos (nome_produto, preco_unitario, quantidade, tipo_produto, imagem) VALUES ('$nome_produto', '$preco_produto', '$quantidade', '$categoria_produto', '$destinoModificado')";
                $queryResult = $mysqli->query($query) or die("erro");
                header("Location: http://localhost/projeto_tcc/projeto_tcc/area_funcionario/adm_pedidos/");
            }
            else
                echo 'Erro ao salvar o arquivo. Aparentemente você não tem permissão de escrita.<br/>';
        }
        else
            echo 'Você poderá enviar apenas arquivos "*.jpg;*.jpeg;*.gif;*.png"<br/>';
    }
    else
        echo 'Você não enviou nenhum arquivo!';
?>