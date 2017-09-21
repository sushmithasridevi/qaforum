let mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const bcrypt = require('bcrypt-nodejs');
let schema = new mongoose.Schema({

    id: String,
    name: String,
    email: String,
    password: String,
    authType: String,
    loggedinStatus: Boolean
});

let User = mongoose.model('user', schema);
module.exports = User;
