const jwt = require('jsonwebtoken');

function createSignature(_id) {
    return jwt.sign({ _id }, process.env.SIGNATURE, {
        // algorithm: 'RS256',
        expiresIn: '2h',
    });
}

function verifySignature(token) {
    return jwt.verify(token, process.env.SIGNATURE);
}

module.exports = { createSignature, verifySignature };
