var express = require('express');
const genreController = require('../Controller/publishHoushController');
var router = express.Router();

/* GET home page. */
router
    .route('/')
    .get(genreController.getPublishHouses)
    .post(genreController.createPublishHouse);
router
    .route('/:_id')
    .patch(genreController.updatePublishHouse)
    .delete(genreController.deletePublishHouse);

module.exports = router;
