const  redisClient = require('../config//redis')

const GET = (key) =>redisClient.get(key)
const SET = (key, value)=> redis.set(key, value, 'EX', 60)
const redis = {
    get: GET,
    set: SET,
}
module.exports = redis