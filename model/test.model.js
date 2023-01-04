var mongoose = require('mongoose');

const testSchema = new mongoose.Schema({
    name: { type: String, required: true },
})
const Test = mongoose.model('tydata', testSchema);

module.exports = Test;