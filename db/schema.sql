/*setting up the database and tables*/

DROP DATABASE IF EXISTS employees;
CREATE DATABASE employees; 
USE employees;

CREATE TABLE department (
    id INT NOT NULL PRIMARY KEY, 
    name VARCHAR(70) NOT NULL
); 

CREATE TABLE role (
    id INT NOT NULL PRIMARY KEY,
    job_title VARCHAR(70) NOT NULL,
    salary DECIMAL NOT NULL,
    department_id INT NOT NULL
); 

/*The manager line has to accept null here because the managers don't have managers themselves*/
CREATE TABLE employee (
    id INT NOT NULL PRIMARY KEY,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(45) NOT NULL,
    role_id INT NOT NULL,
    manager_id INT 
); 