const Article = require("./models/articleModel");
const IdaoArticle = require("../IdaoArticle");

class DaoArticleSequelize extends IdaoArticle {
    /**
     * Override explicitement si la methode existe dans le parent
     */

    async insert(article) {
        return await Article.create(article);
    };

    async selectAll() {
        return await Article.findAll();
    };
}

module.exports = DaoArticleSequelize;