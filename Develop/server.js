// Dependencies
const express = require('express');

// use express
const app = express();

// enviroment variable port
const PORT = process.env.PORT || 3001;

// creat route for each file in the PUBLIC folder
app.use(express.static('public'));

app.use(express.urlencoded({ extended: true}));
app.use(express.json());

// routes to Route file
require('./routes/apiRoutes')(app);
require('./routes/htmlRoutes')(app);

// app.get('/', (req, res) =>
//   res.sendFile(path.join(__dirname, '../public/index.html'))
// );
// app.get('/notes', (req, res) => {
//     res.sendFile(path.join(__dirname, '../public/notes.html'));
// });

// app listener
app.listen(PORT, () => {
    console.log(`App listening at localHost: ${PORT}`);
});