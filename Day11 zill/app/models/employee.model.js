module.exports = (sequelize, Datatype) => {
    const Employee = sequelize.define("employee", {
        id:{
            type: Datatype.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        }, 
        name: {
            type:Datatype.STRING,
            allowNull: false,
        },
        position: {
            type:Datatype.STRING,
            allowNull: false
        },
    });
    return Employee;
};