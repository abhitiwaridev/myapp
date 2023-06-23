const Blog = require('../models/blog');

const blog_index =  (req, res) => {
    Blog.find().sort({ createdAt: -1 })
        .then(result => {
            //console.log(result);
            res.render('blogs/index', { blogs: result, title: 'All Blogs' });
        })
        .catch(err => {
            console.log(err);
        });
    console.log('I am executing');
}

const blog_create = (req, res) => {
    const blog = new Blog();
    res.render('blogs/create', {blog : blog});
}

const blog_insert = (req,res) => {


    const blog = new Blog(req.body);
    console.log('****************');
    console.log(req.body);
    console.log('****************');
    
    blog.save()
        .then(result => {
            console.log(result);
            res.redirect('/blogs');
        })
        .catch(err => {
            console.log(err);
        });


        

}

const blog_getfromid = (req, res) => {
    console.log('inside my controller method');
    let recordid = req.params.id;
    console.log(recordid);
    Blog.findById({_id: recordid })
        .then(result => {
            console.log(result);
            res.render('blogs/details', { blog: result, title: 'Blog detail' });
        })
        .catch(err => {
            console.log(err);
        });
}

const blog_delete = (req, res) => {
    // Get id of the record to be delete
    let recordid = req.params.id;
    Blog.deleteOne({_id: recordid})
        .then(result => {
            console.log(result);
            res.redirect('/blogs');
        })
        .catch(err => {
            console.log(err);
        });
}


const blog_edit = (req, res) => {
    let recordid = req.params.id;
    console.log(recordid);
    Blog.findById({_id: recordid })
        .then(result => {
            console.log(result);
            res.render('blogs/edit', { blog: result, title: 'Edit Blog detail' });
        })
        .catch(err => {
            console.log(err);
        });
}

const blog_update = (req, res) => {
    Blog.findOneAndUpdate({_id: req.params.id},req.body)
        .then(result => {
            res.redirect('/blogs');
        })
        .catch(err => {
            console.log(err);
        });
}



module.exports = {
    blog_index,
    blog_create,
    blog_insert,
    blog_getfromid,
    blog_delete,
    blog_edit,
    blog_update
}




