const  redisClient = require('../config//redis')

const GET = (key) =>{
    return new Promise((resolve, reject)=>{
        redisClient.get(key, (err, value)=>{
            if(err){
                reject(err)
            }else{
                resolve(value)
            }
        })
    })
}
const SET = (key, value) =>{
    return new Promise((resolve, reject)=>{
        redisClient.set(key, value, 'EX', 60, (err)=>{
            if(err){
                reject(err)
            }
            else{
                resolve(true)
            }
        })
    })
}
const redis = {
    get: GET,
    set: SET,
}
module.exports = redis