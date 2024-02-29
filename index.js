'use strict';
/* selint-env node, es6*/

const express = require('express');
const app = express();
const port = 1909;

//importation la logique de la page home
const homePage= require('./pages/homePage.js');

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


