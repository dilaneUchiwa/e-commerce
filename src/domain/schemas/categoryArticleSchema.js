const {z}=require('zod')

function addCategoryArticleSchema(){
    return z.object({
      name:z.string('name is required')  
    });
}
function getCategoryArticleSchema(){
    return z.object({
        name:z.string('name is required') 
    });
}

module.exports={
    addCategoryArticleSchema,
    getCategoryArticleSchema
}