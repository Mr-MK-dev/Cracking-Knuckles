var express = require('express');
const genreController = require('../Controller/publishHoushController');
var router = express.Router();
const restrictTo = require('../middlewares/restrictTo');

/* GET home page. */
router
    .route('/')
    .get(genreController.getPublishHouses)
    .post(restrictTo('admin'), genreController.createPublishHouse);
router
    .route('/:_id')
    .patch(restrictTo('admin'), genreController.updatePublishHouse)
    .delete(restrictTo('admin'), genreController.deletePublishHouse);

module.exports = router;
