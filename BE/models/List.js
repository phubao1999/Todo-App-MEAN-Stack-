const mongoose = require('mongoose');

const ListSchema = mongoose.Schema({
    title: {
        type: String,
        require: true
    },
    isDone: {
        type: Boolean,
        require: true
    },
    description: {
        type: String,
        require: false
    }
});

module.exports = mongoose.model('list', ListSchema);