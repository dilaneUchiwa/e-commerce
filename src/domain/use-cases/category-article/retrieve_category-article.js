const CategoryArticle=require('../../entities/category-article')

exports.retrieve_categoryAarticle=(req,res)=>{
      CategoryArticle.find()
        .then((cat)=>{
            res.status(200).send(cat);
        })
        .catch(error=>res.status(500).json({error}));
}