module.exports = {
    connect_mongoose : () => {
        // ----------------------------------------------------------
        // * MongoDB
        // ----------------------------------------------------------
        const mongoose = require('mongoose');

        // Si connexion reussie
        mongoose.connection.once('open', () => {
            console.log(`Connecté(e) à la base de données Mongoose`);
        });

        // Si erreur bdd
        mongoose.connection.on('error', (err) => {
            console.log(`Erreur de la base données Mongoose`);
        });

        // Enclencher à la connexion
        mongoose.connect(process.env.MONGODB_URL);
    }
}