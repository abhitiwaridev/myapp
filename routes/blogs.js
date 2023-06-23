const express = require('express');
const router = express.Router();
const blogController = require('../controllers/blogController');

// Get All Blogs 
router.get('/', blogController.blog_index);

// Get Create Form for creating a new blog
router.get('/create', blogController.blog_create);

// Post request to create a new blog record
router.post('/', blogController.blog_insert);

// Get request to query a single blog record
router.get('/:id', blogController.blog_getfromid);


// Get Edit Form
router.get('/:id/edit', blogController.blog_edit);

// Put request to update a blog record
router.post('/:id', blogController.blog_update);

// To delete a record
router.get('/:id/delete',blogController.blog_delete);


module.exports = router;