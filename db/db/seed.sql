/*setting up data with which to populate the tables

/*this links the database created in schema*/
use employees; 

INSERT INTO department
    (id, name)
VALUES
    (1, "Transfiguration"),
    (2, "Charms"),
    (3, "Potions"),
    (4, "Care of Magical Creatures"), 
    (5, "Divination"),
    (6, "Administration");

INSERT INTO role
    (title, id, department, salary)
VALUES
    ("Professor", 1, "Transfiguration", 70000),
    ("Headmaster", 2, "Administration", 100000),
    ("Custodian", 3, "Potions", 25000),
    ("Gamekeeper", 4, "Care of Magical Creatures", 45000);

INSERT INTO employees
    (id, first_name, last_name, job_title, department, salary, manager)
VALUES
    (1, "Minerva", "McGonagall", "Professor", "Transfiguration", 70000, "Dumbledore"), 
    (2, "Gilderoy", "Lockhart", "Custodian", "Potions", 25000, "Minerva"),
    (3, "Albus", "Dumbledore", "Headmaster", "Administration", 100000, "Minerva"),

