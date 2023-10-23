const express=require('express')
const { add_user} = require('../../domain/use-cases/user/add_user');
const { add_admin } = require('../../domain/use-cases/user/add_admin');
const { login_user } = require('../../domain/use-cases/user/login_user');
const authentification = require('../../domain/middlewares/authentification');
const { get_user } = require('../../domain/use-cases/user/get_user');
const { retrieve_user } = require('../../domain/use-cases/user/retrieve_user');
const { edit_user } = require('../../domain/use-cases/user/edit_user');
const validateSchema = require('../../domain/middlewares/schema');
const { getUserSchema, editUserSchema, addAdminSchema, loginUserSchema, addUserSchema } = require('../../domain/schemas/userSchema');
const router=express.Router()

router.post('/',validateSchema(addUserSchema()),add_user);
router.post('/login',validateSchema(loginUserSchema()),login_user);
router.post('/admin',authentification,validateSchema(addAdminSchema()),add_admin);
router.put('/',authentification,edit_user);
router.get('/',authentification,validateSchema(getUserSchema()),get_user);
router.get('/all',authentification,retrieve_user);

module.exports=router