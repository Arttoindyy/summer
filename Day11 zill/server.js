const express = require('express');
const app = express();

require("dotenv").config();
const PORT = process.env.PORT;

//parse request of content-type - application/json
app.use(express.json());

//parse request of content-type - application/x-www
app.use(express.urlencoded({extended: true}));

const db = require('./app/models');
db.sequelize.sync({force:false}).then(() => {
    console.log('Database is syncing...');
});

app.get('/', (req, res) => { //อันนี้คือฟังก์ชั่น(=>) 
    res.send('Default Router')
});

require('./app/routes/employee.route')(app);
require('./app/routes/company.route')(app);
require('./app/routes/project.route')(app);


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})