<?php
  //$x = 2;
  require_once('conexao.php');
  $query = "select * from produtos";
  if( $result = $mysqli-> query($query, $result_mode =  MYSQLI_STORE_RESULT)){
    $x = $result->num_rows;
    for($i = 0; $i < $x; $i++){
      $dados = json_encode(mysqli_fetch_assoc($result));
      print_r($dadosCompilados);
    }
  };
  $mysqli-> close();
?>