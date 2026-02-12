const express = require('express');
const router = express.Router();
const ArticleService = require("../services/articleService");

router.post("/create-article", async (req, res) => {
    const serviceResponse = await ArticleService.createArticle(req.body)

    return res.json(serviceResponse);
})

router.get("/all-articles", async (req, res) => {
    const allArticles = await ArticleService.getAll()

    return res.json(allArticles);
})

module.exports = router;