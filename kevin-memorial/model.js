const mongoose = require('mongoose');

const memorySchema = new mongoose.Schema({
    name: {
        required: true,
        type: String
    },
    comment: {
        required: true,
        type: String
    },
    approved: {
        required: true,
        type: Boolean
    }
});

module.exports = mongoose.model('Memory', memorySchema);