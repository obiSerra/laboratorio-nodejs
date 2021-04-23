var express = require("express");
var router = express.Router();

const jwt = require("jsonwebtoken");

const { createHmac } = require("crypto");

require("dotenv").config();

/* GET home page. */
router.get("/", function (req, res) {
  res.send({ hello: "world" });
});

const superServerSecret = process.env.SUPER_SECRET;

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

// pippo
const userData = [
  { email: "roberto.serra@unito.it", password: "6ad6a41c89975faeb22517b70f87818021bfff7dcbfc9d56bbf2be3907b12550" },
];

router.put("/login", async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    res.statusCode = 400;
    res.json({ error: "wrong data" });
    return;
  }

  const hmac = createHmac("sha256", superServerSecret);
  const digest = hmac.update(password).digest("hex");
  const user = userData.filter(u => u.email === email && u.password === digest)[0];

  if (!user) {
    res.statusCode = 400;
    res.json({ error: "no user found" });
    return;
  }

  const token = await generateAccessToken(email);
  res.header("authentication-token", token);
  res.json({ message: `welcome ${email}` });
});

router.get("/new-password/:pwd", (req, res) => {
  const { pwd } = req.params;

  const hmac = createHmac("sha256", superServerSecret);

  res.json({ hash: hmac.update(pwd).digest("hex") });
});

router.post("/", function (req, res) {
  const { body } = req;
  res.send({ "request-was": body });
});

module.exports = router;
