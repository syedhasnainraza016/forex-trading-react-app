const express = require("express");
const router = express.Router();
const CourseController = require("../controllers/courses-controller");

//News Routes
router.get("/all", CourseController.getallCourse);
router.post("/create", CourseController.addCourse);
router.post("/delete", CourseController.deleteCourse);
router.post(`/edit/:id`, CourseController.editCourse);
router.post("/buy-course", CourseController.buyCourse);
router.get("/get-buyer-courses/:user_id", CourseController.getbuyerCourse);

module.exports = router;
