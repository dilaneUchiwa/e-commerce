const CategoryArticle=require('../../entities/category-article')

exports.add_categoryArticle=(req,res)=>{

    new CategoryArticle(req.body)
    .save()
    .then((category)=>res.status(201).send({message:'category successful created', result:category}))
    .catch((error)=>res.status(500).send(error));

}