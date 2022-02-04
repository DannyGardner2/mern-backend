const mongoose = require('../db/connection')

const UserSchema = new mongoose.Schema({
    name: String, 
    age: String,
})

const User = mongoose.model('User', UserSchema)

module.exports = User