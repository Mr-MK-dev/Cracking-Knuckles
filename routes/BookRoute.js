var express = require('express');
const bookController = require('../Controller/book_controller');
var router = express.Router();
const restrictTo = require('../middlewares/restrictTo');

/* GET home page. */
router
    .route('/')
    .get(bookController.getBooks)
    .post(restrictTo('admin'), bookController.createBook);
router
    .route('/:_id')
    .patch(restrictTo('admin'), bookController.updateBook)
    .delete(restrictTo('admin'), bookController.deleteBook);

module.exports = router;
