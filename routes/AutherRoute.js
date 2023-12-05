var express = require('express');
const autherController = require('../Controller/auther_controller');
var router = express.Router();
const restrictTo = require('../middlewares/restrictTo');

/* GET home page. */
router
    .route('/')
    .get(autherController.getAuthers)
    .post(restrictTo('admin'), autherController.createAuther);
router
    .route('/:_id')
    .patch(restrictTo('admin'), autherController.updateAuther)
    .delete(restrictTo('admin'), autherController.deleteAuther);

module.exports = router;
