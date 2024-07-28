-- INSERTS DATA INTO DEPARTMENT TABLE

INSERT INTO department (name) VALUES
('Development'),
('Sales'),
('Finance'),
('HR');

-- INSERTS DATA INTO OUR ROLE TABLE

INSERT INTO role (title, salary, department_id) VALUES
('Software Developer', 125000, 1),
('Sales Representative', 75000, 2),
('Finance Manager', 120000, 3),
('HR Manager', 65000, 4);

-- INSTERTS DATA INTO OUR EMPLOYEE TABLE 

INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES
('Sergio', 'Martinez', 1, NULL),
('Denise', 'Smith', 1, NULL),
('Kyle', 'Gostkowsi', 1, NULL),
('Robert', 'Thomas', 1, NULL);