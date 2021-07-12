'use strict';

module.exports = ((app) => {
    let myJson = require('../controllers');

    app.route('/')
        .get(myJson.index);

    app.route('/mahasiswa')
        .get(myJson.getAllData);
})