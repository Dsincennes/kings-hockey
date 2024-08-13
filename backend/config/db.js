const mysql = require("mysql2");

// Create the MySQL connection pool
const pool = mysql.createPool({
  host: "localhost",
  user: "admin",
  password: "test123",
  database: "test",
});

module.exports = pool.promise(); // Export the pool with promises for async/await
