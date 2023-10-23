const mongoose=require('mongoose')

module.exports=mongoose.model('Order',
    mongoose.Schema(
        {
            article_id : { type:mongoose.Schema.Types.ObjectId , ref : 'Article' , require: true},
            quantity: {type:Number , required:true}
        },
        {
            timestamps:true
        }
    )
)