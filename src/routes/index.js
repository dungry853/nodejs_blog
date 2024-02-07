const siteRouter = require('../routes/site');
function route(app) {
  app.use('/', siteRouter);

  //   app.post('/search',(req,res) => {
  //     //query param
  //     //console.log(req.query.q);
  //     //console.log(req.query.author);
  //     //
  //     console.log(req.body);
  //     res.send('');
  //   });
}
module.exports = route;
