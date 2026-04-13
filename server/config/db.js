const mysql = require('mysql2/promise');

let poolConfig;

if (process.env.MYSQL_URL) {
  poolConfig = { uri: process.env.MYSQL_URL };
} else {
  poolConfig = {
    host: process.env.DB_HOST || 'localhost',
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD || '',
    database: process.env.DB_NAME || 'todo_db',
    port: process.env.DB_PORT || 3306,
  };
}

const pool = mysql.createPool({
  ...poolConfig,
  waitForConnections: true,
  connectionLimit: 10,
});

module.exports = pool;
