const db = require('../models')
const Employee = db.employee;
const Setting = db.setting;

exports.findAll = (req, res) => {
    try{
        Employee.findAll({
            attributes: ["id", "name", "position"],
            include:[{
                model: Setting,
                attributes: ["theme"]
            }]
        })
        .then(employee => {
            //res.send(employee);
            //res.json(employee);
            res.status(200).json(employee);
        })
        .catch( error => {
            console.log(error.message);
        });
    }catch(e){
        console.log(e);
    }
};

exports.create = (req, res) => {
    res.send("Create");
};

exports.findOne = (req, res) => {
    res.send("findOne");
};

exports.update = (req, res) => {
    res.send("update");
};

exports.delete = (req, res) => {
    res.send("delete");
};