const express = require("express");
const app = express();

const Sequelize = require('sequelize');
const sequelize = new Sequelize('nome_banco', 'nome_banco', 'senha', {
    host: "186.202.152.73",
    dialect: "mysql"
});


sequelize.authenticate().then(function () {
    console.log("Conectado com Sucesso");
}).catch(function (erro) {
    console.log("Falha ao se conectar: " + erro);
});


const Postagem = sequelize.define('postagens', {
    titulo: {
        type: Sequelize.STRING
    },
    conteudo: {
        type: Sequelize.TEXT
    }
});

Postagem.sync({ force: true });

const Usuario = sequelize.define('usuarios', {
    nome: {
        type: Sequelize.STRING
    },
    sobrenome: {
        type: Sequelize.INTEGER
    },
    idade: {
        type: Sequelize.STRING
    },
    email: {
        type: Sequelize.STRING
    }
});

Usuario.sync({ force: true });






app.get("/", function (req, res) {
    res.sendFile(__dirname+"/html/index.html");
});

app.get("/sobre", function (req, res) {
    res.send("Minha pagina Sobre");
});

app.get("/blog", function (req, res) {
    res.send("Bem-vindo ao meu blog");
});

app.get("/ola/:cargo/:nome", function (req, res) {
    res.send("<h1> Olá "+req.params.nome+"</h1> <br/> <h2> Seu cargo é "+req.params.nome+"</h2>");
});

app.listen(8081, function () {
    console.log("Servidor Rodando na Url http://localhost:8081")
});