const db = require('../models');
const Company = db.company;
const Employee = db.employee;

exports.findAll = (req, res) => {
    Company.findAll({
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