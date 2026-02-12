const Article = require("./models/articleModel");
const IdaoArticle = require("../IdaoArticle");

class DaoArticleMongoose extends IdaoArticle {
    /**
     * Override explicitement si la methode existe dans le parent
     */

    async insert(article) {
        const newArticle = new Article(article);
        return await newArticle.save();
    };

    async selectAll() {
        return await Article.find();
    };
}

module.exports = DaoArticleMongoose;