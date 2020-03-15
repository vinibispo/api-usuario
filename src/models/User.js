const {Schema, Model} = require('mongoose')
const UserSchema = Schema({
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
module.exports = Model('User', UserSchema)