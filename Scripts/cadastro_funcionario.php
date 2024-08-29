<?php
include_once('conexao.php');

$nomeFuncionario = $_POST['nome'];
$cpfFuncionario = $_POST['cpf'];
$emailFuncionario = $_POST['email'];
$senhaFuncionario = $_POST['senha'];


if(isset($_POST['email']) || isset($_POST['cpf']) || isset($_POST['senha']) || isset($_POST['nome'])){
    if(strlen($_POST['email']) == 0){
        echo "<script>alert('Preencha seu E-mail.');</script>";
    } else if(strlen($_POST['cpf']) == 0){
        echo "<script>alert('Preencha seu CPF.');</script>";
    } else if(strlen($_POST['nome']) == 0){
        echo "<script>alert('Preencha o seu nome.');</script>";
    }  else if (strlen($_POST['senha']) == 0){
        echo "<script>alert('Preencha sua senha.');</script>";
    } else {
        $nomeFuncionario = $mysqli->real_escape_string($_POST['nome']);
        $cpfFuncionario = $mysqli->real_escape_string($_POST['cpf']);
        $emailFuncionario = $mysqli->real_escape_string($_POST['email']);
        $senhaFuncionario = $mysqli->real_escape_string($_POST['senha']);

        $query = "INSERT INTO funcionario (CPF_funcionario, nome_funcionario, email_funcionario, senha_funcionario) VALUES ('$cpfFuncionario', '$nomeFuncionario', '$emailFuncionario', '$senhaFuncionario')";
        $queryResult = $mysqli->query($query) or die("erro");
        header("Location: projeto_tcc\area_funcionario\adm_pedidos\index.html ");
        } else {
            echo "<script>console.log('erro');</script>";
            header("Location: projeto_tcc\area_funcionario\login\login.html");
        }
    }
}
?>