var express = require('express');
const translatorController = require('../Controller/translatorController');
var router = express.Router();
const restrictTo = require('../middlewares/restrictTo');

/* GET home page. */
router
    .route('/')
    .get(translatorController.getTranslators)
    .post(restrictTo('admin'), translatorController.createTranslator);
router
    .route('/:_id')
    .patch(restrictTo('admin'), translatorController.updateTranslator)
    .delete(restrictTo('admin'), translatorController.deleteTranslator);

module.exports = router;
