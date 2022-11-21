const mongoose = require('mongoose');

const signupSchema = new mongoose.Schema({
    userid: String,
    email: String,
    password: String,
});

module.exports = mongoose.model('SignUp', signupSchema);