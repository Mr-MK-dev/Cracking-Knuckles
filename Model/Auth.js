const mongoose = require('mongoose');

const AuthSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    role: {
        type: String,
        enum: ['admin', 'visitor', 'user'],
        default: 'user',
    },
    password: {
        type: String,
        required: true,
    },
});

module.exports = mongoose.model('Auth', AuthSchema);
