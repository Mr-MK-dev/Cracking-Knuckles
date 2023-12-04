const mongoose = require('mongoose');

const TranslatorSchema = new mongoose.Schema({
    Name: {
        type: String,
    },
    language: {
        type: [String],
    },
});

module.exports = mongoose.model('Translator', TranslatorSchema);
