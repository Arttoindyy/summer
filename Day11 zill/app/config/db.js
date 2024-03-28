module.exports = {
    HOST: "localhost",
    USER: "postgres",
    PASSWORD: "1234",
    DB: "oneToOne_db",
    dialect: "postgres",
    post: 5432,
    pool:{
        max:5,
        min:0,
        acquire: 3000,
        idle: 10000
    }
}