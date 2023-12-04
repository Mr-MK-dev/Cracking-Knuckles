const Genre = require('../Model/Genre');
const { remove, read, create, update } = require('./api_factory');

// @Get all Genres
// statusCode : 200
exports.getGenres = read(Genre);

// @Craete new Genre
// statusCode : 201
exports.createGenre = create(Genre);

// @Update a Genre
// statusCode : 201
exports.updateGenre = update(Genre);

// @Delete a Genre
// statusCode : 404
exports.deleteGenre = remove(Genre);
