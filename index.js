//Setting up imports, links and requirements
const { prompt } = require("inquirer");
const db = require("./db");
// require("console.table");

//Setting up prompts using Inquirer 
function mainMenuQuestions(){
    prompt([
     {
        type: 'list',
        name: 'mainMenuSelection',
        message: 'Please make a selection',
        choices: [
          {
            name: 'View all departments',
            value: 'totalDepartmentList'
          },  
          {
            name: 'View all roles',
            value: 'totalRolesList'
          }, 
          {
            name: 'View all employees',
            value: 'totalEmployeesList'
          }, 
          {
            name: 'Add a department',
            value: 'addDepartment'
          }, 
          {
            name: 'Add a role',
            value: 'addRole'
          },
          {
            name: 'Add an employee',
            value: 'addEmployee'
          },
          {
            name: 'Update employee role',
            value: 'updateEmployee'
          },
        ]
     }
     //now we take the user's choice and run a switch case statement to give them different options based on what they selected

    ]).then(res =>{
        let choice = res.mainMenuSelection; 
        console.log(res.mainMenuSelection)
        switch (choice){
            case "totalDepartmentList":
                //running the appropriate function for each case
                showDepartments(); 
                //return
                break; 
            case "totalRolesList":
                displayRoles(); 
                break; 
            case "totalEmployeesList":
                displayEmployees(); 
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
    }
 )
}

//Creating each function called above

//Create a formatted table showing department names and department ids
function showDepartments() {
    db.displayDepartments()
    .then(([rows]) => {
      let departments = rows;
      console.log("\n");
      console.table(departments);
    })
    .then(() => mainMenuQuestions());
    // sqlConnect.query(result, (err, res) => {
    //     console.table(res);
    //     mainMenuQuestions();
    //   });
}

function displayRoles(){
    // const result = 'SELECT * FROM role'
    // sqlConnect.query(result, (err, res) =>{
    //     console.table(res); 
    //     mainMenuQuestions; 
    // })
}

function displayEmployees(){
    // const result = 'SELECT * FROM employees'
    // sqlConnect.query(result, (err, res) =>{
    //     console.table(res); 
    //     mainMenuQuestions; 
    // })
}

function createDepartment(){
    prompt([
        {
        name: "name", 
        message: "Enter department name"
        }
    ])
    .then(res => {
        let name = res; 
        db.createDepartment(name)
            .then(() => console.log ("The department has been added."))
            .then(() => mainMenuQuestions())
    })
}

function createRole(){
    prompt([
        {
            name: "role-job-title", 
            message: "Enter the job title for this role"
        },
        {
            name:"role-salary",
            message: "Enter the salary for this role"
        },
        {
            name: "role-department", 
            message: "Enter the department for the role"
        },
    ])
    .then(res => {
        let newRole = res; 
        db.createDepartment(newRole)
            .then(() => console.log ("The role has been added."))
            .then(() => mainMenuQuestions())
    })
}

function createEmployee(){
    prompt([
        {
            name: "first-name", 
            message: "Enter the employee's first name"
        },
        {
            name: "last-name", 
            message: "Enter the employee's last name"
        },
        {
            name:"employee-role",
            message: "Enter the employee's role"
        },
        {
            name: "employee-manager", 
            message: "Enter the employee's manager"
        },
    ])
    .then(res => {
        let newEmployee = res; 
        db.createDepartment(newEmployee)
            .then(() => console.log ("The employee has been added."))
            .then(() => mainMenuQuestions())
    })
}

function modifyEmployee(){
//how do i do this? 
}

// // Display main menu questions
function init() {
    mainMenuQuestions();
  }
  
  //calling the function
  init();