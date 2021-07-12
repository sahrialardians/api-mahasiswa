'use strict';

const response = require('../res');
const connection = require('../connection');

exports.index = ((req, res) => {
    response.ok("Alhamdulillah, rest-api is running!", res)
});