const CategoryArticle = require("../../entities/category-article");
const ObjectId=require('mongoose').Types.ObjectId

exports.get_article=(req,res)=>{
    if(!ObjectId.isValid(req.body.article_id)) res.status(422).send({message:'invalid article id'})
    else  CategoryArticle.findById(req.body.category_id)
            .then((cat)=>{
                if(!cat){
                    res.status(404).json({message: 'Category Not Found'});
                }
                const article=cat.articles.id(req.body.article_id);
                if(article==null){
                    res.status(404).json({message: 'Article Not Found'});
                }
                else res.status(200).send(article);

            })
            .catch(error=>res.status(500).json({error}));
    
}