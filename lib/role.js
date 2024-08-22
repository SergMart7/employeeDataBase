const pool = require('../config/connection');

const getRoles = async () => {
  const res = await pool.query('SELECT * FROM role');
  return res.rows;
};

const addRole = async (title, salary, department_id) => {
  await pool.query('INSERT INTO role (title, salary, department_id) VALUES ($1, $2, $3)', [title, salary, department_id]);
};

module.exports = { getRoles, addRole };
