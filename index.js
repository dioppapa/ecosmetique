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

app.post('/stripet', function(req, res) {
  

  
 // console.log(' allhamdoulilah sant yallah waayy ma //recommencer ')

  
    
})
app.post('/purchase', function(req, res) {
  fs.readFile('items.json', function(error, data) {
    if (error) {
      res.status(500).end()
    } else {
      const itemsJson = JSON.parse(data)
      const itemsArray = itemsJson.music.concat(itemsJson.merch)
      let total = 0
      req.body.items.forEach(function(item) {
        const itemJson = itemsArray.find(function(i) {
          return i.id == item.id
        })
        total = total + itemJson.price * item.quantity
      })

      stripe.charges.create({
        amount: total,
        source: req.body.stripeTokenId,
        currency: 'usd'
      }).then(function() {
        console.log('Charge Successful')
        res.json({ message: 'Successfully purchased items' })
      }).catch(function() {
        console.log('Charge Fail')
        res.status(500).end()
      })
    }
  })
})


app.post('/stripe', function(req, res) {
  
  stripe.charges.create({

    amount: 10000,
    source: req.body.stripeTokenId,
    currency: 'usd'

  }).then(function() {
    console.log('Charge Successful allhamodoulilah')
   
  }).catch(function() {
    console.log('Charge Fail')
    
  })

  
    
})


    app.listen(port, function(){
        console.log("Listening on port : " + port); //it work
    });

