const Article=require('../../entities/article');
const CategoryArticle = require('../../entities/category-article');

exports.add_article=(req,res)=>{

    CategoryArticle.findById(req.body.category_id)
    .then((cat)=>{
        if(!cat){
            res.status(404).json({message: 'Category Not Found'});
        }else{
            const article=new Article(req.body);
            cat.articles.push(article);
            cat.save()
                .then(()=>res.status(201).json({message:'article successful created', result:article}))
                .catch(error=>res.status(500).json({error}));
        }

    })
    .catch(error=>res.status(500).json({error}));

}