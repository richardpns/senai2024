-- DDL - Estrutura
drop database if exists locadora;
create database locadora;
use locadora;
create table Carros(
    id integer primary key auto_increment,
    placa varchar(20) not null unique,
    marca varchar(50) not null,
    modelo varchar(50) not null,
    ano date not null
);
describe Carros;

-- DML - Popular com dados de teste
insert into Carros(placa, marca, modelo, ano)
values
("AAA1A11","chevrolet","Silverado","1995-01-01"),
("AAA1A22","chevrolet","chevette","1999-01-01");

select * from Carros;

