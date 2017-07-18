const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// create user Schema & model
const UserSchema = new Schema({
    name: {
        type: String
    },
    imageUrl: {
        type: String
    },
    Gender: {
        type: String
    },
    Profession: {
        type: String
    },
    DateOfBirth: {
        type: String
    }
});

const User = mongoose.model('user', UserSchema);

module.exports = User;