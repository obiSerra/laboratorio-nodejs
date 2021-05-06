
// npm install --save-dev supertest (https://www.npmjs.com/package/supertest)
// supertest e' una libreria che permette di testare in maniera semplice le API
const request = require("supertest");

// Import app
const app = require('../../app')

describe("GET /", function () {
  it("responds with json", function (done) {
    // in questo modo e' supertest che si occupa di avviare il mio server ed effettuare la chiamata di test all'endpoint
    request(app).get("/").set("Accept", "application/json").expect(200, done);
  });
});
