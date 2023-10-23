const express=require('express');
const { add_categoryArticle } = require('../../domain/use-cases/category-article/add_category-article');
const { get_categoryAarticle } = require('../../domain/use-cases/category-article/get_category-article');
const { retrieve_categoryAarticle } = require('../../domain/use-cases/category-article/retrieve_category-article');
const validateSchema = require('../../domain/middlewares/schema');
const { addCategoryArticleSchema, getCategoryArticleSchema } = require('../../domain/schemas/categoryArticleSchema');

const router=express.Router();

router.post('/',validateSchema(addCategoryArticleSchema()),add_categoryArticle);
router.get('/',validateSchema(getCategoryArticleSchema()),get_categoryAarticle);
router.get('/all',retrieve_categoryAarticle)

module.exports=router;