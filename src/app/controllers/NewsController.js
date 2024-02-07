class NewsController {

    //[GET] /news/:slug
    show(req,res){
        res.send('New Detail !!!');
    }
}
module.exports = new NewsController;