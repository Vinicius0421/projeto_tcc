<?php

  require_once('conexao.php');
  

  $query = sprintf("SELECT nome_produto from produtos;");
  $produtos = new stdClass();
  $produtos->$query;
  $produtoJSON = json_encode($produtos);

    echo $produtoJSON;
?>