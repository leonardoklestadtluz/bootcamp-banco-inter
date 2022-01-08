-- selecionar base de dados para utilização
USE Estoque

-- criação de banco de dados
CREATE DATABASE Estoque

-- criação de tabelas
CREATE TABLE Produtos (
	codigo int NOT NULL,
	descricao VARCHAR(50) NOT NULL,
	data_validade DATETIME,
	ean VARCHAR(15) NOT NULL,
	ind_inativo INT NOT NULL DEFAULT 0
)

CREATE TABLE Loja (
	codigo INT NOT NULL,
	nome VARCHAR(50) NOT NULL,
	ind_inativo INT NOT NULL DEFAULT 0,
	CONSTRAINT Loja_pk PRIMARY KEY(codigo)
)

CREATE TABLE Estoque(
	codigo_produto INT NOT NULL,
	codigo_filial INT NOT NULL,
	quantidade DECIMAL NOT NULL DEFAULT 0
	CONSTRAINT Estoque_pk PRIMARY KEY(codigo_produto, codigo_filial)
)

-- alteração de dados
ALTER TABLE Produtos ADD CONSTRAINT pk_Produtos PRIMARY KEY (codigo)

ALTER TABLE Estoque ADD CONSTRAINT fk_Estoque_Produtos FOREIGN KEY (codigo_filial) REFERENCES Lojas(codigo)

ALTER TABLE Estoque DROP CONSTRAINT fk_Estoque_Produtos

-- alterar nome de tabelas
EXEC sp_rename 'Loja', 'Lojas'

-- criação de índices
CREATE INDEX idx_Produtos_ean ON Produtos(ean)

-- inserção de dados nas tabelas
INSERT INTO Produtos VALUES(1, 'Nome do produto', GETDATE(), '0123456789101', 0)

INSERT INTO Produtos(codigo, descricao, ean) VALUES(2, 'Nome do Produto 2', '123456789101')

INSERT INTO Loja(codigo, nome) VALUES(1000, 'Filial Nova Iguaçu')
INSERT INTO Loja(codigo, nome) VALUES(2000, 'Filial São Paulo')
INSERT INTO Loja(codigo, nome) VALUES(3000, 'Filial Recife')

INSERT INTO Estoque(codigo_produto, codigo_filial, quantidade) VALUES(1, 1000, 10)

-- deletando dados com ou sem a cláusula WHERE
DELETE FROM Estoque

-- consulta de dados
SELECT * FROM Estoque

SELECT codigo, nome FROM Loja WHERE ind_inativo = 0

SELECT TOP (100) [codigo], [descricao], [data_validade], [ean], [ind_inativo] FROM [dbo].[Produtos]

SELECT * FROM Produtos WHERE Descricao LIKE '%Produto%'

-- consulta com inner join
SELECT E.codigo_filial, L.nome FROM Estoque E INNER JOIN Lojas L ON E.codigo_filial = L.codigo
INNER JOIN Produtos P ON E.codigo_produto = P.codigo


-- consulta de dados com agregação
SELECT COUNT(*) AS Total FROM Produtos