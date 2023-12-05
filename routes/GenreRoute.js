var express = require('express');
const genreController = require('../Controller/genre_controller');
var router = express.Router();
const restrictTo = require('../middlewares/restrictTo');

/* GET home page. */
router
    .route('/')
    .get(genreController.getGenres)
    .post(restrictTo('admin'), genreController.createGenre);
router
    .route('/:_id')
    .patch(restrictTo('admin'), genreController.updateGenre)
    .delete(restrictTo('admin'), genreController.deleteGenre);

module.exports = router;
