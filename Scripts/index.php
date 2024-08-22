<?php
  //$x = 2;
  require_once('conexao.php');
  $query = "select * from produtos";
  if( $result = $mysqli-> query($query, $result_mode =  MYSQLI_STORE_RESULT)){
    $x = $result->num_rows;
    $dadosCompilados = array();
    for($i = 0; $i < $x; $i++){
      $dados = mysqli_fetch_assoc($result);
      $dadosCompilados[] = $dados;
    };
    print_r(json_encode($dadosCompilados)) ;
  };
  $mysqli-> close();
?>