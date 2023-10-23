const mongoose=require('mongoose')

module.exports=mongoose.model('Comment',
    mongoose.Schema(
        {
            user_id:{type:mongoose.Schema.Types.ObjectId, ref:'User' ,required:true},
            body:{type:Number,required:true} , 
            date: {type:Date , default :Date.now} 
        }
    )
)