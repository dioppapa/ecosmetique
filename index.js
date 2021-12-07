const express = require('express');
const app = express();
var port = process.env.PORT || 8080;

var todoCont = require('./routes/controller') ;
require('dotenv').config()
const session = require("express-session");
const stripeSecretKey = process.env.STRIPE_SECRET_KEY
const stripePublicKey = process.env.STRIPE_PUBLIC_KEY


const stripe = require('stripe')(stripeSecretKey)



app.set('view engine' , 'ejs') ;
app.use('/public' , express.static('public')) ;
app.use(
    session({
      secret: "secret",
      resave: false,
      saveUninitialized: false,
    
    })
  );


todoCont(app);



  
app.get('/' , function ( req , res) {
            
 
   
  res.render( "acceuil")
 

});


    app.listen(port, function(){
        console.log("Listening on port : " + port); //it work
    });

