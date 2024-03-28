module.exports = (sequelize, DataType) => {
    const Setting = sequelize.define("setting", {
        id:{
            type: DataType.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        theme: {
            type: DataType.STRING,
            allowNull: false
        }
    });
    return Setting;
};