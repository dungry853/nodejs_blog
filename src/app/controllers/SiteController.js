class SiteController {
    search(req,res){
        res.render('news');
    }
    news(req,res){
        res.render('news');
    }
    home(req, res){
        res.render('home');
      };
};
module.exports = new SiteController;