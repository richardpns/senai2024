-- DDL - Estrutura
drop database if exists transpor;
create database transpor;
use transpor;
create table cli(
    idCli integer primary key auto_increment,
    nome varchar(50) not null unique,
    endereco varchar(50) not null,
    tel varchar(50) not null,
    email varchar(50) not null
);
-- describe cli;

-- DML - Popular com dados de teste
insert into cli(nome, endereco, tel, email)
values
("alves","13913286","1190393009","teste@gmail.com"),
("carlo","13213286","1143593009","teste2@gmail.com"),
("thiago","139343297","11902342509","teste3@gmail.com");

select * from cli;

create table func(
    idFunc integer primary key auto_increment,
    nome varchar(50) not null unique,
    cargo varchar(50) not null,
    salario integer(50) not null
);

insert into func(nome, cargo, salario)
values
("roberto","gerente","5000"),
("juan","conferente","2500"),
("emerson","operador de empilhadeira","2200");

select * from func;

create table veic(
    -- idVeic integer primary key auto_increment,
    placa integer(50)primary key not null,
    capacidade integer(50) not null,
    modelo varchar(50) not null,
    rotas varchar(200) not null
);

 -- capacidade com base em CMT 
insert into veic(capacidade, modelo, placa, rotas)
values
("70","volvo fh 6x2T","EMP0A14","rua pinto catao, 780, jaguariuna"),
("70","volvo fh 6x2T","EMP0A14","rua pinto catao, 780, jaguariuna"),
("70","volvo fh 6x2T","EMP0A14","rua pinto catao, 780, jaguariuna");

      
select * from veic;

