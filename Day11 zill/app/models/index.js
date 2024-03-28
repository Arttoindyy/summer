const config = require("../config/db");

const Datatype = require("sequelize");
const sequelize = new Datatype(
    config.DB,
    config.USER,
    config.PASSWORD,
    {
        host: config.HOST,
        dialect: config.dialect,
        pool:{
            max: config.pool.max,
            min: config.pool.min,
            acquire: config.pool.acquire,
            idle: config.pool.idle
        }
    }
);

const db ={};
db.Datatype = Datatype;
db.sequelize = sequelize;

db.employee = require("../models/employee.model")(sequelize, Datatype);
db.setting = require("../models/setting.model")(sequelize, Datatype);
db.company = require("../models/company.model")(sequelize, Datatype);
db.project = require("../models/project.model")(sequelize, Datatype);
db.employee_project = require("../models/employee_project.model")(sequelize, Datatype);

//One to One Relation
db.employee.hasOne(db.setting, {
    onDelete: 'CASCADE' 
})
db.setting.belongsTo(db.employee);

//One to Many Relation
db.company.hasMany(db.employee);
db.employee.belongsTo(db.company);

//Many to Many Relation
db.employee.belongsToMany(db.project, {
    through:"Employee_project",
    onDelete:"CASCADE"
});
db.project.belongsToMany(db.employee, {
    through:"Employee_project",
    onDelete:"CASCADE"
});

module.exports = db;