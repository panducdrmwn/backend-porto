const db = require('../models')
const {comparePassword, hashPassword} = require ('../helper/auth')
const { where } = require('sequelize')

module.exports = {

    async registerUser (req, res, next){
        try {
            const { username, password } = req.body
            if(!req.body.username){
                return res.json({
                    error: 'please enter a username'
                })
            } 

            if(!req.body.password || req.body.password.length < 8){
                return res.json({
                    error: 'please enter a password longer than 8 characters'
                })
            }

            const hashedPassword = await hashPassword(password);
            const user = await db.user.create({
            username,
            password:hashedPassword
            })

            return res.json(user)
        } catch (error) {
            console.log(error)
        }
    },

    async login (req, res) {
        try {
            const user = await db.user.findOne({where:
                {
                    username:req.body.username
                }})
            if(!user){
                return res.json({
                    error: 'username not found'
                })
            }

            const match = await comparePassword(req.body.password, user.password)
            if(match){
                return res.json('Login Successful')
            }
        } catch (error) {
            console.log(error)
        }
    }
}