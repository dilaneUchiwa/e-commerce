const Cart=require('../../entities/cart');
const User=require('../../entities/user');
const ObjectId=require('mongoose').Types.ObjectId;

exports.get_cart=(req,res)=>{
    if(!ObjectId.isValid(req.body.cart_id)) res.status(422).send({message:'invalid user id'})
    else User.findById(req.auth.user_id)
        .then((user)=>{
            
            if(!user){
                res.status(404).json({message: 'User Not Found'});
            }
            else{
                
                const cart=user.carts.id(req.body.cart_id)
                if(cart===null){
                    res.status(404).json({message: 'Cart Not Found'});
                }else{
                    res.status(200).send(cart)
                }
            }
        })
        .catch(error=>res.status(500).json({error}));
}