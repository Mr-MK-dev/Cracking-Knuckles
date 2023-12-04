const mongoose = require('mongoose');

const BookSchema = new mongoose.Schema({
    title: {
        type: String,
    },
    auther: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Auther',
    },
    genre: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Genre',
    },
    Publishing_House: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Publisher',
    },
    cover: {
        data: Buffer,
        contentType: String,
    },
    translator: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Translator',
    },
    description: {
        type: String,
    },
    serial_number: {
        type: Number,
    },
    pages: {
        type: Number,
    },
});

module.exports = mongoose.model('Book', BookSchema);
