var mysql = require("mysql2");

require("dotenv").config();

class DB {
  constructor() {
    this.connection = mysql.createConnection({
      host: process.env.MYSQL_HOST,
      user: process.env.MYSQL_USER,
      password: process.env.MYSQL_PASSWORD,
      database: process.env.MYSQL_DATABASE,
    });
  }

  async listMovies(tableName) {
    return new Promise((resolve, reject) => {
      this.connection.query(`SELECT * from ${tableName}`, (error, results) => {
        if (error) reject(error);
        resolve(results);
      });
    });
  }

  async listByYear(tableName, year) {
    return new Promise((resolve, reject) => {
      this.connection.execute(
        `SELECT * from ${tableName} WHERE us_release_date LIKE ?`,
        [`${year}%`],
        (error, results) => {
          if (error) reject(error);
          resolve(results);
        }
      );
    });
  }

  async listByTitle(tableName, title) {
    return new Promise((resolve, reject) => {
      this.connection.execute(
        `SELECT * from ${tableName} WHERE title LIKE ?`,
        [`%${title}%`],
        (error, results) => {
          if (error) reject(error);
          resolve(results);
        }
      );
    })
  }
}

module.exports = DB;
