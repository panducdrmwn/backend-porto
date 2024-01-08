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
    }
}