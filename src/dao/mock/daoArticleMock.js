const IDAOArticle = require("../IdaoArticle");

let ARTICLES = [{
    id: "1",
    title: "Jeu 1"
},
    {
        id: "2",
        title: "Jeu 2"
    }];

class DaoArticleMock extends IDAOArticle {


    /**
     * Override explicitement si la methode existe dans le parent
     */
    async insert(article) {
        ARTICLES.push(article);
        return article;
    }

    /**
     * Override explicitement si la methode existe dans le parent
     */
    async selectAll() {
        return ARTICLES;
    }
}

module.exports = DaoArticleMock;