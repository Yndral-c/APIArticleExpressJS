const express = require('express');
const router = express.Router();
const ArticleService = require("../services/articleService");

router.post("/articles/save", async (req, res) => {
    const serviceResponse = await ArticleService.createArticle(req.body)

    return res.json(serviceResponse);
})

router.post("/articles/save", async (req, res) => {
    const serviceResponse = await ArticleService.modifiedArticle(req.body)

    return res.json(serviceResponse);
})

router.get("/articles", async (req, res) => {
    const allArticles = await ArticleService.getAll()

    return res.json(allArticles);
})

router.get("/articles/:id", async (req, res) => {
    const allArticles = await ArticleService.getOneArticle(req.body.id)

    return res.json(allArticles);
})

router.delete("/articles/:uid", async (req, res) => {
    const deletedArticle = await ArticleService.delete(req.params.uid)

    return res.json(deletedArticle);
})

module.exports = router;