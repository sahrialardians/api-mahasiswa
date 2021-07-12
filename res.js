'use strict';

exports.ok = function(req, res, message){
    let data = {
        status: 200,
        message: "Success",
        data: req
    }

    res.json(data);
    res.end();
}