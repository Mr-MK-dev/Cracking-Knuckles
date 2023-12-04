const Auther = require('../Model/Auther');
const { remove, read, create, update } = require('./api_factory');

// @Get all Authers
// statusCode : 200
exports.getAuthers = read(Auther);

// @Craete new Auther
// statusCode : 201
exports.createAuther = create(Auther);

// @Update a Auther
// statusCode : 201
exports.updateAuther = update(Auther);

// @Delete a Auther
// statusCode : 404
exports.deleteAuther = remove(Auther);
