<?php
    include_once('conexao.php');
    $query = "select pedido.IDPedido, pedido.data_pedido, pedido.hora_pedido, pedido.id_cliente, pedido.status_pedido, cliente.nome_cliente from pedido inner JOIN cliente on pedido.id_cliente = cliente.cpf;";
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