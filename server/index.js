const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const routes = require('./routes');
const port = process.env.PORT || 3000;
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, '../public')));

app.use('/', routes.api);
app.use('/api/credentials', routes.credentials); // in real-world this endpoint will be protected
// other endpoints

app.listen(port, () => console.log(`listening on port ${port}`));