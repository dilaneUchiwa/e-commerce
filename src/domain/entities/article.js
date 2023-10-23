const mongoose=require('mongoose');
const like = require('./like');
const comment = require('./comment');
const mongooseUniqueValidator = require('mongoose-unique-validator');

const articleSchema=mongoose.Schema(
    {
        title:{type:String, required:true},
        description:{type:String , required:true},
        price:{type:Number,required:true},
        stock:{type:Number,required:true , default:0},
        image:[{type:String}],
        likes:[like.schema],
        Comments:[comment.schema]
    },
    {
        timestamps:true
    });
//articleSchema.plugin(mongooseUniqueValidator);

module.exports=mongoose.model('Article',articleSchema);