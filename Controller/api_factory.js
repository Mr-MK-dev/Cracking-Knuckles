// CRUD OPS
const asyncHandler = require('express-async-handler');

exports.read = (Model) =>
    asyncHandler(async (req, res) => {
        const doc = await Model.find();
        res.json({
            status: 200,
            data: {
                doc,
            },
        });
    });

exports.create = (Model) =>
    asyncHandler(async (req, res) => {
        const doc = await Model.create(req.body);
        res.json({
            status: 201,
            data: {
                doc,
            },
        });
    });

exports.update = (Model) =>
    asyncHandler(async (req, res) => {
        const { _id } = req.params;
        console.log(`_id`, _id);
        const doc = await Model.findByIdAndUpdate(_id, req.body, { new: true });
        res.json({
            status: 201,
            data: {
                doc,
            },
            status: 'Updated',
        });
    });

exports.remove = (Model) =>
    asyncHandler(async (req, res) => {
        const { _id } = req.params;

        const doc = await Model.findByIdAndDelete(_id);
        res.json({
            status: 404,
            data: {
                doc,
            },
        });
    });
