const express = require('express');

const app = express();

// Injecter les routes externes
const articleRoutes = require('./routes/articleRoutes');
app.use(articleRoutes);

// Démarrer le serveur sur le port 3000
app.listen(3000, () => {
    console.log('Server is running on port 3000.')
});