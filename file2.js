'use strict';
const express=require('express');
const app = express();
const logs=require('./log.js');

app.get('/',(req,res)=>{
    const ans=logs('FILE2');
res.send('SUCCESS 2222222');
});

app.listen(4000);