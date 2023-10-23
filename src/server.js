require('dotenv').config();
const express=require('express');
const mongoose=require('mongoose');
const userRouter=require('./presentation/routers/user_router');
const articleRouter=require('./presentation/routers/article_router');
const cartRouter=require('./presentation/routers/cart_router');
const orderRouter=require('./presentation/routers/order_router');
const CategoryArticleRouter=require('./presentation/routers/category-article_router');
const app=express();

app.use(express.json());
mongoose.connect(process.env.DATABASE_URL,{
  autoCreate:false,
  useNewUrlParser: true,
  useUnifiedTopology: true,
  // serverSelectionTimeoutMS:5000,
  // autoIndex:false,
  // maxPoolSize:10,
  // serverSelectionTimeoutMS:5000,
  // socketTimeoutMS:4000,
  // family:4
})
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch((error) => console.log(`Connexion à MongoDB échouée ! : ${error} `));

  
app.use('/api/v1/user',userRouter);
app.use('/api/v1/article',articleRouter);
app.use('/api/v1/cart',cartRouter);
app.use('/api/v1/order',orderRouter);
app.use('/api/v1/category-article',CategoryArticleRouter);

app.listen(process.env.PORT,()=>{
    console.log(`server is listenning on port ${process.env.PORT}`);
});

module.exports=app