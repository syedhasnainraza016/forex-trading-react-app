const mongoose = require("mongoose");

const CoursesSchema = new mongoose.Schema(
  {
    title: String,
    price: String,
    duration: String,
    code: String,
    description: String,
    image: String,
  },
  { timestamps: true }
);

const Courses = mongoose.model("Courses", CoursesSchema);

module.exports = Courses;
