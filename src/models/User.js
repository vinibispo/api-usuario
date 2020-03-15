const mongoose = require('mongoose')
const UserSchema = mongoose.Schema({
    name:{
        type: String,
        required: true,
    },
    email:{
        type: String,
        required: true,
        unique: true
    },
    password:{
        type: String,
        required: String
    }
})
module.exports = mongoose.Model('User', UserSchema)