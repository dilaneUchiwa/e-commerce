const {z}=require('zod')

function addOrderSchema(){
    return z.object({
        cart_id:z.string('cart_id is required'),
        article_id:z.string('article_id is required'),
        quantity:z.number('quantiity is required').nonnegative('quantity must be positive')
    });
}

function deleteOrderSchema(){
    return z.object({
        order_id:z.string('cart_id is required')
    });
}
function editOrderSchema(){
    return z.object({
        order_id:z.string('order_id is required'),
        quantity:z.number('quantiity is required').nonnegative('quantity must be positive')
    });
}

module.exports={
    addOrderSchema,
    deleteOrderSchema,
    editOrderSchema
}
