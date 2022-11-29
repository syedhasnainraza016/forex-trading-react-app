const express = require("express");
const router = express.Router();
const ArticleController = require("../controllers/prediction-controller");

//Article Routes
router.get("/all", ArticleController.getallArticle);
router.post("/create", ArticleController.addArticle);
router.post("/delete", ArticleController.deleteArticle);
router.post("/edit/:id", ArticleController.editArticle);
router.get("/predict", ArticleController.predictNews);

module.exports = router;
