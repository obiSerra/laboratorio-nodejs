var assert = require("assert");

const sinon = require("sinon");
const { expect } = require("chai");

const mysql = require("mysql2");

const DB = require("../../helpers/db");

describe("DB", function () {
  describe("constructor", function () {
    it("should create a mysql connection", function () {
      const mysql_spy = sinon.stub(mysql, "createConnection").callsFake(() => {
        return {};
      });
      const db = new DB();
      sinon.assert.calledOnce(mysql_spy);
      mysql_spy.restore();
    });

    it("should create a mysql connection with expected params", function () {
      const process_stub = sinon.stub(process, "env").get(() => {
        return {
          MYSQL_HOST: "host",
          MYSQL_USER: "user",
          MYSQL_PASSWORD: "password",
          MYSQL_DATABASE: "database",
        };
      });

      const mysql_spy = sinon.stub(mysql, "createConnection").callsFake(() => {
        return {};
      });
      const db = new DB();
      sinon.assert.calledWith(mysql_spy, {
        host: "host",
        user: "user",
        password: "password",
        database: "database",
      });
      mysql_spy.restore();
    });
  });
});
