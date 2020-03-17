const User = require('../models/User')
const redis = require('../utils/redis')
const UserController =  {
    findAll: async(req, res)=>{
        let users = await redis.get('ALL')
        try {
            if(!users){
                users = await User.find({})
                await redis.set('ALL', users)
                res.status(200).send(users)
            }else{
                res.send(users)
            }
        } catch (error) {
            res.status(401).send(error)
        }
    },
    add: async(req, res)=>{
        try {
            const user = await User.create({name: req.body.name, email: req.body.email, password: req.body.password})
            res.status(201).send(user)
        } catch (error) {
            res.status(201).send(error)
        }
    },
    update: async(req, res)=>{
        const id = req.params.id
        const {name, email, password} = req.body
        try {
            const user = await User.findByIdAndUpdate(id, {name, email, password})
            res.status(200).send(user)
        } catch (error) {
            res.status(401).send(error)
        }
    },
    exclude: async(req, res) =>{
        const id = req.params.id
        try {
            await User.findByIdAndDelete(id)
            res.status(204).send()
        } catch (error) {
            res.status(401).send(error)
        }
    },
    findBySomeInformation: async(req, res)=>{
        console.log(req.query.search)
    }
}
module.exports = UserController