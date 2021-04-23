var express = require("express");
const { route } = require(".");
var router = express.Router();

const users = { a: "roberto", b: "serra", c: "obi" };

function simpleAuth(req, res, next) {
  const { token } = req.query;

  if (token !== "123") {
    res.send("ERROR!");
    return;
  }

  next();
}

router.use(simpleAuth)

/* GET users listing. */
router.get("/id/:id", function (req, res) {
  const { id } = req.params;

  if (!id) {
    res.send("NO ID");
    return;
  }

  const user = users[id] || null;

  if (!user) {
    res.send("No user found");
    return;
  }

  res.send(user);
});

router.get("/", function (req, res, next) {
  res.render("users", { userList: Object.values(users) });
});

module.exports = router;
