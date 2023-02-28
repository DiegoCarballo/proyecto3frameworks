'use strict'

var mongoose =require('mongoose');
var app = require('./app');

var port = 3700;

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://127.0.0.1:27017/api_rest_blog', {useNewUrlParser: true})
    .then ( () => {
        
            console.log("servidor corriendo correctamente !!!");
            
            app.listen(port, ()=>{
            console.log("servidor corriendo correctamente en la url: 127.0.0.1:"+port)
            })
        
        });
 