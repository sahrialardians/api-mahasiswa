'use strict';

const response = require('../res');
const connection = require('../connection');

exports.index = ((req, res) => {
    response.ok("Alhamdulillah, rest-api is running!", res)
});

// Get data mahasiswa
exports.getAllData = ((req, res, message) => {
    connection.query('SELECT * FROM mahasiswa', (error, rows, cols) => {
        if(error){
            connection.log(error)
        }else{
            response.ok(rows, res, message)
        }
    })
})