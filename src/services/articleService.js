const DAOFactory = require('../dao/daoFactory');
const { v4: uuidv4 } = require('uuid');
const { makeService } = require('./serviceHelper');

module.exports = {
    createArticle: async (req) => {
        const generateId = uuidv4();
        let article = {uid : generateId, title: req.title};

        const newArticle = await DAOFactory.getDAOArticle().insert(article);

        return makeService("200", "Article créé avec succès", newArticle);
    },

    getAll: async () => {
        const allArticles = await DAOFactory.getDAOArticle().selectAll();

        return makeService("200", "Articles récupérés avec succès !", allArticles);
    }

};