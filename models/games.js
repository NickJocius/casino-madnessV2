const mongoose = require('mongoose');

const gameSchema = new mongoose.Schema({

    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    topwin: {
        type: Number,
        default: 0,
    },
    drawpoker: {
        wins: {
            type: Number,
            default: 0,
        },
        losses: {
            type: Number,
            default: 0,
        }
    },
    blackjack: {
        wins: {
            type: Number,
            default: 0,
        },
        losses: {
            type: Number,
            default: 0,
        }
    },
    craps: {
        wins: {
            type: Number,
            default: 0,
        },
        losses: {
            type: Number,
            default: 0,
        }
    },
    roulette: {
        wins: {
            type: Number,
            default: 0,
        },
        losses: {
            type: Number,
            default: 0,
        }
    },
    slots: {
        wins: {
            type: Number,
            default: 0,
        },
        losses: {
            type: Number,
            default: 0,
        }
    },
    date: {
        type: Date,
        default: Date.now
    }

});

module.exports = mongoose.model('Games', gamesSchema);