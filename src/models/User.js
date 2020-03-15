const bcryptjs = require('bcryptjs')
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
UserSchema.pre('save', async function(next){
    const hash = await bcryptjs.hash(this.password, 8)
    this.password = hash
})
module.exports = mongoose.model('User', UserSchema)