const { Pool } = require("pg");

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "smartpool",
  password: "Rmikn@1117",
  port: 5432,
});

module.exports = pool;