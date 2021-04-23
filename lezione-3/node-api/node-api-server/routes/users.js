var express = require("express");
var router = express.Router();

const jwt = require("jsonwebtoken");

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
router.get("/", function (req, res, next) {
  res.send("respond with a resource!!");
});
router.get("/secret", function (req, res, next) {
  res.send("Super secret");
});

module.exports = router;
