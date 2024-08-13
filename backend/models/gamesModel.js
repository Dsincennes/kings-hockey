const db = require("../config/db");

class Games {
  static async findAll() {
    const [rows] = await db.query("SELECT * FROM games");
    return rows;
  }

  static async findById(id) {
    const [rows] = await db.query("SELECT * FROM games WHERE id = ?", [id]);
    return rows[0];
  }
}

module.exports = Games;
