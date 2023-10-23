const {z}=require('zod')

function addCartSchema(){
    return z.object({
        user_id:z.string('user_id is required')
    });
}
function getCartSchema(){
    return z.object({
        cart_id:z.string('cart_id is required'),
    });
}
function setStatusSchema(){
    return z.object({
        cart_id:z.string('cart_id is required'),
    });
}

module.exports={
    addCartSchema,
    getCartSchema,
    setStatusSchema
}