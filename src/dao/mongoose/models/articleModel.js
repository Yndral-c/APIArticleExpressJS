const mongoose = require("mongoose");

const Article = mongoose.model("Article", {
    uid: String,
    title: String,
    desc: String,
    auth: String,
    imgPath: String,
    }, 'article');

module.exports = Article;