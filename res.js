'use strict';

export.ok = function(req, res){
    let data = {
        status: 200,
        message: req
    }

    res.json(data);
    res.end();
}