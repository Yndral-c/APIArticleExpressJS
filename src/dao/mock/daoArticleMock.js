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

    async modified(article) {

        const index = ARTICLES.findIndex(a => a.id === article.id);

        if (index === -1) {
            return null;
        }

        ARTICLES[index] = {
            ...ARTICLES[index],
            ...article
        };

        return ARTICLES[index];
    }

    async delete(article) {

        const index = ARTICLES.findIndex(a => a.id === article.id);

        if (index === -1) {
            return null;
        }

        const deleted = ARTICLES[index];

        ARTICLES.splice(index, 1);

        return deleted;
    }
}

module.exports = DaoArticleMock;