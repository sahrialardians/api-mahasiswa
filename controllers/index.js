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
            response.ok(rows, res, "Success")
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
            response.ok(rows, res, "Success")
        }
    })
})

// add data mahasiswa
exports.addData = ((req, res) => {
    let nim = req.body.nim;
    let nama = req.body.nama;
    let jurusan = req.body.jurusan;

    connection.query(`INSERT INTO mahasiswa (nim, nama, jurusan) VALUES (?,?,?)`, [nim, nama, jurusan], (error, rows, cols) => {
        if(error){
            console.log(error)
        }else{
            response.ok("Successfully added new data!", res)
        }
    })
})