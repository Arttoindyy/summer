const db = require('../models');
const Employee = db.employee;
const Setting = db.setting;
const Company = db.company;
const Project = db.project;
const Employee_project = db.employee_project;

exports.findAll = (req, res) => {
    try {
        Employee.findAll({
            attributes: ["id", "name", "position"],
            include: [
                {
                    model: Setting,
                    attributes: ["theme"],
                },
                {
                    model: Company,
                    attributes: ["name"]
                },
                {
                    model: Project,
                    attributes: ["name"]
                },
            ],

        })
            .then(employee => {
                res.send(employee);
            })
            .catch(error => {
                console.log(error.massage);
            }

            );
    } catch (e) {
        console.log(e);
    }
};

exports.create = (req, res) => {
    try {
        if (!req.body.name | !req.body.position) {
            res.status(400).json({ message: "cannot empty!" });
            return;
        }

        const employeeObj = {
            name: req.body.name,
            position: req.body.position,
            companyId: req.body.companyId
        };

        Employee.create(employeeObj)
            .then((data) => {
                //res.send(data);
                //res.status(200).json({ message: "employee created." });
                Setting.create({
                    theme: req.body.theme,
                    employeeId: data.id
                });

                res.status(200).json({ message: "employee created success" })
            })
            .catch(error => {
                res.status(400).json({ message: "error occured!" });
            });

    } catch (error) {
        res.sendStatus(500);
    }
};

exports.addEmployeeToProject = (req, res) => {
    const junctionAttributes = {
        employeeId: req.body.employeeId,
        projectId: req.body.projectId
    }
Employee_project.create(junctionAttributes)
.then(res.status(200).json({ message: "Employee project created."}))
.catch(error => res.status(400).json({ message: error.message}));
};

exports.findOne = (req, res) => {
    try {
        const id = req.params.id;
        Employee.findByPk(id, {
            include: [
                {
                    model: Company,
                    attributes: ["name"]
                },
            ],
        })
            .then(data => {
                res.status(200).json(data);

            })
            .catch(error => {
                res.status(400).json({ message: error.message });
            });

    } catch (error) {
        console.log(error.message);
        res.status(500).json({ message: error.message });
    }
};

exports.update = (req, res) => {
    try {
        const id = req.params.id;
        const employeeObj = {
            name: req.body.name,
            position: req.body.position
        }
        Employee.update(employeeObj, {
            where: { id: req.params.id },
        })
            .then(data => {
                if (data == 1)
                    res.status(200).json({ message: "Updated successfully" });
            })
            .catch(error => {
                res.status(400).json({ message: error.message });
            });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.delete = (req, res) => {
    try {
        Employee.destroy({ where: { id: req.params.id } })
            .then(data => {
                if (data == 1) {
                    res.status(200).json({ message: "Deleted successfully." });
                }
            })
            .catch(error => {
                res.status(400).json({ message: error.message });
            });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};