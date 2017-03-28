'use strict';

const express = require('express');
const app = express();

app.use(express.static('public'));

app.set('view engine', 'pug');//configuration of pug

const names = ["Larry","Moe","Kamesh","Nithin"];
app.get('/',(req,res,next)=>{
  res.render('index',{subtitle : "This came from my Js file",names, loggedIn: false})
});

app.get('/article',(req,res,next)=>{
  res.render('article', {subtitle:"This came from my Js file", names,loggedIn: true})
});

const port = process.env.PORT ||8080
// app.set('port', port)//setting port to process.env.PORT

app.listen(port,()=>{
  console.log(`Listening to port ${port}`);
});
