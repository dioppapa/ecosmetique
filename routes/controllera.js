
  const bodyParser = require('body-parser')
  const urlencodedParser = bodyParser.urlencoded({ extended: true })

 var pagnier = []
 function chercherProduitAcceuil( app  , sql) {

    app.get('/searchAcceuil' , function ( req , res) {
            
       
        var p = req.query.p 

        sql.chercherUnProduita( p , res)
 

       
     });
 }

   function fermerSession(app) {
      app.get('/deconnect' , function ( req , res) {
         

         
         req.session.destroy(function(){
               console.log("user logged out.")
             
               
            });
            res.redirect('/');
         
           
        
      
   });
      
   }

   function enregisrerDansBase(app , sql) {
      app.get('/savedansbase' , function ( req , res) {
         
        
   
         var nom = req.query.nom
         var prenom =  req.query.prenom
         var pseudo =  req.query.pseudo
         var tel =  req.query.tel
         var adresse = req.query.adresse
         var email = req.query.email
         var passe = req.query.pass

       
         sql.ajouterUnClient( nom,prenom,pseudo,tel,adresse,email,passe , res)
        

        
       
     
      
       
       
       
   });
      
   }

   function connectUser(app ) {
      app.get('/connectuser' , function ( req ,  res) {
         
         var us = {}
 
 
        
         var nom = req.query.nom
         var prenom =  req.query.prenom
         var id =  req.query.id

   
   
       
          us.name = nom
         us.prenom = prenom
         us.id  = id
       req.session.isAuth = true
       req.session.admi = false
     
     
       req.session.user  = us;
       

       res.send( us)

       
       
       
   });
      
   }

   function listePagnier(app ) {
      app.get('/listepagnier' , function ( req , res) {
         


         console.log( "get pagnier "  + pagnier)
      
    res.send( pagnier)

             
      
   });
      
   }


   function postePagnierCommander(app , sql ) {
        
      
      app.post('/postepagniercommander' , urlencodedParser, function ( req , res) {
         
        
      
 var a = req.body.data
 var lengtA = a[0].length
 
 
  
   

 for ( var i = 0 ; i < lengtA ; i++){
   var cli = a[0][i]
   var quantite = a[1][i]
    var produit = a[2][i]
    
 sql.ajouterUnCommande(cli,quantite,produit   )

 
 }
 
      
    res.send('succes')
             
   
   });
      
   }

   function postePagnierAchat(app , sql ) {
        
      
      app.post('/postepagnierachat' , urlencodedParser, function ( req , res) {
         
        
         var a = req.body.data
         var lengtA = a[0].length
         
           console.log(a)
          
           
        
         for ( var i = 0 ; i < lengtA ; i++){
           var cli = a[0][i]
           var quantite = a[1][i]
            var produit = a[2][i]
            
         sql.ajouterUnCommandePayer(cli,quantite,produit   )
        
         
         }
         
          console.log('reuissi')
              
            res.send('succes')
                     
           
         
   
   });
      
   }

   function postePagnierAchatDirect(app , sql ) {
        
      
      app.post('/postepagnierachatdirect' , urlencodedParser, function ( req , res) {
         
        
         var a = req.body.data
         
           console.log(a)
          
           
        
        
           var cli = a[0]
           var quantite = a[1]
            var produit = a[2]
            
         sql.ajouterUnCommandePayer(cli,quantite,produit   )
        
         
         
         
          console.log('reuissi')
              
            res.send('succes')
                     
           
         
   
   });
      
   }

 

   function acheterDirectement(app , sql ) {
        
      
      app.post('/acheterdirectement' , urlencodedParser, function ( req , res) {
         var a = req.body.data
       
         var cli = a[0]
         var quantite = a[1]
          var produit = a[2]
         
          var payement = true
         
          sql.ajouterUnCommande(cli,quantite,produit , payement  )
          res.send('succes')
           
    
             
   
   });
      
   }

 

   
 module.exports = {
    chercherProduitAcceuil : chercherProduitAcceuil ,
    enregisrerDansBase:enregisrerDansBase,
    fermerSession:fermerSession ,
    listePagnier : listePagnier ,
    postePagnierAchat : postePagnierAchat ,
    postePagnierAchatDirect:postePagnierAchatDirect,
    postePagnierCommander : postePagnierCommander ,
    connectUser : connectUser ,
    acheterDirectement :acheterDirectement
   }  ;