const Book = require('../Model/Book');
const { remove, read, create, update } = require('./api_factory');

// @Get all books
// statusCode : 200
exports.getBooks = read(Book);

// @Craete new book
// statusCode : 201
exports.createBook = create(Book);

// @Update a book
// statusCode : 201
exports.updateBook = update(Book);

// @Delete a book
// statusCode : 404
exports.deleteBook = remove(Book);
