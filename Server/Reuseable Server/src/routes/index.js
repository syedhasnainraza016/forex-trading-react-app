const express = require("express");
const newsRoute = require("./news-routes");

const router = express.Router();

router.use("/news", newsRoute);

module.exports = router;
