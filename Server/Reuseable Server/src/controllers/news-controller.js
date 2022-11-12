const News = require("../models/News");
const { fileUpload, fileDelete } = require("../utils/FileOperations");

const addNews = async (req, res) => {
  try {
    let { title, description } = req.body;
    filename = fileUpload(req.files.image, "./uploads/images/");

    let newNews = new News({
      title: title,
      image: filename,
      description: description,
    });

    // Save information
    const saveNews = await newNews.save();
    if (saveNews)
      return res.status(201).json({
        status: true,
        message: "News Uploaded Successfully.",
      });
  } catch (e) {
    console.log(e);
    res.errorResponse();
  }
};
const getallNews = async (req, res, next) => {
  try {
    const news = await News.find().exec();
    if (!news) {
      return res.status(404).json({
        status: false,
        message: "No news found",
      });
    }
    return res.status(201).json({
      status: true,
      message: "News found",
      data: news,
    });
  } catch (error) {
    if (error) {
      console.log(error);
      next(error);
    }
  }
};
const deleteNews = async (req, res, next) => {
  try {
    const { id } = req.params;
    const news = await News.findByIdAndDelete({ _id: id }).exec();

    if (news?.image) {
      await fileDelete("./uploads/images/", news?.image);
    }

    return res.status(201).json({
      status: true,
      message: "News Deleted Successfully.",
    });
  } catch (error) {
    if (error) {
      console.log(error);
      next(error);
    }
  }
};

module.exports = {
  addNews,
  getallNews,
  deleteNews,
};
