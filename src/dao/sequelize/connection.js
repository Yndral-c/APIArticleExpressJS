module.exports = {
    connect_sequelize : () => {
        // ----------------------------------------------------------
        // * MySQL
        // ----------------------------------------------------------

        // Connection à la BDD Mysql
        const sequelize = require("./config/database");
        sequelize.authenticate()
            .then(() => {
                console.log('Connexion MySQL OK')

                // Création de la table Article
                const Article = require('./models/articleModel');

                sequelize.sync()
                    .then(() => console.log('Tables synchronizées'))
                    .catch(err => console.log(err));
            })
            .catch(err => console.log('Erreur MySQL', err));
    }
}