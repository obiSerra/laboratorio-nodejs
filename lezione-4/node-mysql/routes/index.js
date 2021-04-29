const express = require("express");
const router = express.Router();

const DB = require("../helpers/db");
const db = new DB();
/* GET home page. */
router.get("/", async (req, res) => {
  

  const query_result = await db.listMovies("marvel_movies");

  res.json(query_result);
});

router.get("/year/:year", async (req, res) => {
  const { params } = req;
  const { year } = params;
  
  const query_result = await db.listByYear("marvel_movies", year);

  res.json(query_result);
});

module.exports = router;
