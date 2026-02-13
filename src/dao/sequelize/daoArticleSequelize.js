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

    async modified(article) {
        const modified = await Article.findByPk(article.uid);
        if (!modified) {
            return null
        }
        return await modified.update(article);
    };

    async delete(article) {
        const deleted = await Article.findByPk(article.uid);
        if (!deleted) {
            return null
        }
        return await deleted.destroy(article);
    }
}

module.exports = DaoArticleSequelize;