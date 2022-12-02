// dependencies
const path = require("path");

// routin
module.exports = function (app) {
    app.get('/notes', (req, res) => {
        response.sendFile(path.join(__dirname, '../public/notes.html'));
    });
    app.get('/index', (req, res) => {
        response.sendFile(path.join(__dirname, '../public/index.html'));
    });
};