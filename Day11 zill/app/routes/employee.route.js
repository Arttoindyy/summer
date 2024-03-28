module.exports = (app) => {
    const employee = require('../controllers/employee.controller');

    const router = require('express').Router();

    //Retrieve all employee with setting
    router.get("/", employee.findAll);
    //Insert data to employee with setting
    router.post("/create-employee-setting", employee.create);
    //Insert data to employee with setting
    router.post("/create-employee-project", employee.addEmployeeToProject);
    //Add employee to projects
    router.get("/edit-employee/:id", employee.findOne);
    //update an employee with id 
    router.put("/update-employee/:id", employee.update);
    //Delete an employee with id
    router.delete("/delete-employee/:id", employee.delete);

    app.use("/employees", router);
};