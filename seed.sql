DROP DATABASE IF EXISTS employee_DB;

CREATE DATABASE employee_DB;

USE employee_DB;

CREATE TABLE department (
  department_id INT NOT NULL AUTO_INCREMENT,
  name VARCHAR(30) NOT NULL, 
  PRIMARY KEY (department_id)
);

CREATE TABLE role (
  role_id INT NOT NULL AUTO_INCREMENT,
  title VARCHAR(30) NOT NULL,
  salary DECIMAL NOT NULL,
  department_id INT,
  PRIMARY KEY (role_id),
  FOREIGN KEY (department_id) REFERENCES department(department_id)
);

CREATE TABLE employee (
  employee_id INT NOT NULL AUTO_INCREMENT,
  first_name VARCHAR(30) NOT NULL,
  last_name VARCHAR (30) NOT NULL,
  manager_id INT NULL,
  role_id INT,
  PRIMARY KEY (employee_id),
  FOREIGN KEY (role_id) REFERENCES role (role_id)
);


INSERT INTO department (name)
VALUES ("Information Technology"),("Marketing");

INSERT INTO role (title, salary)
VALUES ("Manager", 5000), ("Analyst",2500);
-- ///Pass null if no manager
INSERT INTO employee (first_name, last_name, manager_id, role_id)
VALUES ("Alex", "Korjeski", 01, 2),("Arun", "Singh", 01, 2 ), ("Amanda", "Winkler", 01, 2), ("Jobie", "Daniel", 0, 1);


