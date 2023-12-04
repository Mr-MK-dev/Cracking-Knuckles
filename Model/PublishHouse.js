const mongoose = require('mongoose');

const PublishHouseSchema = new mongoose.Schema({
    PublishHouse: {
        type: String,
    },
});

module.exports = mongoose.model('PublishHouse', PublishHouseSchema);
