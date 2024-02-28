-- DDL - Estrutura
DROP DATABASE IF EXISTS locadora;
CREATE DATABASE locadora;
USE locadora;

CREATE TABLE Carros (
    id integer PRIMARY KEY AUTO_INCREMENT,
    placa VARCHAR(20) NOT NULL UNIQUE,
    marca VARCHAR(50) NOT NULL,
    modelo VARCHAR(50) NOT NULL,
    ano DATE NOT NULL
);

DESCRIBE Carros;

-- DML - Popular com dados de teste
INSERT INTO Carros (placa, marca, modelo, ano)
VALUES
    ("AAA1A11", "chevrolet", "Silverado", "1995-01-01"),
    ("AAA1A22", "chevrolet", "chevette", "1999-01-01");

SELECT * FROM Carros;
