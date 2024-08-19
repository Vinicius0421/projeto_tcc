create database db_yummifoods;
use db_yummifoods;

CREATE TABLE cliente (
CPF char(11) NOT NULL,
nome_cliente varchar(60) NOT NULL,
primary key(CPF)
);

CREATE TABLE pedido (
    IDpedido INT AUTO_INCREMENT PRIMARY KEY,
    data_pedido DATE NOT NULL,
    hora_pedido TIME NOT NULL,
    id_cliente CHAR(11) NOT NULL,
    preco_total DECIMAL(10, 2) NOT NULL,
   foreign key (id_cliente) references cliente(CPF)
);
 -- (gustavo guanabara): alter table pedidos add foreign key (id_cliente) references clientes(CPF);
 
 create table produtos (
 IDproduto int auto_increment not null PRIMARY KEY,
 nome_produto varchar(50) not null,
 preco_unitario decimal (10, 2) not null,
 quantidade int not null
 );
 -- revisar os valores do varchar
 
 create table detalhes_pedido (
 id_pedido int  not null,
 id_produto int  not null,
 quantidade int not null
 );
 -- falta colocar as fk ^
 
 create table funcionarios(
 CPF_funcionario char(11) NOT NULL PRIMARY KEY,
 nome_funcionario varchar(80) not null,
 email_funcionario varchar(255) not null,
 senha_funcionario varchar(255) not null
 );
 
 describe cliente;
 describe detalhes_pedido;
 describe funcionarios;
 describe pedido;
 describe produtos;
 


 

 
 













