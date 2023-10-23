const express=require('express')
const { add_order }=require('../../domain/use-cases/order/add_order');
const { update_order } = require('../../domain/use-cases/order/update_order');
const { delete_order } = require('../../domain/use-cases/order/delete_order');
const authentification = require('../../domain/middlewares/authentification');
const validateSchema = require('../../domain/middlewares/schema');
const { addOrderSchema, editOrderSchema, deleteOrderSchema } = require('../../domain/schemas/orderSchema');

const router=express.Router()

router.post('/',authentification,validateSchema(addOrderSchema()),add_order);
router.put('/',authentification,validateSchema(editOrderSchema()),update_order);
router.delete('/',authentification,validateSchema(deleteOrderSchema()),delete_order)


module.exports=router