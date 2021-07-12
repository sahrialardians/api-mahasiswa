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

// update data mahasiswa
exports.editData = ((req, res) => {
    let id = req.body.id;
    let nim = req.body.nim;
    let nama = req.body.nama;
    let jurusan = req.body.jurusan;

    connection.query(`UPDATE mahasiswa SET nim=?, nama=?, jurusan=? WHERE id=?`, [id, nim, nama, jurusan], (error, rows, cols) => {
        if(error){
            console.log(error)
        }else{
            response.ok("Successfully updated data!", res)
        }
    })
})

// delete data mahasiswa
exports.deleteData = ((req, res) => {
    let id = req.body.id;

    connection.query(`DELETE FROM mahasiswa WHERE id=?`, [id], (error, rows, cols) => {
        if(error){
            console.log(error)
        }else{
            response.ok("Successfully deleted data!", res)
        }
    })
})