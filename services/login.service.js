const db = require("../config/db");

async function login({ userid, password }) {
  const user = db.query(`SELECT * FROM USER WHERE userid =${userid}`);
}

module.exports = { login };
