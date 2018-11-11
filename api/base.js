require("dotenv").config();
//const logger = require("../logger.js");

const mysql = require("mysql2/promise");

const pool_db = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});


class query_base {

  async select_creature_all() {
    try {

      console.log('DB name:', process.env.DB_NAME);

      let [rows, fields] = await pool_db.query(
        "SELECT * FROM `creature`"
      );

      return rows;
    } catch (err) {
      throw err;
    }
  }

  async replace_creature_template(array) {
    try {
      let [rows, fields] = await pool_db.query(
        "REPLACE INTO `creature_template` SET ?",
        array
      );

      return rows;
    } catch (err) {
      throw err;
    }
  }

  async select_creature_by_map(map) {
    try {
      let [rows, fields] = await pool_db.query(
        "SELECT * FROM `creature` where map = ?",
        map
      );

      return rows;
    } catch (err) {
      throw err;
    }
  }


}

module.exports = new query_base();