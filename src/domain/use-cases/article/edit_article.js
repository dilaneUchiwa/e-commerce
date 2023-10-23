const ObjectId=require('mongoose').Types.ObjectId
const Article=require('../../entities/article')

exports.edit_article=(req,res)=>{

    // if(!ObjectId.isValid(req.body.article_id)) res.status(422).send({message:'invalid article id'})
    // else Article.findByIdAndUpdate(req.body.article_id,req.body.article)
    //     .then((article)=>{
    //         if(!article){
    //             res.status(404).json({message: 'article Not Found'});
    //         }
    //         else
    //         res.status(200).send({message:'article successful updated'})
    //     })
    //     .catch((error)=>res.status(500).send(error))

}