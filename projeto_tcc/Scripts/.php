<?php

  require_once('conexao.php');
  

  $query = sprintf("SELECT * from produtos;");
  $produtos = new stdClass();
  $produtos-> $query;

    $produtoJSON = json_encode($produtos);

    echo $produtoJSON;
?>