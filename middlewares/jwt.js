const jwt = require('jsonwebtoken');

function createSignature(_id) {
    return jwt.sign({ _id }, process.env.SIGNATURE, {
        // algorithm: 'RS256',
        expiresIn: '2h',
    });
}

module.exports = { createSignature };
