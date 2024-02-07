//Dependências - Frameworks
const express = require("express");
const mysql = require("mysql");
const cors = require("cors");
const bodyParser = require("body-parser");

//Conexão com o SGBD MySQL
const con = mysql.createConnection({
    user: 'root',
    host: 'localhost',
    database: 'locadora'
});


//Rota de teste
const teste = (req, res) => {
    res.send("Back-end respondendo ");
}

//CRUD - create
const create = (req, res) => {
    let placa = req.body.placa;
    let marca = req.body.marca;
    let modelo = req.body.modelo;
    let ano = req.body.ano;
    let query = `INSERT INTO carros(placa, marca, modelo, ano) VALUE`;
    query += `('${placa}', '${marca}', '${modelo}', '${ano}');`;
    con.query(query,(err, result)=>{
     if(err)
            res.redirect("http://127.0.0.1:5500/front/erro.html?erro=Provalmente a placa já está cadastrado&err="+err.code);
        else
            res.redirect("http://127.0.0.1:5500/front/index.html");
    });
}

//CRUD - Read
const read = (req, res) => {
    con.query("SELECT * FROM Carros ORDER BY id DESC",(err, result)=>{
        if(err)
            res.json(err);
        else
            res.json(result);
    });
}

//Configurações de saída - FrontEnd
const app = express();
app.use(express.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));

//Rotas de Saída - FrontEnd
app.get("/", teste);
app.post("/carros", create);
app.get("/carros", read);

//Teste e porta no console
app.listen(3000, () => {
    console.log("Back-end respondendo na porta 3000");
});