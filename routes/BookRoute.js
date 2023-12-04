var express = require('express');
const bookController = require('../Controller/book_controller');
var router = express.Router();

/* GET home page. */
router.route('/').get(bookController.getBooks).post(bookController.createBook);
router
    .route('/:_id')
    .patch(bookController.updateBook)
    .delete(bookController.deleteBook);

module.exports = router;
