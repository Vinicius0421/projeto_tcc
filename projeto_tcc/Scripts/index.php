<?php
    $produto = [
        "nome" => "coxinha",
        "preco" => "5",
    ];

    $produtoJSON = json_encode($produto);
    file_put_contents('data.json', $produtoJSON);
?>