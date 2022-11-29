const mongoose = require("mongoose");

const ArticleSchema = new mongoose.Schema(
  {
    title: String,
    description: String,
  },
  { timestamps: true }
);

const Article = mongoose.model("Article", ArticleSchema);

module.exports = Article;
