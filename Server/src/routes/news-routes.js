const express = require("express");
const router = express.Router();
const NewsController = require("../controllers/news-controller");

//News Routes
router.get("/all", NewsController.getallNews);
router.post("/create", NewsController.addNews);
router.post("/delete", NewsController.deleteNews);
router.post(`/edit/:id`, NewsController.editNews);
router.get("/predict", NewsController.predictNews);

module.exports = router;
