/*setting up the database and tables*/

DROP DATABASE IF EXISTS employees;
CREATE DATABASE employees; 
USE employees;

CREATE TABLE department (
    id INT NOT NULL, 
    name VARCHAR(70) NOT NULL,
); 

CREATE TABLE role (
    job-title VARCHAR(70) NOT NULL,
    id INT NOT NULL,
    department VARCHAR(70) NOT NULL,
    salary INT NOT NULL,
)

CREATE TABLE employees(
    id INT NOT NULL,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR (45) NOT NULL,
    job_title VARCHAR (70) NOT NULL,
    department VARCHAR (50) NOT NULL,
    salary INT NOT NULL,
    manager VARCHAR (70) NOT NULL, 
)

