require('dotenv').config()
const jwt=require('jsonwebtoken')

module.exports=(req,res,next)=>{
    try{
        const token=req.hearders.autorization.split(' ')[1]
        const decodedToken=jwt.verify(token,process.env.SECRET_KEY)
        const userId=decodedToken.userId
        req.auth={
            user_id: userId
        }
        next()
    }
    catch(error){
        res.status(401).json({error})
    }
}