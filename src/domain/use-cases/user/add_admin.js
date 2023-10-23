const ObjectId=require('mongoose').Types.ObjectId
const User=require('../../entities/user')

exports.add_admin=(req,res)=>{
    if(!ObjectId.isValid(req.body.user_id)) res.status(422).send({message:'invalid user id'})
    else User.findById(req.body.user_id)
        .then((user)=>{
            if(user==null){
                res.status(404).send({message:'User Not Found'})
            }else{
                user.admin_sub=req.auth.user_id
                console.log(user)
                user.save()
                    .then(()=>res.status(200).send({message:'user successful passed admin'}))
                    .catch((error)=>res.status(500).send(error))
            }
        })
        .catch((error)=>res.status(500).send(error))

}