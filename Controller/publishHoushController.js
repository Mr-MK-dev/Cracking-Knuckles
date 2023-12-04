const PublishHouse = require('../Model/PublishHouse');
const { remove, read, create, update } = require('./api_factory');

// @Get all PublishHouses
// statusCode : 200
exports.getPublishHouses = read(PublishHouse);

// @Craete new PublishHouse
// statusCode : 201
exports.createPublishHouse = create(PublishHouse);

// @Update a PublishHouse
// statusCode : 201
exports.updatePublishHouse = update(PublishHouse);

// @Delete a PublishHouse
// statusCode : 404
exports.deletePublishHouse = remove(PublishHouse);
