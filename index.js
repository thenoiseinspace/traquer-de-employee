//Setting up imports, links and requirements
// const { reduce } = require("benchmark");
const { prompt } = require("inquirer");
const { title } = require("process");
const db = require("./db");


//Setting up prompts using Inquirer
function mainMenuQuestions() {
  prompt([
    {
      type: "list",
      name: "mainMenuSelection",
      message: "Please make a selection",
      choices: [
        {
          name: "View all departments",
          value: "totalDepartmentList",
        },
        {
          name: "View all roles",
          value: "totalRolesList",
        },
        {
          name: "View all employees",
          value: "totalEmployeesList",
        },
        {
          name: "Add a department",
          value: "addDepartment",
        },
        {
          name: "Add a role",
          value: "addRole",
        },
        {
          name: "Add an employee",
          value: "addEmployee",
        },
        {
          name: "Update employee role",
          value: "updateEmployee",
        },
      ],
    },
    //now we take the user's choice and run a switch case statement to give them different options based on what they selected
  ]).then((res) => {
    let choice = res.mainMenuSelection;
    console.log(res.mainMenuSelection);
    switch (choice) {
      case "totalDepartmentList":
        //running the appropriate function for each case
        showDepartments();
        //return
        break;
      case "totalRolesList":
        showRoles();
        break;
      case "totalEmployeesList":
        showEmployees();
        break;
      case "addDepartment":
        createDepartment();
        break;
      case "addRole":
        createRole();
        break;
      case "addEmployee":
        createEmployee();
        break;
      case "updateEmployee":
        modifyEmployee();
        break;
    }
  });
}

//Creating each function called above

/////////////////////////////
//All the "display" options//
/////////////////////////////

//Create a formatted table showing department names and department ids
function showDepartments() {
  db.displayDepartments()
    .then(([rows]) => {
      let departments = rows;
      console.log("\n");
      console.table(departments);
    })
    .then(() => mainMenuQuestions());
}

function showRoles() {
  db.displayRoles()
    .then(([rows]) => {
      let roles = rows;
      console.log("\n");
      console.table(roles);
    })
    .then(() => mainMenuQuestions());
}

function showEmployees() {
  db.displayEmployees()
    .then(([rows]) => {
      let roles = rows;
      console.log("\n");
      console.table(roles);
    })
    .then(() => mainMenuQuestions());
}

////////////////////////////
//All the "create" options//
////////////////////////////

function createDepartment() {
  // db.generateDepartment()
  prompt([
    {
      name: "id",
      message: "Enter department id",
    },
    {
      name: "name",
      message: "Enter department name",
    },
  ]).then((res) => {
    let newDepartment = {
      id: res.id,
      name: res.name,
    };
    console.log(newDepartment);
    db.generateDepartment(newDepartment)
      .then(() => console.log("The department has been added."))
      .then(() => mainMenuQuestions());
  });
}

function createRole() {
  prompt([
    {
      name: "roleId",
      message:
        "Enter the ID for this role (please include at least three digits)",
    },
    {
      name: "roleJobTitle",
      message: "Enter the job title for this role",
    },
    {
      name: "roleSalary",
      message: "Enter the salary for this role",
    },
    {
      name: "roleDepartment",
      message: "Enter the department ID for the role",
    },
  ]).then((res) => {
    let newRole = {
      id: res.roleId,
      job_title: res.roleJobTitle,
      salary: res.roleSalary,
      department_id: res.roleDepartment,
    };
    console.log(newRole);
    db.generateRole(newRole)
      .then(() => console.log("The role has been added."))
      .then(() => mainMenuQuestions());
  });
}

function createEmployee() {
  prompt([
    {
        name: "id",
        message: "Enter the employee's id",
    },
    {
      name: "firstName",
      message: "Enter the employee's first name",
    },
    {
      name: "lastName",
      message: "Enter the employee's last name",
    },
    {
      name: "employeeRole",
      message: "Enter the ID of the employee's role",
    },
    {
      name: "employeeManager",
      message: "Enter the ID of the employee's manager",
    },
]).then((res) => {
    let newEmployee = {
      id: res.id,
      first_name: res.firstName,
      last_name: res.lastName,
      role_id: res.employeeRole,
      manager_id: res.employeeManager, 
    };
    console.log(newEmployee);
    db.generateEmployee(newEmployee)
      .then(() => console.log("The employee has been added."))
      .then(() => mainMenuQuestions());
  });
}

function modifyEmployee() {
  //how do i do this?

  prompt([
    {
      name: "id",
      message: "Please enter the ID number of the employee you'd like to update.",
    },
    {
      name: "role",
      message: "Please enter the new role you would like to assign to the employee.",
      },
  ]).then((res) => {
      let employeeInfo = {
          id: res.id,
          role: res.role, 
      };
      console.log(employeeInfo.id); 
    //   console.log(employeeId); 
    db.updateEmployee(employeeInfo)
    .then(([rows]) => {
        let roles = rows;
        console.log("\n");
        console.table(roles);
      })
    .then(() => console.log("The employee has been updated."))
    .then(() => mainMenuQuestions());
  });
}

// // Display main menu questions
function init() {
  mainMenuQuestions();
}

//calling the function
init();
