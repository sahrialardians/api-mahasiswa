const mysql = require('mysql');

// make connection to database
const conn = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Bismillah26",
    database: "2021_learn_rest_api"
});

conn.connect((error) => {
    if(error) throw error;
    console.log("Alhamdulillah, connected to database!");
});

module.exports = conn;

