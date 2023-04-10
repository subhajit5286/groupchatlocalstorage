const express=require('express');
const loginRoutes=require('./routers/login');
const bodyParser=require('body-parser');


 
  
const app=express();
app.use(bodyParser.urlencoded({extended:false}));

app.use(loginRoutes)


app.listen(8000);