const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const app = express();
const port = 3000;
const routes = require('./routes');

// parse aplication/json
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(morgan('dev'));

routes(app);

// register menus from index
app.use('/auth', require('./middleware'));

app.listen(port, () => {
  console.log(`Server app listening at http://localhost:${port}`)
});