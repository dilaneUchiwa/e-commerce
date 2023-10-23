const CategoryArticle = require("../../entities/category-article");

exports.retrieve_article=(req,res)=>{
  
        CategoryArticle.findById(req.body.category_id)
        .then((cat)=>{
            if(!cat){
                res.status(404).json({message: 'Category Not Found'});
            }
            res.status(200).send(cat.articles);

        })
        .catch(error=>res.status(500).json({error}));

}
