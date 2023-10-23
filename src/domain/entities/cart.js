const mongoose=require('mongoose')
const order = require('./order')

module.exports=mongoose.model('Cart',
    mongoose.Schema(
        {
            status :{type : String , default: 'en attente'}, // livre , annule , valider
            orders : [ order.schema  ]
        },
        {
            timestamps:true
        }
        
    )
)