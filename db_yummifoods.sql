create database db_yummifoods;
use db_yummifoods;

CREATE TABLE cliente (
CPF char(11) NOT NULL,
nome_cliente varchar(60) NOT NULL,
primary key(CPF)
)engine=InnoDB default charset=utf8mb4;

CREATE TABLE pedido (
    IDpedido INT AUTO_INCREMENT PRIMARY KEY,
    data_pedido DATE NOT NULL,
    hora_pedido TIME NOT NULL,
    id_cliente CHAR(11) NOT NULL,
    preco_total DECIMAL(10, 2) NOT NULL,
   foreign key (id_cliente) references cliente(CPF)
)engine=InnoDB default charset=utf8mb4;
 -- (gustavo guanabara): alter table pedidos add foreign key (id_cliente) references clientes(CPF);
 
 create table produtos (
 IDproduto int auto_increment not null PRIMARY KEY,
 nome_produto varchar(255) not null,
 preco_unitario decimal (10, 2) not null,
 quantidade int not null,
 status_pedido boolean not null,
 imagem blob 
 )engine=InnoDB default charset=utf8mb4;
 
 
 create table detalhes_pedido (
 id_pedido int  not null,
 id_produto int  not null,
 quantidade int not null,
 foreign key (id_pedido) references pedido(IDpedido),
 foreign key (id_produto) references produtos(IDproduto)
 )engine=InnoDB default charset=utf8mb4;
 -- revisar se a quantidade é chave estrangeira (tabela produtos)
 
 create table funcionarios(
 CPF_funcionario char(11) NOT NULL PRIMARY KEY,
 nome_funcionario varchar(80) not null,
 email_funcionario varchar(255) not null,
 senha_funcionario varchar(255) not null

 alter table produtos drop column status_pedido


 

 
 













