const DAOFactory = require('../dao/daoFactory');
const { makeService } = require('./serviceHelper');
const { v4: uuidv4 } = require('uuid');

module.exports = {
    createArticle: async (req) => {
        const generateId = uuidv4();
        let article = {uid : generateId, title: req.title, desc: req.desc, auth: req.auth, imgPath: req.imgPath};

        const newArticle = await DAOFactory.getDAOArticle().insert(article);

        return makeService("200", "Article créé avec succès", newArticle);
    },

    modifiedArticle: async (req) => {
        const changedArticle = await DAOFactory.getDAOArticle().modified(req);

        return makeService("200", "Article modifié avec succès", changedArticle);
    },

    getAll: async () => {
        const allArticles = await DAOFactory.getDAOArticle().selectAll();

        return makeService("200", "Articles récupérés avec succès !", allArticles);
    }

};