const express = require("express");
const router = express.Router();
const AuthController = require("../controllers/auth-controller");
const authController = new AuthController();

//Auth Routes
router.post("/login", authController.login.bind(authController));
router.post("/register", authController.register.bind(authController));
router.get("/open-app", authController.openApp.bind(authController));
router.get("/all-users", authController.getUsers.bind(authController));

module.exports = router;
