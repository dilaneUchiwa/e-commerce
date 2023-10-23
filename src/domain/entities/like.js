const { ObjectId } = require('mongodb')
const mongoose=require('mongoose')

module.exports=mongoose.model('Like',
    mongoose.Schema(
        {
            user_id:{type:mongoose.Schema.Types.ObjectId, ref:'User' ,required:true},
            stars:{type:Number,required:true},
            date: {type:Date , default :Date.now} 
        }
    )
)