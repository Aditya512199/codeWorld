const mongoose = require('mongoose');

const facultyAccountSchema = new mongoose.Schema({
    FullName: {
        type: String,
        required: true,
    },
    Email: {
        type: String,
        required: true,
        unique: true
    },
    Password: {
        type: String,
        required: true
    }
});

const facultyAccountModel = mongoose.model("facultyaccount", facultyAccountSchema);

module.exports = facultyAccountModel;
