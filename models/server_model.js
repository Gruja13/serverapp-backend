const mongoose = require('mongoose');

const serverSchema = new mongoose.Schema({
    serverNumber: Number,
    serverStatus: String,
});

const ServerModel = mongoose.model('ServerModel', serverSchema);

module.exports = ServerModel;