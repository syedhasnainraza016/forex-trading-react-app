const mongoose = require("mongoose");

const NewsSchema = new mongoose.Schema(
  {
    title: String,
    description: String,
    image: String,
  },
  { timestamps: true }
);

const News = mongoose.model("News", NewsSchema);

module.exports = News;
