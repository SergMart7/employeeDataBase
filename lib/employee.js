const pool = require('../config/connection');

const getEmployees = async () => {
  const res = await pool.query('SELECT * FROM employee');
  return res.rows;
};

const addEmployee = async (first_name, last_name, role_id, manager_id) => {
  await pool.query('INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ($1, $2, $3, $4)', [first_name, last_name, role_id, manager_id]);
};

const updateEmployeeRole = async (employee_id, role_id) => {
  await pool.query('UPDATE employee SET role_id = $1 WHERE id = $2', [role_id, employee_id]);
};

module.exports = { getEmployees, addEmployee, updateEmployeeRole };
