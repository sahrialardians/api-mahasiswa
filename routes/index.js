'use strict';

module.exports = ((app) => {
    let myJson = require('../controllers');

    app.route('/')
        .get(myJson.index);

    app.route('/mahasiswa')
        .get(myJson.getAllData);

    app.route('/mahasiswa/:id')
        .get(myJson.getDataById);

    app.route('/mahasiswa')
        .post(myJson.addData);

    app.route('/mahasiswa/:id')
        .put(myJson.editData);

    app.route('/mahasiswa/:id')
        .delete(myJson.deleteData);
})