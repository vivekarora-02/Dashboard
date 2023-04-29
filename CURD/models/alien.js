const mongoose = require('mongoose')


const alienSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true
    },
    tech: {
        type: String,
        required: true
    },
    sub: {
        type: Boolean,
        required: true,
        default: false
    },
    from: {
        type: String,
        required: true
    },
    dest: {
        type: String,
        required: true
    },
    money: {
        type: Number,
        required: true
    }

})

module.exports = mongoose.model('Alien', alienSchema)