'use strict';
/* selint-env node, es6*/

const express = require('express');
const app = express();
const connectDB = require("./config/db");
const dotenv = require('dotenv').config();
const {connect} = require("mongoose");

const port = 1909;

//conection à la base de données
connectDB();



//middleware, pour traiter les données de la requete
app.use(express.json());
app.use(express.urlencoded({extended: true}));


//listen get method and route
app.use("/eleve", require('./routes/eleves.routes'));


//app.get('/', async(req, res) => {
    //res.send('Bonjour, le back-end de notre application est lancé !');
   // const indexHtml= await homePage(); //appel de la fonction homePage
   // res.send(indexHtml);
//});


//start server and listen target port
app.listen(port, () => {
    console.log(`Le server est lancé sur le port http://localhost:${port}`);
});


