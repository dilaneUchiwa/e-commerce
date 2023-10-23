const CategoryArticle=require('../../entities/category-article')

exports.get_categoryAarticle=(req,res)=>{
      CategoryArticle.findOne({nom:req.body.name})
        .then((cat)=>{
            if(!cat){
                res.status(404).json({message: 'Category Not Found'});
            }
            else res.status(200).send(cat);
        })
        .catch(error=>res.status(500).json({error}));
}