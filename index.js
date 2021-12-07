const express = require('express');
const app = express();
var port = process.env.PORT || 8080;

var todoCont = require('./routes/controller') ;


app.set('view engine' , 'ejs') ;
app.use('/public' , express.static('public')) ;

todoCont(app);



  
app.get('/' , function ( req , res) {
            
 
   
  res.render( "acceuil")
 

});


    app.listen(port, function(){
        console.log("Listening on port : " + port); //it work
    });

