const Course = require('../models/Course');
const {mongooseToObject} = require('../../util/mongoose');
const { home } = require('./SiteController');
class CourseController {
    show(req,res,next){
        // //tim theo _id
        // Course.findOne({_id: req.params.id})
        // // .then((course) => {
        // //     res.json(req.body,{);
        // // })
        // .then((course) => {
        //     res.render('courses/show',{course:mongooseToObject(course)});
        // } )
        // .catch(next);
        

        //tim theo slug
        Course.findOne({slug: req.params.slug})
        // .then((course) => {
        //     res.json(req.body,{);
        // })
        .then((course) => {
            res.render('courses/show',{course:mongooseToObject(course)});
        } )
        .catch(next);
        

    }

    createGET(req,res,next){
        res.render('courses/create');
    }
    
    createPOST(req,res,next){
        // res.json(req.params._id);
        const formData = req.body;
        formData.thumbnail = `https://i.ytimg.com/vi/${formData.videoID}/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLD9QFkahguHM2_ISOBWeVW1UwbaMw`;
        const course = new Course(formData);
        course.save()
        .then(()=>{
            res.redirect('/');
        })
        .catch(err => {
           
        })
    }

}
module.exports = new CourseController;