const ObjectId=require('mongoose').Types.ObjectId
const Article=require('../../entities/article') 

exports.remove_stock=(req,res)=>{
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
                        if(article.stock < req.body.quantity){
                            res.status(422).json({message: 'Article Stock is insufficient'});
                        }
                        else {
                            article.stock-=req.body.quantity;            
                            cat
                            .save()
                            .then(()=>res.status(200).send({message:'article  stock successful add'}))
                            .catch((error)=>res.status(500).send(error));
                        }
            
                    }

                }

            })
            .catch(error=>res.status(500).json({error}));
}
