const {z}=require('zod');

function addArticleSchema(){
    return z.object({
        category_id:z.string({required_error: "category_id is required",invalid_type_error: "category_id must be a string",}),
        title:z.string('title is required'),
        description:z.string('description is required'),
        price:z.number('price is required').nonnegative('price must be positive'),
        stock:z.number('stock is required').nonnegative('stock must be positive'),
    });
}
function addCommentSchema(){
    return z.object({
        category_id:z.string('category_id is required'),
        article_id:z.string('article_id is required'),
        body:z.string('body of comment is required')
    });
}
function addLikeSchema(){
    return z.object({
        category_id:z.string('category_id is required'),
        article_id:z.string('article_id is required'),
        stars:z.number('stars for like is required')
    });
}
function addStockSchema(){
    return z.object({
        category_id:z.string('category_id is required'),
        article_id:z.string('article_id is required'),
        quantity:z.number('quantity is required').nonnegative('quantity must be positive')
    });
}
function remoteStockSchema(){
    return z.object({
        category_id:z.string('category_id is required'),
        article_id:z.string('article_id is required'),
        quantity:z.number('quantity is required').nonnegative('quantity must be positive')
    });
}
function editArticleSchema(){

}
function getArticleSchema(){
    return z.object({
        category_id:z.string('category_id is required'),
        article_id:z.string('article_id is required')
    });
}
function searchArticleSchema(){
    return z.object({
        key:z.string('a key word is required')
    });
}
module.exports={
    addArticleSchema,
    addCommentSchema,
    addLikeSchema,
    addStockSchema,
    remoteStockSchema,
    editArticleSchema,
    getArticleSchema,
    searchArticleSchema
}