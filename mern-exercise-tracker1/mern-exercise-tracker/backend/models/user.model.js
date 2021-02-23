const mongoose = require('mongoose'); 

const Schema = mongoose.Schema; // new mongoose.Schema

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true, // trim whitespace off the end if user types in spaces
        minlength: 3
    },
}, {
    timestamps: true,
});
//                          name we use (could be anything)
const User = mongoose.model('User', userSchema);

module.exports = User;