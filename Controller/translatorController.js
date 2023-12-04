const Translator = require('../Model/Translator');
const { remove, read, create, update } = require('./api_factory');

// @Get all Translators
// statusCode : 200
exports.getTranslators = read(Translator);

// @Craete new Translator
// statusCode : 201
exports.createTranslator = create(Translator);

// @Update a Translator
// statusCode : 201
exports.updateTranslator = update(Translator);

// @Delete a Translator
// statusCode : 404
exports.deleteTranslator = remove(Translator);
