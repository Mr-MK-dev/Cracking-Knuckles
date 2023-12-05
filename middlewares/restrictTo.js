const { verifySignature } = require('./jwt');
const Auth = require('../Model/Auth');
function restrictTo(...roles) {
    return async (req, res, next) => {
        const { _id } = verifySignature(req.headers.auth);
        console.log(`_id `, _id);

        const user = await Auth.findById(_id);
        if (!user) res.json('This token deonts return to any user');

        console.log(`User ,`, user);
        console.log();
        if (roles.includes(user.role)) {
            next();
        } else {
            res.json('Not are not allowed');
        }
    };
}

module.exports = restrictTo;
