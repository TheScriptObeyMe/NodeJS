require("dotenv").config();
//const logger = require("../logger.js");

const mysql = require("mysql2/promise");

const pool_db = mysql.createPool({
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASS,
  database: process.env.MYSQL_DB_world
});

const db_build = process.env.DB_BUILD;

class query_base {

  async select_creature_all() {
    try {
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