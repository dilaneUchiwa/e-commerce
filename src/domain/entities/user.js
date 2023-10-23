const mongoose=require('mongoose');
const mongooseUniqueValidator = require('mongoose-unique-validator');
const cart = require('./cart');

module.exports=mongoose.model('User',
    mongoose.Schema({
        name : { type : String , required : true},
        sexe : { type: String , required:true},
        birthDay: { type:Date , required:true},
        tel: { type:Number , required:true,unique:true},
        password: {type:String , required:true},
        quarter: {type:String , required: true},
        email: { type:String ,unique:true},
        admin_sup: {type:String },
        images: {type: String},
        carts: [cart.schema]
    },
    {
        timestamps:true
    }
    ).plugin(mongooseUniqueValidator)
);