const express = require('express');
const router = express.Router();
var authRoute = require('./AuthRoute');
var indexRouter = require('./BookRoute');
var autherRouter = require('./AutherRoute');
var genreRouter = require('./GenreRoute');
var publishHourseRoute = require('./publishHourseRoute');
var TranslatorRoute = require('./TranslatorRoute');

router.use('/auth', authRoute);
router.use('/book', indexRouter);
router.use('/auther', autherRouter);
router.use('/genre', genreRouter);
router.use('/publishHouse', publishHourseRoute);
router.use('/translator', TranslatorRoute);

module.exports = router;
