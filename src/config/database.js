const mongoose = require('mongoose')
if(process.env.NODE_ENV == "test"){
    require('dotenv').config({path: '.env.test'})
}else if(process.env.NODE_ENV == "development"){
    require('dotenv').config({path: '.env'})
}
const myDb = {
    connect: mongoose.connect(process.env.MONGO_URL, {useNewUrlParser: true, useFindAndModify: false, useUnifiedTopology: true, useCreateIndex: true}),
    once: mongoose.connection.once('open', ()=>{
             console.log('Connected to MongoDB')
         }),
    error: mongoose.connection.on('error', (err)=>{
           console.log(err)
       })
}
module.exports = myDb