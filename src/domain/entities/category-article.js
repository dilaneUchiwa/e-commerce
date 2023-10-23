const mongoose=require('mongoose')
const Article = require('./article');
const mongooseUniqueValidator = require('mongoose-unique-validator');

const categorySchema= mongoose.Schema(
    {
        name :{type : String , required:true , unique : true },
        articles : [ Article.schema  ]
    },
    {
        timestamps:true
    }
    
);
categorySchema.plugin(mongooseUniqueValidator);

categorySchema.index({'articles.name':1});

module.exports=mongoose.model('CategoryArticle',categorySchema);