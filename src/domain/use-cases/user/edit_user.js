const ObjectId=require('mongoose').Types.ObjectId
const User=require('../../entities/user')

exports.edit_user=(req,res)=>{

    if(!ObjectId.isValid(req.body.user_id)) res.status(422).send({message:'invalid user id'})
    User.findByIdAndUpdate(req.body.user_id,req.body.user)
    .then((user)=>{
        if(!user){
            res.status(404).json({message: 'User Not Found'});
        }
        else
        res.status(200).send({message:'user successful updated'})
    })
    .catch((error)=>res.status(500).send(error))

}