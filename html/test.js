const Sequelize = require('sequelize');
const sequelize = new Sequelize('dbplataformacursos', 'root', '6844866', {
    host: "localhost",
    dialect: "mysql"
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



/*
sequelize.authenticate().then(function () {
    console.log("Conectado com Sucesso");
}).catch(function (erro) {
    console.log("Falha ao se conectar: " + erro);
});
*/
