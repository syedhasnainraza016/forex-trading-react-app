const express = require("express");
const cors = require("cors");
const router = require("./src/routes");
const { json, urlencoded } = require("express");
const dotenv = require("dotenv");
const fileUpload = require("express-fileupload");
const bodyParser = require("body-parser");

dotenv.config();
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(fileUpload());
app.use("/uploads/images", express.static("uploads/images"));

require("./src/DB/Connection");

app.use(json());
app.use(urlencoded({ extended: true }));
app.use(express.static(__dirname));
app.use(
  cors({
    credentials: true,
    origin: function (origin, callback) {
      callback(null, true); // allow these domains
    },
  })
);

app.use("/api", router);

app.listen(4000, () => console.log("Server Running on Port 4000"));
