const Pool = require("pg").Pool;
require("dotenv").config();

const pool = new Pool({
  user: process.env.POSTGRES_USER,
  host: process.env.POSTGRES_HOST,
  password: process.env.POSTGRES_PASSWORD,
  database: process.env.POSTGRES_DATABASE,
  port: process.env.POSTGRES_PORT,
});

const getBooks = (req, res) => {
  pool.query("SELECT * FROM lib_details", (error, result) => {
    if (error) throw error;
    res.status(200).json(result.rows);
  });
};

module.exports = {
  getBooks,
};
