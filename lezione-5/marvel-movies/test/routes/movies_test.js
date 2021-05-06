const chai = require("chai");
const { expect, assert } = chai;
const request = require("supertest");
const sinon = require("sinon");

const app = require("../../app");

const Db = require("../../dao/Db");

describe("/movies", function () {
  describe("GET", function () {
    it("should exists", function (done) {
      request(app)
        .get("/movies")
        .expect("Content-Type", /application\/json/)
        .expect(200, done);
    });

    it("should return a list of movies", function (done) {
      sinon.stub(Db.prototype, "getMovies").returns(["movie1", "movie2"]);

      request(app)
        .get("/movies")
        .then(response => {
          assert.deepEqual(response.body, ["movie1", "movie2"]);
          done();
        })
        .catch(e => {
          console.error(e);
          done();
        });
    });
  });
});
