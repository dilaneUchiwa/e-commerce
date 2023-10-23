const CategoryArticle = require("../../entities/category-article");
//const ObjectId=require('mongoose').Types.ObjectId

exports.search_article=(req,res)=>{
    //if(!ObjectId.isValid(req.body.article_id)) res.status(422).send({message:'invalid article id'})
    //else
      CategoryArticle.find({'aticles.title':req.body.name})
            .then((article)=>{
                if(!article){
                    res.status(404).json({message: 'Article Not Found'});
                }
                
                res.status(200).send(article);

            })
            .catch(error=>res.status(500).json({error}));
    
}