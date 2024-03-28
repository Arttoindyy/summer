module.exports = (sequelize, Datatype) => {
    const Setting = sequelize.define("setting", {
        id: {
            type: Datatype.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        theme: {
            type: Datatype.STRING,
            allowNull: false
        }
    });
    return Setting;
};