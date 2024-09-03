<?php
    include_once("conexao.php");

    $cpfFuncionario = $_POST['cpf'];
    $senhaFuncionario = $_POST['senha'];

    if(isset($_POST['cpf']) || isset($_POST['senha'])){
        if(strlen($_POST['cpf']) == 0){
            echo "<script>alert('Preencha seu CPF.');</script>";
            header("Location: /projeto_tcc/projeto_tcc/area_funcionario/login/login.html");
        }  else if (strlen($_POST['senha']) == 0){
            echo "<p>Preencha sua senha.</p>";
            header("Location: /projeto_tcc/projeto_tcc/area_funcionario/login/login.html");
        } else {
        $cpfFuncionario = $mysqli->real_escape_string($_POST['cpf']);
        $senhaFuncionario = $mysqli->real_escape_string($_POST['senha']);

        $query = "SELECT * FROM funcionarios WHERE CPF_funcionario = '$cpfFuncionario' AND senha_funcionario = '$senhaFuncionario'";
        $queryResult = $mysqli->query($query) or die("erro");

        $quantidadeResultado = $queryResult->num_rows;

        if($quantidadeResultado == 1){
            $usuario = $queryResult->fetch_assoc();
            if(!isset($_SESSION)){
                session_start();
            }

            $_SESSION['cpf'] = $usuario['CPF_funcionario'];
            $_SESSION['senha'] = $usuario['senha_funcionario'];
            header("Location: /projeto_tcc/area_funcionario/adm_pedidos/");
        } else {
            echo "<script>alert('Erro');</script>";
            header("Location: /projeto_tcc/projeto_tcc/area_funcionario/login/login.html");
        }
        }
    }
?>