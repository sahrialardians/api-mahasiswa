'use strict';

exports.ok = function(req, res, message){
    let data = {
        status: 200,
        message: message,
        data: req
    }

    res.json(data);
    res.end();
}