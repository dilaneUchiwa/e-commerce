const CategoryArticle = require('../../entities/category-article');
const ObjectId=require('mongoose').Types.ObjectId

exports.add_stock=(req,res)=>{

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
                        article.stock+=req.body.quantity

                        cat
                        .save()
                        .then(()=>res.status(200).send({message:'article  stock successful add'}))
                        .catch((error)=>res.status(500).send(error))
         
                    }

                }

            })
            .catch(error=>res.status(500).json({error}));

}