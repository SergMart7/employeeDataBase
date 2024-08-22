// SETS OUR DEPENDENCIES

const inquirer = require('inquirer');
const { getDepartments, addDepartment } = require('./lib/department');
const { getRoles, addRole } = require('./lib/role');
const { getEmployees, addEmployee, updateEmployeeRole } = require('./lib/employee');

// OUR MAIN MENU FOR OUR APPLICATION

const mainMenu = async () => {
    const { action } = await inquirer.prompt([
        {
            type: 'list',
            name: 'action',
            message: 'What would you like to do?',
            choices: [
                'View all departments',
                'View all roles',
                'View all employees',
                'Add a department',
                'Add a role',
                'Add an employee',
                'Update an employee role',
                'Exit',
            ],
        },
    ]);

    //  POSSIBLE OUTCOMES LISTED BELOW

    switch (action) {

        //  VIEWS ALL DEPARTMENTS

        case 'View all departments':
            const departments = await getDepartments();
            console.table(departments);
            break;

        //  VIEWS ALL ROLES

        case 'View all roles':
            const roles = await getRoles();
            console.table(roles);
            break;

        // VIEWS ALL EMPLOYEES

        case 'View all employees':
            const employees = await getEmployees();
            console.table(employees);
            break;

        // ADDS A NEW DEPARTMENT TO THE DATABASE

        case 'Add a department':
            const { departmentName } = await inquirer.prompt([
                {
                    type: 'input',
                    name: 'departmentName',
                    message: 'Enter the name of the department:',
                },
            ]);

            await addDepartment(departmentName);
            console.log(`Added ${departmentName} to the database`);
            break;

        // ADDS A NEW ROLE TO THE DATABASE

        case 'Add a role':
            const { roleName, roleSalary, roleDepartment } = await inquirer.prompt([
                {
                    type: 'input',
                    name: 'roleName',
                    message: 'Enter the name of the role:',
                },
                {
                    type: 'input',
                    name: 'roleSalary',
                    message: 'Enter the salary for the role:',
                },
                {
                    type: 'input',
                    name: 'roleDepartment',
                    message: 'Enter the department ID for the role:',
                },
            ]);

            await addRole(roleName, roleSalary, roleDepartment);
            console.log(`Added ${roleName} to the database`);
            break;

        // ADDS A NEW EMPLOYEE TO THE DATABASE

        case 'Add an employee':
            const { firstName, lastName, employeeRole, employeeManager } = await inquirer.prompt([
                {
                    type: 'input',
                    name: 'firstName',
                    message: 'Enter the first name of the employee:',
                },
                {
                    type: 'input',
                    name: 'lastName',
                    message: 'Enter the last name of the employee:',
                },
                {
                    type: 'input',
                    name: 'employeeRole',
                    message: 'Enter the role ID for the employee:',
                },
                {
                    type: 'input',
                    name: 'employeeManager',
                    message: 'Enter the manager ID for the employee (leave blank if none):',
                    default: null,
                },
            ]);

            await addEmployee(firstName, lastName, employeeRole, employeeManager);
            console.log(`Added ${firstName} ${lastName} to the database`);
            break;

        // UPDATES THE EMPLOYEE'S ROLE IN THE DATABASE

        case 'Update an employee role':
            const { employeeId, newRoleId } = await inquirer.prompt([
                {
                    type: 'input',
                    name: 'employeeId',
                    message: 'Enter the ID of the employee you want to update:',
                },
                {
                    type: 'input',
                    name: 'newRoleId',
                    message: 'Enter the new role ID for the employee:',
                },
            ]);

            await updateEmployeeRole(employeeId, newRoleId);
            console.log(`Updated employee's role in the database`);
            break;

        //  CANCELS THE APPLICATION
        
        case 'Exit':
            console.log('Exiting the application');
            process.exit();
    }

    // Re-display the main menu after an action is completed
    await mainMenu();
};

// Start the application
mainMenu();
