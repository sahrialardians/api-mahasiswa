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

// login user controller
exports.login = ((req, res) => {
    let request = {
        email: req.body.email,
        password: req.body.password
    }

    let query = "SELECT * FROM ??=? WHERE ??=?";
    let table = ["users", "email", request.email, "password", md5(request.email)];

    query = mysql.format(query, table);
    connection.query(query, ((error, rows) => {
        if(error){
            console.log(error);
        }else{
            if (rows.length == 1) {
                let token = jwt.sign({rows}, config.secret, {
                    expiresIn: 86400 // expired 24 jam
                });
                user_id = rows[0].id;

                let data = {
                    user_id: user_id,
                    access_token: token,
                    ip_address: ip.address()
                }

                let query = "INSERT INTO ?? SET ?";
                let table = ["access_tokens"];

                query = mysql.format(query, table);
                connection.query(query, data, ((error, rows) => {
                    if (error) {
                        console.log(error);
                    } else {
                         res.json({
                             status: 200,
                             message: "Access token generated!",
                             data: {
                                 token: token,
                                 user: data.user_id
                             }
                         });
                    }
                }));
            } else {
                 res.json({
                     status: 422,
                     message: "Email or Password invalid!",
                 });
            }
        }
    }));
})