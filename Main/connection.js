const { Client } = require('pg');

const client = new Client({
    user: 'Postgres',
    host: 'localhost',
    database: 'employee_db',
    password: 'Un1ted_K1ngd0m',
    port: 5432,
});

client.connect();

module.exports = client;