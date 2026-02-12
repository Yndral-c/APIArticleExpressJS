const express = require('express');
const router = express.Router();

router.post("create-article", async (req, res) => {
    const serviceResponse = await ArticleService.createArticle(req.body)

    return response.json(serviceResponse);
})

router.get("all-articles", async (req, res) => {
    const allArticles = await ArticleService.getAll()

    return response.json(allArticles);
})

module.exports = router;