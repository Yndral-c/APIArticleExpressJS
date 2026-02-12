require('dotenv').config();

const express = require('express');

const app = express();

// Connection aux bdd
require('./dao/sequelize/connection').connect_sequelize();


// Injecter les routes externes
const articleRoutes = require('./routes/articleRoutes');
app.use(articleRoutes);

// Démarrer le serveur sur le port 3000
app.listen(3000, () => {
    console.log('Server is running on port 3000.')
});