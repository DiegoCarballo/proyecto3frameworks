'use strict'
// cargar modulos de node para crear el servidor

var express = require('express');
var bodyParser = require ('body-parser');

// Ejecutar express(http)

var app = express();


//Cargar ficheros rutas

// Middlewares


app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

//CORS


//Añadir prefijos a rutas

//ruta o metodo de prueba para el API REST

app.get('/probando', function(req, res){
    console.log("Hola Mundo")
    return res.status(200).send({
            curso: 'Master en FrameWork JS',
           autor: 'Victor Robles',
            URL: 'VictorRoblesWeb.es'
    }
  
    
    )
   
});

// exportar el modulo (fichero actual)
module.exports = app;