const db = require('../models');
const Employee = db.employee;
const Project = db.project;

exports.findAll = (req, res) => {
    Project.findAll({
        include: [
        {
            model: Employee,
            attributes: ["name", "position"]
        }
        ]
    })
        .then(data => {
            res.status(200).json(data);
        })
        .catch(error => {
            res.status(400).json({ message: error.message })
        });
}