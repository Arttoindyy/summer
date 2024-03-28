module.exports = {
    HOST: "Localhost",
    USER: "postgres",
    PASSWORD: "1234",
    DB: "oneToOne_db",
    dialect: "postgres",
    port: "5432",
    pool:{
        max:5,
        min:0,
        acquire:30000,
        idle:10000
    }
}