const Order=require('../../entities/order');
const Cart=require('../../entities/cart');
const User=require('../../entities/user');
const ObjectId=require('mongoose').Types.ObjectId;

exports.add_order=(req,res)=>{

    if(!ObjectId.isValid(req.body.cart_id)) res.status(422).send({message:'invalid cart id'})

    else 
    User.findById(req.auth.user_id)
        .then((user)=>{
            if(!user){
                res.status(404).json({message: 'User Not Found'});
            }
         
            const cart=user.carts.id(req.body.cart_id);

            if(cart===null){
                res.status(404).json({message: 'Cart Not Found'});
            }
            else{
                const order=new Order({article_id:req.body.article_id , quantity : req.body.quantity});
                cart.orders.push(order)
                user.save()
                    .then(()=>res.status(201).json({message:'order successful created', order:order}))
                    .catch((error)=>res.status(500).json(error));
            }

        })
        .catch(error=>res.status(500).json(error));
}   