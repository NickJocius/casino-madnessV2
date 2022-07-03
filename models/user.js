const mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema;

const userSchema = new mongoose.Schema({

    name: {
        type: String
    },

    email: {
        type: String,
        required: true,
        index: true,
    },

    role: {
        type: String,
        default: 'subscriber'
    },


}, { timestamps: true });

module.exports = mongoose.model('User', userSchema);