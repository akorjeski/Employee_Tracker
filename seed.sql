DROP DATABASE IF EXISTS employee_DB;

CREATE DATABASE employee_DB;

USE employee_DB;

CREATE TABLE department (
  id INT NOT NULL AUTO_INCREMENT,
  name VARCHAR(30) NOT NULL, 
  PRIMARY KEY (id)
);

CREATE TABLE role (
  id INT NOT NULL AUTO_INCREMENT,
  title VARCHAR(30) NOT NULL,
  salary DECIMAL NOT NULL,
  department_id INT NOT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE employee (
  id INT NOT NULL AUTO_INCREMENT,
  first_name VARCHAR(30) NOT NULL,
  last_name VARCHAR (30) NOT NULL,
  role_id INT NOT NULL,
  manager_id INT NULL,
  PRIMARY KEY (id)
);


INSERT INTO department (name)
VALUES ("Information Technology"),("Marketing");

INSERT INTO role (title, salary, department_id)
VALUES ("Manager", 5000, 01), ("Analyst",2500, 01);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Alex", "Korjeski", 02, 001),("Arun", "Singh", 02, 001), ("Amanda", "Winkler", 02, 001), ("Jobie", "Daniel", 01);


-- Below are the queries that the assignment wants us to meet
-- Add departments
INSERT INTO department (name)
VALUES ?;
-- Add roles
INSERT INTO role (title, salary, department_id)
VALUES ?;
-- Add employees with a manager
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ?;
-- View all departments
SELECT * FROM department
-- View all roles
SELECT * FROM role
-- View all employee
SELECT * FROM employee
-- Update employee roles
UPDATE employee
SET role_id = ?
WHERE first_name = ? & last_name = ?;