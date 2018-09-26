'use strict';
const express=require('express');
const app = express();
const logs = require('./log.js');


app.get('/',(req,res)=>{
  let file=logs('FILE1');
res.send('SUCCESS');
});

app.listen(3000);