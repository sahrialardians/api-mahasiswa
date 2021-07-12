const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;
const routes = require('./routes');

// parse aplication/json
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

routes(app);

app.listen(port, () => {
  console.log(`Server app listening at http://localhost:${port}`)
});