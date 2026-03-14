const { Pool } = require('pg');
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  port: 5432,
  password: 'wepa280106',
  database: 'node_posgres'
});

module.exports = pool;