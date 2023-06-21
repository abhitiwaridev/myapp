const express = require('express');
const router = express.Router();
const blogController = require('../controllers/blogController');

router.get('/', blogController.blog_index);
router.get('/create', blogController.blog_create);
router.post('/', blogController.blog_insert);
router.get('/:id', blogController.blog_getfromid);
router.delete('/:id', blogController.blog_delete);
router.put('/:id', blogController.blog_edit);

module.exports = router;