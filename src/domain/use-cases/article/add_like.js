const CategoryArticle = require("../../entities/category-article");
const Like = require("../../entities/like");
const ObjectId=require('mongoose').Types.ObjectId

exports.add_like=(req,res)=>{
    if(!ObjectId.isValid(req.body.article_id)) res.status(422).send({message:'invalid article id'})
    else  CategoryArticle.findById(req.body.category_id)
            .then((cat)=>{
                if(!cat){
                    res.status(404).json({message: 'Category Not Found'});
                }
                else{
                    const article=cat.articles.id(req.body.article_id);
                    if(article==null){
                        res.status(404).json({message: 'Article Not Found'});
                    }
                    else{
                        article.comments.push(new Like({user_id: req.auth.user_id ,stars:req.body.stars}))
                        cat.save()
                            .then(()=>res.status(201).json({message:'like successful added'}))
                            .catch((error)=>res.status(500).json(error))
                    }

                }

            })
        .catch(error=>res.status(500).json({error}));
}