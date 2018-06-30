
const path = require('path');
const express = require('express');

console.log(__dirname+'/../public');

const publicPath = path.join(__dirname,'../public');

console.log(publicPath);


var app = express();

app.use(express.static(publicPath));

app.listen(3000, ()=>{
    console.log('Server is up on 3000');
})

