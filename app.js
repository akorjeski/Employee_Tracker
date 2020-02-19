var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
    host: "localhost",

    // Your port; if not 3306
    port: 3306,

    // Your username
    user: "root",

    // Your password
    password: "rootroot",
    database: "employee_DB"
});

connection.connect(function (err) {
    if (err) throw err;
    runSearch();
});

function runSearch() {
    inquirer
        .prompt({
            name: "action",
            type: "list",
            message: "What would you like to do?",
            choices: [
                "Add Department",
                "Add Role",
                "Add Employee",
                "View all Departments",
                "View all Roles",
                "View all Employees",
                "Update a Role",
                "exit"
            ]
        })
        .then(function (answer) {
            switch (answer.action) {
                case "Add Department":
                    addDepartment();
                    break;

                case "Add Role":
                    addRole();
                    break;

                case "Add Employee":
                    addEmployee();
                    break;

                case "View all Departments":
                    departmentSearch();
                    break;

                case "View all Roles":
                    roleSearch();
                    break;

                case "View all Employees":
                    employeeSearch();
                    break;

                case "Update a Role":
                    ///write function
                    break;
                case "exit":
                    connection.end();
                    break;
            }
        });
}
///Re-write all the functions below here. We call them up above
function departmentSearch() {

    var query = "SELECT * from department";
    connection.query(query, function (err, res) {
        if (err) throw err;

        console.table(res);

        runSearch();
    });
};
function roleSearch() {

    var query = "SELECT * from role";
    connection.query(query, function (err, res) {
        if (err) throw err;

        console.table(res);

        runSearch();
    });
};

function employeeSearch() {

    var query = "SELECT * from employee";
    connection.query(query, function (err, res) {
        if (err) throw err;

        console.table(res);

        runSearch();
    });
};



function addDepartment() {
    inquirer
        .prompt({
            name: "department",
            type: "input",
            message: "What department would you like to add?"
        })
        .then(function (answer) {
            console.log(answer.department);
            connection.query("INSERT INTO department SET ?", 
            {
                name: answer.department,
            },
            function (err, res) {
                if (err) throw err;
                runSearch();
            });
        });
}

function addRole() {
    var questions = [
        {
            message: "What's your role called?",
            type: "input",
            name: "role"
        },{
            message: "What's the salary for this role?",
            type: "input",
            name: "salary"
        },
        
        ];
    
    inquirer
        .prompt(questions)
        .then(function (answer) {
            console.log(answer.role);
            console.log(answer.salary);
            connection.query("INSERT INTO role SET ?", 
            {
                title: answer.role,
                salary: answer.salary
            },
            function (err, res) {
                if (err) throw err;
                runSearch();
            });
        });
}

function addEmployee() {
    var questions = [
        {
            message: "What's your first name?",
            type: "input",
            name: "first_name"
        },
        {
            message: "What's the last name?",
            type: "input",
            name: "last_name"
        },
        {
            message: "What's the role_id? (1 for manager 2 for analyst)",
            type: "input",
            name: "roleID"
        },
        {
            message: "Do you have a manager? Write 1 for yes, 0 for no",
            type: "input",
            name: "managerID"
        },
        
        ];
    
    inquirer
        .prompt(questions)
        .then(function (answer) {
            connection.query("INSERT INTO employee SET ?", 
            {
                first_name: answer.first_name,
                last_name: answer.last_name,
                manager_id: answer.managerID,
                role_id: answer.roleID,
                
            },
            function (err, res) {
                if (err) throw err;
                runSearch();
            });
        });
}