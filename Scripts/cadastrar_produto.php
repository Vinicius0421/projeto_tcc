<?php
    include_once('conexao.php');

    $destino = "projeto_tcc/totem/usuario_tcc/img/" . $_FILES['arquivo']['nome'];
    $tmp_arquivo = $_FILES['arquivo']['tmp_name'];

    move_uploaded_file($tmp_arquivo, $destino);

    echo "<script>alert('jorginho perereca')</script>";
?>