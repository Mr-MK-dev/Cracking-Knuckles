const mongoose = require('mongoose');

const AutherSchema = new mongoose.Schema({
    Name: {
        type: String,
    },
    profile: {
        data: Buffer,
        contentType: String,
    },
});

module.exports = mongoose.model('Auther', AutherSchema);
