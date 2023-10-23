const User=require('../../entities/user')
const bcrypt=require('bcrypt')

exports.add_user=(req,res)=>{
    bcrypt.hash(req.body.password,10)
        .then(hash=>{
            new User(req.body)
            .save()
            .then((user)=>res.status(201).send({message:'user successful created', user:user}))
            .catch((error)=>res.status(500).send(error))
        })
        .catch((error)=>res.status(500).send(error))
}
