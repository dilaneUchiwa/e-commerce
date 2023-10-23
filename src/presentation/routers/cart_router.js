const express=require('express');
const { add_cart } = require('../../domain/use-cases/cart/add_cart');
const { get_cart } = require('../../domain/use-cases/cart/get_cart');
const { setstatus_cart } = require('../../domain/use-cases/cart/setStatus_cart');
const authentification = require('../../domain/middlewares/authentification');
const validateSchema = require('../../domain/middlewares/schema');
const { addCartSchema, setStatusSchema, getCartSchema } = require('../../domain/schemas/cartSchema');

const router=express.Router();


router.post('/',authentification,validateSchema(addCartSchema()), add_cart);
router.put('/status',authentification,validateSchema(setStatusSchema()) ,setstatus_cart);
router.get('/',authentification,validateSchema(getCartSchema()),get_cart);

module.exports=router;