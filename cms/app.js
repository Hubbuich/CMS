const express = require('express');
const app = express();
const path = require("path");
const exphds = require('express-handlebars');



app.use(express.static(path.join(__dirname, "public")));

//Set view engine
var hbs = exphds.create({ /* config */ });

// Register `hbs.engine` with the Express app.
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

//load routes

const home = require('./routes/home/index');
const admin = require('./routes/admin/index');


//use Routes

app.use('/', home);
app.use('/admin', admin);


app.listen(4500, () => {
    console.log('SERVER STARTED');
});






