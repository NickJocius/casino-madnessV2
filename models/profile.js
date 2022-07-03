const mongoose = require('mongoose');

const profileSchema = new mongoose.Schema({

    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    bank: {
        type: Number,
        default: 500
    },
    location: {
        type: String,
        required: true,
        default: "City/State"
    },
    casino: {
        type: String,
        required: true,
        default: "Casino Madness"
    },
    favgame: {
        type: String,
        required: true,
        default: "All of them"
    },
    bio: {
        type: String,
        default: "Bio"
    },
    status: {
        type: String,
        default: "New Status"
    },
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Profile', profileSchema);