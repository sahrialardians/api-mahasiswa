'use strict';

exports.ok = function(req, res){
    let data = {
        status: 200,
        message: req
    }

    res.json(data);
    res.end();
}