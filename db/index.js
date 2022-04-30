const connection = require("./connection");

class DB {
  constructor(connection) {
    this.connection = connection;
  }

  /////////////////////////////
  //All the "display" options//
  /////////////////////////////

    // Find all departments
    //Just selecting the two fields from the department table
    displayDepartments() {
      return this.connection.promise().query(
        "SELECT department.id, department.name FROM department;"
      );
    }

  //find all roles and pulling in department name
  //Choose the id (column 1) and job title (column 2) from the role table, and the name (column 3) from the department table, but label the column 3 "department." In the fourth column, pull the salary from the role table. Connect the two tables by linking the department id in the roles table to the id column in the department table. This will output a thing that looks like a new table but is not, and though it is displaying, it is not storing as a table, it is similar to console.log. 
    displayRoles(){
      return this.connection.promise().query(
        "SELECT role.id, role.job_title, department.name AS department, role.salary FROM role LEFT JOIN department on role.department_id = department.id;"
      );
    }


  // Find all employees and pull in info from both other tables
  //Select id (column 1), first name (column 2), and last name (column 3) from the employee table; the title (column 4) from the role table, the name (col. 5) from the department table and labeling column 5 as "department". Column 6 will be the salary from the role table, column 7 is the manager's first and last name together and labeled "manager". Employee table is the left table. Pull the role id from the employee table and join to the id on the role table. 
  displayEmployees() {
    return this.connection.promise().query(
      "SELECT employee.id, employee.first_name, employee.last_name, role.job_title, department.name AS department, role.salary, CONCAT(manager.first_name, ' ', manager.last_name) AS manager FROM employee LEFT JOIN role on employee.role_id = role.id LEFT JOIN department on role.department_id = department.id LEFT JOIN employee manager on manager.id = employee.manager_id;"
    );
  }


  ////////////////////////////
  //All the "create" options//
  ////////////////////////////

  //Pulling this format from activity 7
  generateDepartment(newDepartment){
    // const sqlQuery = `INSERT INTO department (name) VALUES (?);`;
    // DB.query(sqlQuery, [departmentName], (err, response) => {
    //   if (err) {
    //     console.log(err);
    //     return;
    //   } else {
    //     // console.log(`Added ${departmentName} to the database`);
        
    //   }
    // } )
    
    return this.connection.promise().query(
     "INSERT INTO department SET  ? ;", [newDepartment], (err, response) => {
       if (err) {
         console.log(err)
       }
     }
    );
  }

  generateRole(){
    return this.connection.promise().query(
      "INSERT INTO role (id, job_title, salary, department_id) VALUES ();"
    );
  }

  generateEmployee(){
    return this.connection.promise().query(
      "INSERT INTO employee (id, first_name, last_name, role_id, manager_id) VALUES ();"
    );
  }


  ///////////////////////
  //The "modify" option//
  ///////////////////////

  updateEmployee(){
    return this.connection.promise().query(

    );
  }



  // // Find all employees except the given employee id
  // findAllPossibleManagers(employeeId) {
  //   return this.connection.promise().query(
  //     "SELECT id, first_name, last_name FROM employee WHERE id != ?",
  //     employeeId
  //   );
  // }

  // // Create a new employee
  // createEmployee(employee) {
  //   return this.connection.promise().query("INSERT INTO employee SET ?", employee);
  // }

  // // Update the given employee's role
  // updateEmployeeRole(employeeId, roleId) {
  //   return this.connection.promise().query(
  //     "UPDATE employee SET role_id = ? WHERE id = ?",
  //     [roleId, employeeId]
  //   );
  // }

  // // Update the given employee's manager
  // updateEmployeeManager(employeeId, managerId) {
  //   return this.connection.promise().query(
  //     "UPDATE employee SET manager_id = ? WHERE id = ?",
  //     [managerId, employeeId]
  //   );
  // }

  // // Find all roles, join with departments to display the department name
  // //Choose the id (column 1) and job title (column 2) from the role table, and the name (column 3) from the department table, but label the column 3 "department." In the fourth column, pull the salary from the role table. Connect the two tables by linking the department id in the roles table to the id column in the department table. This will output a thing that looks like a new table but is not, and though it is displaying, it is not storing as a table, it is similar to console.log. 
  // // displayRoles() {
  // //   return this.connection.promise().query(
  // //     "SELECT role.id, role.job_title, department.name AS department, role.salary FROM role LEFT JOIN department on role.department_id = department.id;"
  // //   );
  // // }

  

  // // Create a new role
  // createRole(role) {
  //   return this.connection.promise().query("INSERT INTO role SET ?", role);
  // }

  // // Create a new department
  // createDepartment(department) {
  //   return this.connection.promise().query("INSERT INTO department SET ?", department);
  // }

  // // Find all employees in a given department, join with roles to display role titles
  // findAllEmployeesByDepartment(departmentId) {
  //   return this.connection.promise().query(
  //     "SELECT employee.id, employee.first_name, employee.last_name, role.title FROM employee LEFT JOIN role on employee.role_id = role.id LEFT JOIN department department on role.department_id = department.id WHERE department.id = ?;",
  //     departmentId
  //   );
  // }

  // // Find all employees by manager, join with departments and roles to display titles and department names
  // findAllEmployeesByManager(managerId) {
  //   return this.connection.promise().query(
  //     "SELECT employee.id, employee.first_name, employee.last_name, department.name AS department, role.title FROM employee LEFT JOIN role on role.id = employee.role_id LEFT JOIN department ON department.id = role.department_id WHERE manager_id = ?;",
  //     managerId
  //   );
  // }
}

module.exports = new DB(connection);
