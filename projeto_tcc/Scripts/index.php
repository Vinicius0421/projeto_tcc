<?php
  $produto = new stdClass();
  $produto->nome = "coxinha";
  $produto->preco = 30;

    $produtoJSON = json_encode($produto);

    echo $produtoJSON;
?>