-- CREATES THE DATABASE

CREATE DATABASE employee_db;

--  CONNECTS TO THE DATABASE

\c employee_db;

-- CREATES THE DEPARTMENT TABLE

CREATE TABLE department (
    id SERIAL PRIMARY KEY,
    name VARCHAR(30) UNIQUE NOT NULL
);

-- CREATES THE ROLE TABLE

CREATE TABLE role (
    id SERIAL PRIMARY KEY,
    title VARCHAR(30) UNIQUE NOT NULL,
    salary DECIMAL(10, 2) NOT NULL,
    department_id INTEGER NOT NULL,
    FOREIGN KEY (departmend_id) REFERENCES department(id)
);

-- CREATES OUR EMPLOYEES TABLE

CREATE TABLE employee (
    id SERIAL PRIMARY KEY,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    role_id INTEGER NOT NULL,
    manager_id INTEGER,
    FOREIGN KEY (role_id) REFERENCES role(id),
    FOREIGN KEY (manager_id) REFERENCES employee(id)
); 