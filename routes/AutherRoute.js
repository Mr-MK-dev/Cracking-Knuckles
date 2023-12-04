var express = require('express');
const autherController = require('../Controller/auther_controller');
var router = express.Router();

/* GET home page. */
router
    .route('/')
    .get(autherController.getAuthers)
    .post(autherController.createAuther);
router
    .route('/:_id')
    .patch(autherController.updateAuther)
    .delete(autherController.deleteAuther);

module.exports = router;
