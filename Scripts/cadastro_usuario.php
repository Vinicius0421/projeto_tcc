<?php
    include_once('conexao.php');
    $nomeUsuario = $_POST["nome"];
    $CPF = $_POST["cpf"];
    

    $sql = "INSERT INTO cliente (CPF, nome_cliente) VALUES ('$CPF', '$nomeUsuario')";
    if (mysqli_query($mysqli, $sql)) {
        echo "<script>alert('Usuário registrado com sucesso!');</script>";
        header("Location: ");
  } else {
        echo "<script>alert('Erro');</script>";
  }

  $mysqli-> close();
?>