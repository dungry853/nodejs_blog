const express = require('express'); // thu vien dependencies
const app = express(); // doi tuong, web app,...
const port = 3000;
const path = require('path');

const handlebars = require('express-handlebars');
//template-engine
app.engine('.hbs',handlebars.engine({extname: '.hbs'}));
app.set('view engine','.hbs');
app.set('views',path.join(__dirname,'/resources/views'));

//static files
app.use(express.static(path.join(__dirname,'public')));
//route config
app.get('/', (req, res) => {
  res.render('home');
});

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
});