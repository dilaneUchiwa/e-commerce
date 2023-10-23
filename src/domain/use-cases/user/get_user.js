const User = require("../../entities/user");
const ObjectId=require('mongoose').Types.ObjectId

exports.get_user=(req,res)=>{
    if(!ObjectId.isValid(req.body.user_id)) res.status(422).send({message:'invalid user id'})
    else User.findById(req.body.user_id)
        .then((user)=>{
            if(!user){
                res.status(404).json({message: 'User Not Found'});
            }else{
                res.status(200).send(user);
            }
        })
        .catch(error=>res.status(500).json({error}));
    }
