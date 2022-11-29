const News = require("../models/News");
const { fileUpload, fileDelete } = require("../utils/FileOperations");
const { Configuration, OpenAIApi } = require("openai");

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
    const { id } = req.body;
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
const editNews = async (req, res) => {
  if (!req.body) {
    return res.status(400).send({
      message: "Data to update can not be empty!",
    });
  }
  const id = req.params.id;
  News.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
    .then((data) => {
      if (!data) {
        res.status(404).send({
          message: `Cannot update News with id=${id}. Maybe News was not found!`,
        });
      } else res.send({ message: "News was updated successfully." });
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error updating News with id=" + id,
      });
    });
};

const predictNews = async (req, res, next) => {
  try {
    const configuration = new Configuration({
      apiKey: process.env.OPENAI_API_KEY,
    });
    const openai = new OpenAIApi(configuration);

    const response = await openai.createCompletion({
      // model: "text-davinci-002",
      model: "text-babbage-001",
      prompt:
        "Summarize this for a second-grade student:\n\nJupiter is the fifth planet from the Sun and the largest in the Solar System. It is a gas giant with a mass one-thousandth that of the Sun, but two-and-a-half times that of all the other planets in the Solar System combined. Jupiter is one of the brightest objects visible to the naked eye in the night sky, and has been known to ancient civilizations since before recorded history. It is named after the Roman god Jupiter.[19] When viewed from Earth, Jupiter can be bright enough for its reflected light to cast visible shadows,[20] and is on average the third-brightest natural object in the night sky after the Moon and Venus.",
      temperature: 0.7,
      max_tokens: 256,
      top_p: 1,
      frequency_penalty: 0,
      presence_penalty: 0,
    });

    // let newPrediction = response?.choices[0].text;

    // console.log("newPrediction", response.data.choices[0].text);
    let chos = response.data.choices[0].text;

    return res.status(200).send({ data: chos });

    // return res.status(201).json({
    //   status: true,
    //   message: "News found",
    //   data: response.choices,
    // });
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
  predictNews,
  editNews,
};
