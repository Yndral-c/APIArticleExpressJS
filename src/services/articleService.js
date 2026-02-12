const DAOFactory = require('../dao/daoFactory');
const { v4: uuidv4 } = require('uuid');

module.exports = {
    createArticle: async (req) => {
        const generateId = uuidv4();
        let article = {uid : generateId, title: req.title};

        const newArticle = await DAOFactory.getDAOArticle().insert(article);

        return {code: 200, message: "Article créé avec succès", data: newArticle};
    },

    getAll: async () => {
        const allArticles = await DAOFactory.getDAOArticle().selectAll();

        return {code: 200, message: "Articles récupérés avec succès !", data: allArticles};
    }

};