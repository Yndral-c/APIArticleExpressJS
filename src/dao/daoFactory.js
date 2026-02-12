module.exports = {
    // Retourne un IDEAOArticle

    getDAOArticle: () => {
        if (process.env.BDD_MODE === "sequelize") {
            const DAOArticleSequelize = require('./sequelize/daoArticleSequelize');
            return new DAOArticleSequelize();
        }
        else if (process.env.BDD_MODE === "mongodb") {
            const DAOArticleMongoose = require('./mongoose/daoArticleMongoose');
            return new DAOArticleMongoose();
        }
        else if (process.env.BDD_MODE === "mock") {
            const DAOArticleMock = require('./mock/daoArticleMock');
            return new DAOArticleMock();
        }
        // Fallback -> ce qu'il se passe dans le pire des cas
        const DAOArticleMock = require("./mock/daoArticleMock");
        return new DAOArticleMock();
    }
}