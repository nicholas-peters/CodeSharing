const mongoose = require("mongoose");

const schema = new mongoose.Schema({
    value: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model("Document", schema);