var express = require('express');
const authController = require('../Controller/authController');
var router = express.Router();

/* GET home page. */
router.route('/register').post(authController.Register);
router.route('/login').post(authController.Login);
// router
// .route('/:_id')
// .patch(autherController.updateAuther)
// .delete(autherController.deleteAuther);

module.exports = router;
