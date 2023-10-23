const Comment = require("../../entities/comment");
const ObjectId=require('mongoose').Types.ObjectId;
const CategoryArticle = require("../../entities/category-article");

exports.add_comment=(req,res)=>{
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
                        article.comments.push(new Comment({user_id: req.auth.user_id ,body:req.body.body}))
                        cat.save()
                            .then(()=>res.status(201).json({message:'comment successful added'}))
                            .catch((error)=>res.status(500).json(error))
                    }

                }

            })
            .catch(error=>res.status(500).json({error}));
}