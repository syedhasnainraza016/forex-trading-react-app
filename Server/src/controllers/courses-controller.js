const Course = require("../models/Courses");
const Buyer = require("../models/CourseBuyer");
const { fileUpload, fileDelete } = require("../utils/FileOperations");

const addCourse = async (req, res) => {
  try {
    let { title, description, price, duration, code } = req.body;
    filename = fileUpload(req.files.image, "./uploads/images/");

    let newCourse = new Course({
      title: title,
      image: filename,
      description,
      price,
      duration,
      code,
    });

    // Save information
    const saveCourse = await newCourse.save();
    if (saveCourse)
      return res.status(201).json({
        status: true,
        message: "Course Uploaded Successfully.",
      });
  } catch (e) {
    console.log(e);
    res.errorResponse();
  }
};
const getallCourse = async (req, res, next) => {
  try {
    const myCourse = await Course.find().exec();
    if (!myCourse) {
      return res.status(404).json({
        status: false,
        message: "No Course found",
      });
    }
    return res.status(201).json({
      status: true,
      message: "Course found",
      data: myCourse,
    });
  } catch (error) {
    if (error) {
      console.log(error);
      next(error);
    }
  }
};
const deleteCourse = async (req, res, next) => {
  try {
    const { id } = req.body;
    const myCourse = await Course.findByIdAndDelete({ _id: id }).exec();

    if (myCourse?.image) {
      await fileDelete("./uploads/images/", myCourse?.image);
    }

    return res.status(201).json({
      status: true,
      message: "Course Deleted Successfully.",
    });
  } catch (error) {
    if (error) {
      console.log(error);
      next(error);
    }
  }
};

//buyers
const buyCourse = async (req, res) => {
  try {
    let { title, price, duration, code, buyer_id } = req.body;

    let newBuyer = new Buyer({
      title,
      price,
      duration,
      code,
      buyer_id,
    });

    // Save information
    const saveBuyer = await newBuyer.save();
    if (saveBuyer)
      return res.status(201).json({
        status: true,
        message: "Buyer Uploaded Successfully.",
      });
  } catch (e) {
    console.log(e);
    res.errorResponse();
  }
};
const getbuyerCourse = async (req, res, next) => {
  try {
    let { user_id } = req.params;
    const myCourse = await Buyer.find({ buyer_id: user_id }).exec();
    if (!myCourse) {
      return res.status(404).json({
        status: false,
        message: "No buyer Courses found",
      });
    }
    return res.status(201).json({
      status: true,
      message: "Buyer Courses found",
      data: myCourse,
    });
  } catch (error) {
    if (error) {
      console.log(error);
      next(error);
    }
  }
};

module.exports = {
  addCourse,
  getallCourse,
  deleteCourse,
  buyCourse,
  getbuyerCourse,
};
