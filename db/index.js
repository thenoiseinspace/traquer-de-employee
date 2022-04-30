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
  //
  generateDepartment(newDepartment){
    return this.connection.promise().query(
     "INSERT INTO department SET  ? ;", [newDepartment], (err, response) => {
       if (err) {
         console.log(err)
       }
     }
    );
  }

  generateRole(newRole){
    return this.connection.promise().query(
      "INSERT INTO role SET ? ;", [newRole], (err, response) => {
        if (err) {
          console.log(err)
        }
      }
    );
  }

  generateEmployee(newEmployee){
    return this.connection.promise().query(
      "INSERT INTO employee SET ? ;", [newEmployee], (err, response) => {
        if (err) {
          console.log(err)
        }
      }
    );
  }


  ///////////////////////
  //The "modify" option//
  ///////////////////////

  updateEmployee(employeeInfo){
    console.log(employeeInfo)
      return this.connection.promise().query(
        // `SELECT * FROM employee WHERE id = ${employeeInfo.id};`
        `UPDATE employee SET employee.role_id = ${employeeInfo.role} WHERE id = ${employeeInfo.id}`
      );
  }

}

module.exports = new DB(connection);
