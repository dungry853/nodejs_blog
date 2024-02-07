const express = require('express'); // thu vien dependencies
const app = express(); // doi tuong, web app,...
const port = 3000;
const path = require('path');
const route = require('./routes');
const handlebars = require('express-handlebars');

//template-engine
app.engine('.hbs', handlebars.engine({ extname: '.hbs' }));
app.set('view engine', '.hbs');
app.set('views', path.join(__dirname, '/resources/views'));

app.use(
  express.urlencoded({
    extended: true,
  }),
);
app.use(express.json());

//static files
app.use(express.static(path.join(__dirname, 'public')));

//route config
route(app);

app.listen(port, () => {
  console.log(`App listening on port http://localhost:${port}`);
});
const db = require('./app/config/db');
db.connect();
