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

// Get data by Id mahasiswa
exports.getDataById = ((req, res, message) => {
    let id = req.params.id;
    connection.query(`SELECT * FROM mahasiswa WHERE id=${id}`, (error, rows, cols) => {
        if(error){
            connection.log(error)
        }else{
            response.ok(rows, res, message)
        }
    })
})