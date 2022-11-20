const express = require("express");
const newsRoute = require("./news-routes");
const authRoute = require("./auth-routes");
const courseRoute = require("./course-routes");

const router = express.Router();

router.use("/news", newsRoute);
router.use("/auth", authRoute);
router.use("/course", courseRoute);

module.exports = router;
