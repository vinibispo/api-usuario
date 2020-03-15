const {Schema, Model} = require('../config/database')
const UserSchema = new Schema({
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
module.exports = new Model(UserSchema, 'User')