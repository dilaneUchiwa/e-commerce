const express=require('express')
const authentification = require('../../domain/middlewares/authentification');
const { add_article } = require('../../domain/use-cases/article/add_article');
const { get_article } = require('../../domain/use-cases/article/get_article');
const { retrieve_article } = require('../../domain/use-cases/article/retrieve_article');
const { edit_article } = require('../../domain/use-cases/article/edit_article');
const { add_stock } = require('../../domain/use-cases/article/add_stock');
const { remove_stock } = require('../../domain/use-cases/article/remove_stock');
const { search_article } = require('../../domain/use-cases/article/search_article');
const validateSchema = require('../../domain/middlewares/schema');
const { addArticleSchema, getArticleSchema, searchArticleSchema, addStockSchema, remoteStockSchema } = require('../../domain/schemas/articleSchema');

const router=express.Router();

router.post('/',validateSchema(addArticleSchema()) ,add_article);
router.get('/',validateSchema(getArticleSchema()) ,get_article);
router.put('/',authentification,edit_article);
router.get('/all',retrieve_article);
router.get('/search',validateSchema(searchArticleSchema),search_article);
router.put('/addStock',authentification,validateSchema(addStockSchema()),add_stock);
router.put('/removeStock',authentification,validateSchema(remoteStockSchema),remove_stock );

module.exports=router