const express = require("express");
const mysql = require("mysql");
const cors = require("cors");
const bodyParser = require("body-parser");


const con = mysql.createConnection({
    user: 'root',
    host: 'localhost',
    database: 'locadora'
});
const teste = (req, res) => {
    res.send("Back-end respondendo ");
}



const create = (req, res) => {
    console.log("Recebida solicitação de criação de carro");
    let placa = req.body.placa;
    let marca = req.body.marca;
    let modelo = req.body.modelo;
    let ano = req.body.ano;

    console.log(placa, marca, modelo, ano);
    
    
    let query = `INSERT INTO Carros (placa, marca, modelo, ano) VALUE`;
    query += ` ('${placa}, '${marca}', '${modelo}, '${ano});`;
   
    
    con.query(query, (err, result) => {
        if (err) {
            // console.error('Erro ao inserir carro no banco de dados:', err);
            res.status(500).json({ error: 'Erro ao inserir carro no banco de dados', details: err });
        } else {
            console.log('Carro inserido com sucesso');
            res.status(200).json({ message: 'Carro inserido com sucesso' });
        }
    });
};



const read = (req, res) => {
    con.query("SELECT * FROM Carros ORDER BY id DESC", (err, result) => {
        if (err)
            res.json(err);
        else
            res.json(result);
    });
}


const remove = (req, res) => {
    const carId = req.params.id;
    const query = `DELETE FROM carros WHERE id = ${carId}`;
    con.query(query, (err, result) => {
        if (err) {
            res.status(500).json({ error: "Erro ao excluir carro", details: err });
        } else {
            res.status(200).json({ message: `Carro com ID ${carId} foi excluído com sucesso` });
        }

    });
}

const update = (req, res) => {
    console.log("Recebida solicitação de atualização de carro");
    
    const id = req.params.id;
    const { placa, marca, modelo, ano } = req.body;
    console.log("Dados recebidos para atualização:", { id, placa, marca, modelo, ano });
    
    const query = 'UPDATE carros SET placa = ?, marca = ?, modelo = ?, ano = ? WHERE id = ?';
    con.query(query, [placa, marca, modelo, ano, id], (err, result) => {
        if (err) {
            console.error('Erro ao atualizar carro:', err);
            res.status(500).json({ error: 'Erro ao atualizar carro', details: err });
        } else {
            if (result.affectedRows === 0) {
                console.log(`Nenhum carro encontrado com o ID ${id}`);
                res.status(404).json({ error: 'Nada foi alterado' });
            } else {
                console.log(`Carro com o ID ${id} atualizado com sucesso`);
                res.status(200).json({ message: 'Atualizado com sucesso!' });
            }
        }
    });
};


const app = express();
app.use(express.json());
app.use(cors());

app.get("/", teste);
app.post("/carros", create);
app.get("/carros", read);
app.delete("/carros/:id", remove);  
app.put("/carros/:id", update); 


app.listen(3000, () => {
    console.log("Back-end respondendo na porta 3000");
});
