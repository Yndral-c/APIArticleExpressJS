const express = require('express');
const router = express.Router();

router.get("all-articles", async (req, res) => {
    console.log("test");
})

module.exports = router;