// Dependencies
const express = require('express');

// usee express
const app = express();

// enviroment variable port
const PORT = process.env.PORT || 3001;

// creat route for each file in the PUBLIC folder
app.use(express.static('public'));

app.use(express.urlencoded({ extended: true}));
app.use(express.json());

// routes to Route file
require('./Develop/routes/apiRoutes')(app);
require('./Develop/routes/htmlRoutes')(app);

// app listener
app.listen(PORT, () => {
    console.log('App listening at localHost${PORT}');
});