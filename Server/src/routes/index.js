const express = require("express");
const newsRoute = require("./news-routes");
const authRoute = require("./auth-routes");

const router = express.Router();

router.use("/news", newsRoute);
router.use("/auth", authRoute);

module.exports = router;
