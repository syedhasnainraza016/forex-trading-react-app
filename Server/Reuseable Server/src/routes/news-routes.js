const express = require("express");
const router = express.Router();
const NewsController = require("../controllers/news-controller");

//News Routes
router.get("/all", NewsController.getallNews);
router.post("/create", NewsController.addNews);

module.exports = router;
