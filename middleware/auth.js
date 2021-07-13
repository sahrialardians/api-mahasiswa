const connection = require('../connection');
const mysql = require('../connection');
const md5 = require('MD5');
const response = require('../res');
const jwt = require('jsonwebtoken');
const config = require('../config/secret');
const ip = require('ip');

// register controller
exports.register = ((req, res) => {
    let data = {
        username: req.body.username,
        email: req.body.email,
        password: md5(req.body.password),
        role: req.body.role,
        register_date: new Date()
    }

    // cek email uda daftar belum
    let query = "SELECT email FROM ?? WHERE ??=?";
    let table = ["users", "email", data.email];

    query = mysql.format(query, table);

    connection.query(query, ((error, rows) => {
        if(error){
            console.log(error)
        }else{
            if (rows.length === 0) {
                let query = "INSERT INTO ?? SET ?";
                let table = ["users"];

                query = mysql.format(query, table);
                connection.query(query, data, ((error, rows) => {
                    if(error){
                        console.log(error)
                    }else{
                        response.ok("Successfully user registration!", res)
                    }
                }));
            } else {
                response.ok('The email has already registered!', res)
            }
        }
    }))
});
