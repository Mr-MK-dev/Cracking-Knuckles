const mongoose = require('mongoose');

const AuthSchema = new mongoose.Schema({
    name: {
        type: String,
    },
    email: {
        type: String,
        required: true,
    },
    role: {
        type: String,
        enum: ['admin', 'visitor', 'user'],
    },
    password: {
        type: String,
    },
});

module.exports = mongoose.model('Auth', AuthSchema);
