<?php 
    $server = "localhost";
    $usuario = "root";
    $senha = "";
    $db = "Db_yummiFoods";

    $mysqli = new mysqli($server, $usuario, $senha, $db);
    if (!$mysqli) {
        die("A conexão falhou: " . mysqli_connect_error());
  }
?>