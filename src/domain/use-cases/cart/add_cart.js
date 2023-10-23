const Cart=require('../../entities/cart');
const User=require('../../entities/user');
const ObjectId=require('mongoose').Types.ObjectId;

exports.add_cart=(req,res)=>{

    if(!ObjectId.isValid(req.body.user_id)) res.status(422).send({message:'invalid user id'})
    else User.findById(req.auth.user_id)
            .then((user)=>{
                if(!user){
                    res.status(404).json({message: 'User Not Found'});
                }
                else{
                    const cart=new Cart({orders:[]});
                    user.carts.push(cart)
                    user.save()
                        .then(()=>res.status(201).json({message:'Cart successful created', cart:cart}))
                        .catch((error)=>res.status(500).json(error))
                }
            })
            .catch(error=>res.status(500).json({error}));
}   