//Setting up imports, links and requirements

const { prompt, createPromptModule } = require("inquirer");
const db = require("./db/db");
require("console.table");

// init();

// // Display logo text, load main prompts
// function init() {
//   const logoText = logo({ name: "Employee Manager" }).render();

//   console.log(logoText);

//   loadMainPrompts();
// }

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
            name: 'Add a departments',
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
     //now we take the user's choice and run a switch case statement to give them differnet options based on what they selected

    ]).then(res =>{
        let choice = res.choice; 
        switch (choice){
            case "totalDepartmentlist":
                //running the appropriate function for each case
                displayDepartments(); 
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