const mongoose = require('mongoose');

const ListSchema = mongoose.Schema({
    title: {
        type: String,
        require: true
    },
    isDone: {
        type: Boolean,
        require: true
    }
});

module.exports = mongoose.model('list', ListSchema);