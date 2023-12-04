const mongoose = require('mongoose');

const GenreSchema = new mongoose.Schema({
    genre_type: {
        type: String,
    },
});

module.exports = mongoose.model('Genre', GenreSchema);
