const BaseController = require("./base-controller");
const bcrypt = require("bcrypt");
const User = require("../models/Users");
const { exec } = require("child_process");

const saltRounds = 10;

class AuthController extends BaseController {
  constructor() {
    super();
  }

  async login(req, res) {
    try {
      let { email, password } = req.body;
      let user = (await this.get(User, { email }))[0];
      // console.log("user1", bcrypt.compareSync(password, user.password));
      if (user && bcrypt.compareSync(password, user.password)) {
        let userDetail = await User.findOne({ email });
        // console.log("userDetail", userDetail);

        let data = {
          user: userDetail,
          token: this.generateToken({ _id: user._id, name: user.username }),
        };
        res.status(200).send({ data, message: "Login Successfully!" });
      } else {
        res.status(201).send("User not Exists");
      }
    } catch (e) {
      console.log(e);
      res.status(409).send("error");
    }
  }

  // Completed
  async register(req, res) {
    try {
      console.log(req.body);
      let { username, password, email } = req.body;
      if (!(await this.is_exists(User, { email }))) {
        const salt = bcrypt.genSaltSync(saltRounds);
        let data = {
          username,
          password: bcrypt.hashSync(password, salt),
          email,
          role: "user",
        };

        data = await this.create(User, data);
        res.status(200).send({ data, message: "User Register Successfully" });
      } else {
        res.status(409).send("Email Already Exists");
      }
    } catch (e) {
      console.log(e);
      res.status(409).send("error");
    }
  }

  async getUsers(req, res) {
    try {
      let data = await this.get(User);
      res.status(200).send({ data });
    } catch (e) {
      console.log(e);
      res.status(200).send();
    }
  }

  async getRoles(req, res) {
    try {
      let data = await this.get(Role);
      res.successResponse({ data });
    } catch (e) {
      console.log(e);
      res.errorResponse();
    }
  }
  async openApp(req, res) {
    try {
      console.log("open app");
      exec("C:/terminal64.exe", (error, stdout, stderr) => {
        if (error) {
          console.log(`error: ${error.message}`);
          return;
        }
        if (stderr) {
          console.log(`stderr: ${stderr}`);
          return;
        }
        console.log(`stdout: ${stdout}`);
      });
      res.status(200).send({ message: "App Opened Successfully!" });
    } catch (e) {
      console.log(e);
      res.errorResponse();
    }
  }
}

module.exports = AuthController;
