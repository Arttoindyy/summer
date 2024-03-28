const express = require('express');
const app = express();

require("dotenv").config();
const PORT = process.env.PORT || 6000;

//parse request od contact-type - application/json
app.use(express.json());

//parse request od contact-type - application/x-www-urlexncoded
app.use(express.urlencoded({ extended:true}));

const db = require('./app/models');
db.sequelize.sync({force:false}).then(() => {
    console.log('Dabase syncing...');
});

app.get('/', (req, res) => {
   res.send('Default Route');
});

require('./app/routes/employee.route')(app);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})
