var express = require("express");
var router = express.Router();

const jwt = require("jsonwebtoken");
const { route } = require("../../hello-world-exp/routes/users");

const db = require("../db")
require("dotenv").config();

function authenticateToken(req, res, next) {
  const token = req.headers["token"];

  if (token == null) return res.sendStatus(401);

  jwt.verify(token, process.env.TOKEN_SECRET, (err, user) => {
  
    if (err) return res.sendStatus(403);
    req.user = user;

    next();
  });
}

router.use(authenticateToken);

/* GET users listing. */
router.get("/", async function (req, res, next) {
  const users = await db.getAllUsers()
  res.json(users);
  
});

module.exports = router;
