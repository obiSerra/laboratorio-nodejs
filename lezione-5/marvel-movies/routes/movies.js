const express = require("express");
const router = express.Router();

const Db = require("../dao/Db");

const db = new Db();

router.get("/", (req, res, next) => {
  const movies = db.getMovies();
  res.json(movies);
});

module.exports = router;
