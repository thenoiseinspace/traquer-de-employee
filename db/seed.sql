/*setting up data with which to populate the tables

/*this links the database created in schema*/
use employees; 

INSERT INTO departments
    (id, name)
VALUES
    (1, "Transfiguration"),
    (2, "Charms"),
    (3, "Potions"),
    (4, "Care of Magical Creatures"), 
    (5, "Divination"),
    (6, "Administration");

INSERT INTO role
    (id, job_title, salary, department_id)
VALUES
    (1, "Professor", 70000, 1),
    (2, "Headmaster", 100000, 6),
    (3, "Custodian", 25000, 3),
    (4, "Gamekeeper", 45000, 4);

INSERT INTO employee
    (id, first_name, last_name, role_id, manager_id)
VALUES
    (1, "Minerva", "McGonagall", 1, 2), 
    (2, "Gilderoy", "Lockhart", 3, 1),
    (3, "Albus", "Dumbledore", 2, null); 
