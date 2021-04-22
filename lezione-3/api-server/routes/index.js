var express = require("express");
var router = express.Router();

const { createHmac } = require("crypto");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const db = require("../db");
const superServerSecret = process.env.SUPER_SECRET;

//password: 123456
const userList = {
  "roberto.serra@unito.it": "8eb07ecbf3e61af558add8c0534ada0ab29e4165274176f03276eceafd2dffbc",
};

/* GET home page. */
router.get("/", function (req, res, next) {
  res.json({ message: `hello ${req.query.name || "Nessuno"}` });
});

router.post("/", (req, res) => {
  console.log(req.body);
  res.json({ message: `nice post ${req.body.name}` });
});

// Login API
// Puo' essere sincrono o asincrono
function generateAccessToken(username) {
  return new Promise((resolve, rejects) => {
    jwt.sign(username, process.env.TOKEN_SECRET, (error, token) => {
      if (error) {
        rejects(error);
        return;
      }

      resolve(token);
    });
  });
}

router.put("/login", async (req, res) => {
  const { email, password } = req.body;

  if (email && password) {
    const hmac = createHmac("sha256", superServerSecret);
    console.log(db);
    const user = await db.findUserByEmail(email);
    console.log(user);
    if (user) {
      const digest = hmac.update(password).digest("hex");
      if (user.password && user.password === digest) {
        const token = await generateAccessToken(email);
        res.header("JWT-TOKEN", token);
        res.send({ message: `welcome ${email}` });
        return;
      }
    }
  }

  res.statusCode = 400;
  res.send({ error: "wrong data" });
  return;
});

module.exports = router;
