<?php
  $produto = new stdClass();
  $produto->nome = "John";
  $produto->preco = 30;

    $produtoJSON = json_encode($produto);

    echo $produtoJSON;
?>