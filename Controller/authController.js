const Auth = require('../Model/Auth');
const asyncHandler = require('express-async-handler');

const { createSignature } = require('../middlewares/jwt');
exports.Register = asyncHandler(async (req, res) => {
    const { name, email, password } = req.body;
    // Role admin For Payments
    const userEmail = await Auth.findOne({ email });
    console.log(`userEmail`, userEmail);
    if (userEmail) throw new Error('Email already exists ');

    const user = await Auth.create({ name, email, password });

    user.token = createSignature(user._id);

    res.json({ status: 'success', user, signnature: user.token });
});

exports.Login = asyncHandler(async (req, res) => {
    const { email, password } = req.body;
    const userEmail = await Auth.findOne({ email });
    console.log(`userEmail`, userEmail);
    if (!userEmail) throw new Error('Email not exists ');

    const user = await Auth.findOne({ email });
    if (user.password !== password) throw new Error('Wrong password');

    user.token = createSignature(user._id);

    res.json({ status: 'success', user, signnature: user.token });
});
