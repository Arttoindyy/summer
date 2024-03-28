module.exports = (app) => {
    const project = require('../controllers/project.controller');

    const router = require('express').Router();

    //Retrieve all employee with setting
    router.get("/", project.findAll);

    app.use("/projects", router);
};