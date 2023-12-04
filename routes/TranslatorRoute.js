var express = require('express');
const translatorController = require('../Controller/translatorController');
var router = express.Router();

/* GET home page. */
router
    .route('/')
    .get(translatorController.getTranslators)
    .post(translatorController.createTranslator);
router
    .route('/:_id')
    .patch(translatorController.updateTranslator)
    .delete(translatorController.deleteTranslator);

module.exports = router;
