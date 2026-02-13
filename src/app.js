require('dotenv').config();

const express = require('express');
const cors = require('cors');
const app = express();

// Connection aux bdd
if (process.env.BDD_MODE === "sequelize") {
    require("./dao/sequelize/connection").connect_sequelize()
}
else if (process.env.BDD_MODE === "mongodb") {
    require("./dao/mongoose/connection").connect_mongoose()
}


// Injecter les routes externes
const articleRoutes = require('./routes/articleRoutes');
app.use(express.json());
// Autoriser le CORS (pour le TP)
app.use(cors());
app.use(articleRoutes);

// Démarrer le serveur sur le port 3000
app.listen(3000, () => {
    console.log('Server is running on port 3000.')
});