

 
 
 
 module.exports = function (app) {
	
      
    const bodyParser = require('body-parser')
    const urlencodedParser = bodyParser.urlencoded({ extended: false })
    var fs = require('fs') ;
    var multer = require('multer');

    var connection  = require('../models/configmysql');

 
    var sqlclient  = require('../models/sqlclient');
    var sqlproduit  = require('../models/sqlproduit');
    var sqlcommande  = require('../models/sqlcommande');
    var sqllivraison  = require('../models/sqllivraison');
    var sqlpayement  = require('../models/sqlpayement');
    var sqlcategorie  = require('../models/sqlcategorie');
    var contr  = require('../routes/controllera');

    
    var storage 
    var upload



    contr.chercherProduitAcceuil(app  , sqlproduit)

    contr.enregisrerDansBase(app , sqlclient)

    contr.acheterDirectement(app , sqlcommande)
   
    contr.connectUser(app)
    contr.postePagnierCommander(app, sqlcommande)
    contr.postePagnierAchat(app , sqlcommande)
    
    contr.postePagnierAchatDirect(app , sqlcommande)
    
    
   
    
	 
	 app.get('/admi' , function ( req , res) {

   // if(req.session.isAuth == true && req.session.admi == true){
   //   res.render('admi' ); 
   //   console.log('session admi '+ req.session.admi)
   // }
  //  else
    
    res.render('login' ); 
           
      

 
});
	 
    app.get('/validerLoginPass' , function ( req , res) {
      console.log('pseudo,passe')
    
      var pseudo  = req.query.pseudo
      var passe = req.query.passe

      sqlclient.validerlesClient( res , pseudo , passe)
      
       
    });






    


    app.get('/lister' , function ( req , res) {
            
      var p = req.query.p 

      
      
     
      var reg = /^[0-9]+$/

      var rega = /^[a-zA-Z]+$/
     
      if(reg.test(p))
      sqlclient.chercherUnClientsb(  p , res)
    
      else if(rega.test(p))
      sqlclient.chercherUnClientsc(  p , res)


      console.log(p)

     
   });

   app.get('/searchc' , function ( req , res) {
            
    var p = req.query.p 
    console.log(p)
    
    var reg = /^[0-9]+$/

    

    if(reg.test(p)){
 
     
       
       sqlcommande.chercherUnCommandeb( p , res)
    
    
    }
   
 
   
   
   
   
  
    

   
 });



   app.get('/searchp' , function ( req , res) {
            
      var p = req.query.p 

      
     
      var reg = /^[0-9]+$/

      var rega = /^[a-zA-Z]+$/
     
     
      if(reg.test(p))
      sqlproduit.chercherUnProduita( p , res)
      else if (rega.test(p))
      sqlproduit.chercherUnProduitb( p , res)
     
     
    

     
   });

   

   app.get('/searchl' , function ( req , res) {
            
    var p = req.query.p 
   

    console.log(p)
   
    var reg = /^[0-9]+$/

    
   
  if(reg.test(p))
    sqllivraison.chercherLivraison( p , res)
   
   
    

   
 });

 app.get('/categorie' , function ( req , res) {
            
  
   sqlcategorie.listerTousLesCategorie(res)
 
  
 
});

   app.get('/searchpa' , function ( req , res) {
            
    var p = req.query.p 
  
    
   
    var reg = /^[0-9]+$/


  if(reg.test(p) )
  sqlpayement.chercherpayement( p , res)
   
    
   
   
  

   
 });
   
 
 app.get('/ajouterdir' , function ( req , res) {
            
  var name = req.query.name
 
  fs.mkdir('./public/image/categorie/' + name, { recursive: true },
     (err) => {
    
  })
  
  const aa = './public/image/categorie'  ;

  
 fs.readdir( aa    , function (err , data) {

  res.send(data)
 
    }) 
    
});



app.get('/supprimerdir' , function ( req , res) {
            
  var name = req.query.name
 
  
   var aa = './public/image/categorie';

  

  // fs.rmdir(aa + '/' + name  , function() {
               

  //  fs.readdir( aa    , function (err , data) {
 
     
  //              res.send(data)  
//
 //   })   

       
    
 //   })
     
  
        
       
});

app.get('/modifierdir' , function ( req , res) {
            
  const aa = './public/image/categorie/'  ;

   var name = req.query.name
   var nname = req.query.nname
  
 
  fs.rename ( aa + name ,aa +  nname  , function (err , data) {
 
     
    fs.readdir( aa    , function (err , data) {

      res.send(data)
     
        })  

})
  
    
});

 app.get('/listerCategorie' , function ( req , res) {
            
  const aa = './public/image/categorie'  ;

  
 fs.readdir( aa    , function (err , data) {

  res.send(data)
 
    })   
  
    
});


   app.get('/copierimage' , function ( req , res) {
            
      const aa = './public/image/temporel/'  ;
   
      const bb = './public/image/television/'  ;
     
     
      fs.readFile( aa + 'aa.jpg'   , function (err , data) {
 
         fs.writeFile( bb + 'aa.jpg' , data , function (err) {
           
           
         })
  
        })   
  
     
   });

   app.get('/listerPayement' , function ( req , res) {
            
     
    sqlpayement.listerTousPayement(res)

   
 });

   app.get('/listerTable' , function ( req , res) {
            
     
      sqlclient.listerTousLesClients(res)

     
   });
   

   app.get('/detailTable' , function ( req , res) {
            
     
     
   });
   app.get('/livraison' , function ( req , res) {
           
      sqllivraison.listerTousLesLivraison(res)

     
   });


   app.get('/detailcommande' , function ( req , res) {
            
     var c = req.query.c 
    
      sqlcommande.nombreDeCommande(c , res)
     
     
   });

   app.get('/produit' , function ( req , res) {
            
     
     
      sqlproduit.listerTousLesProduits(res)
      
      
    });

    app.get('/commande' , function ( req , res) {
            
     
     
      sqlcommande.listerTousLesCommandes(res)
     
      
    });

   
   
 
   app.get('/supprimerUnClient' , function ( req , res) {
    
      var a  = req.query.client  ;

      
      sqlclient.supprimerUnClient(a ,res)

     
   });
   app.get('/modifierproduit' , function ( req , res) {
            
      var a  = req.query.produit  

      var classe = req.query.classe
      var marque = req.query.marque  
      var prix = req.query.prix
      var description = req.query.description

      
     
      sqlproduit.modifierUnProduit( classe , marque,  prix, description  , a , res)

     
   });
   
   

   app.get('/ajouterproduit' , function ( req , res) {
            
     

      var classe = req.query.classe
      var marque = req.query.marque  
      var prix = req.query.prix
      var description = req.query.description
      var img  = req.query.img

     
      
      sqlproduit.ajouterUnProduit( classe , marque,  prix, description  , img , res)
       
    
      console.log('ajouter un produit')
     
   });

   app.get('/updateproduit' , function ( req , res) {
            
     

    var classe = req.query.classe
    var marque = req.query.marque  
    var prix = req.query.prix
    var description = req.query.description
    var img  = req.query.img

    var id  = req.query.id

    
    sqlproduit.modifierUnProduit(classe, marque,prix , description ,img , id)
  
    res.send('success')
   
 });
   
   app.post('/upload', function (req, res) {

    var temporel = req.query.temporel
    var name = req.query.name

    if( temporel.localeCompare("vrai")==0){
      uploadDonneTemporel(req,res)
      
    }
    else {
      uploadImage(req , res)
      deleteTemporelFile()
    }
    
    res.send(name)
   
    })

    app.get('/updateapercu' , function ( req , res) {
            
      
      const aa = './public/image/temporel'  ;
      var a = fs.readdirSync( aa);
  


        res.send(a[0])
     
   });
   app.get('/supprimerImage' , function ( req , res) {
            
      var classe = req.query.classe
      var name = req.query.name

    
      var dir = './public/image/categorie/' + classe + '/' ;

     
     

     
        fs.unlink( dir + name , function() {
               
       })
      
     
     
   res.send("succes")
     
 });

   
   
   app.get('/supprimerUnProduit' , function ( req , res) {
            
      var a  = req.query.produit  ;
      var classe = req.query.classe
      var name = req.query.name

      
       var dir = './public/image/categorie/' + classe + '/' ;

      
     

     
      
     
      sqlproduit.supprimerUnProduit( a ,res)

      fs.unlink( dir + name , function() {
              
      })
     
   });

   app.get('/validerAjouProduit' , function ( req , res) {
            
     console.log('valider produit')  
     
   });


    app.post('/admi' , urlencodedParser , function ( req , res) {
        const { name, password } = req.body;
  
        console.log(name  , password)
  
        if (/administrateur/.test(name) &&  /administrateur/.test(password)){
          
          req.session.isAuth = true
          req.session.admi = true


          console.log('administrateur connected ')
 
          
          res.render("admi");

        }
        
        else
        res.render("login");
  
     
  });
  
  
  app.get('/nettoitemporel' , function ( req , res) {

   deleteTemporelFile()
       

    });
    
  
   


   
 
   

   
function uploadImage(req , res) {
  var name = req.query.name
    var classe = req.query.classe
   
    
   
   
    var dir = './public/image/categorie/' + classe  ;

    var storage = multer.diskStorage({

 
      destination: function (req, file, callback) {
        
    
    
          if (!fs.existsSync(dir)){
              fs.mkdirSync(dir);
          }
          callback(null, dir);
      },
      filename: function (req, file, callback) {
    
       
        
          callback(null,  file.originalname) ;
         
      }
    });

    var upload = multer({
  
      storage: storage  ,
      
      fileFilter: function(req, file, callback) {
        
      
      callback(null, true) 
    }
    
    
    }).array('files', 30);
    
    
    
    upload(req, res, function () {


   
   
     
    })






    
    
  
}


  function uploadDonneTemporel(req , res) {
   
    var dir = './public/image/temporel'  ;

    
    var storage = multer.diskStorage({

 
      destination: function (req, file, callback) {
        
    
    
          if (!fs.existsSync(dir)){
              fs.mkdirSync(dir);
          }
          callback(null, dir);
      },
      filename: function (req, file, callback) {
    
       
        
          callback(null,  file.originalname) ;
         
      }
    });

    var upload = multer({
  
      storage: storage  ,
      
      fileFilter: function(req, file, callback) {
        
      
      callback(null, true) 
    }
    
    
    }).array('files', 30);
    
    
    
    upload(req, res, function () {


   
   
     
    })
  }
  function deleteTemporelFile() {
   const aa = './public/image/temporel/'  ;
   
   var a = fs.readdirSync(aa)

   for( var j = 0 ; j < a.length + 1; j ++){
      fs.unlink(aa + a[j] , function() {
             
     })
    }
     
  }

  function saveImageProduit(img) {
   const aa = './public/image/temporel/'  ;
   
      const bb = './public/image/television/'  ;
     
     
      fs.readFile( aa + img   , function (err , data) {
 
         fs.writeFile( bb + img , data , function (err) {
           
           
         })
  
        })   
  }

  function deleteTemporelFileb() {
   const aa = './public/image/temporel/'  ;
   
   
     fs.readdir(aa,( err , files)=> {
       files.forEach ( file => {

         fs.unlink(aa + file, function() {
             
         })
       });
      });
    
     
  }
  


}
    












    




      
 
 
