const db = require('../models')

module.exports = {
    async login (req, res, next) {
     var user = await db.user.findOne({where:{
        username:req.body.username,
        password:req.body.password
     }})
     return res.send(user)
    },

    async ceklogin (req, res, next){
        if(!req.body.username || !req.body.password){
            return res.status(401).send('unauthorized')
        }
        next()
    },

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

            const user = await db.user.create({
            username,password
            })

            return res.json(user)
        } catch (error) {
            console.log(error)
        }
    }
}