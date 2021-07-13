const jwt = require('jsonwebtoken');
const config = require('../config/secret');

const verification = () => {
    return (req, res, next) => {
        let role = req.body.role;
        // check authorization header
        let tokenBearer = req.headers.authorization;

        if (tokenBearer) {
            let token = tokenBearer.split(' ')[1];

            // verify
            jwt.verify(token, config.secret, ((error, decoded) => {
                if (error) {
                    return res.status(401).send({
                        status: 401,
                        message: "Token not registered!"
                    });
                } else {
                    if (role == "USER") {
                        req.decoded;
                        next();
                    } else {
                        return res.status(401).send({
                            status: 401,
                            message: "Tidak boleh akses ini!"
                        });
                    }
                }
            }));
        } else {
            return res.status(401).send({
                status: 401,
                message: "Token not registered!"
            });
        }
    }
}

module.exports = verification;