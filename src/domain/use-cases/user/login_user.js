require('dotenv').config()
const User=require('../../entities/user')
const bcrypt=require('bcrypt')

exports.login_user=(req,res)=>{
    User.findOne({email:req.body.email})
        .then(user=>{
            if(!user){
                res.status(400).json({message: 'incorrect login/password'})
            }
            else
            bcrypt.compare(req.body.password,user.password)
                .then(valid=>{id
                    if(!valid){
                        res.status(400).json({message: 'incorrect login/password'})
                    }
                    else 
                    res.status(200).json({
                        token : jwt.sign(
                            { userId:user._id },
                            process.env.SECRET_KEY,
                            { expiresIn:'24h'}
                        )
                    })
                })
                .catch(error=>res.status(500).json({error}))
        })
        .catch(error=>res.status(500).json({error}))

}
