var express = require('express');
const genreController = require('../Controller/genre_controller');
var router = express.Router();

/* GET home page. */
router
    .route('/')
    .get(genreController.getGenres)
    .post(genreController.createGenre);
router
    .route('/:_id')
    .patch(genreController.updateGenre)
    .delete(genreController.deleteGenre);

module.exports = router;
