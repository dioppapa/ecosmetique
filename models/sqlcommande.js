
   const { response } = require('express');
var connection  = require('./configmysql');


        function listerTouLesCommandesEtlivraison( res) {
          let sql = "SELECT * FROM   ecommerce.commande  inner join ecommerce.livraison   on  ecommerce.livraison.idco = ecommerce.commande.id ;";
          let query = connection.query(sql, (err, result) => {
      
              if (err) throw err;
              {
                }
              
              res.send(result);
          });
          
        }
    
   function listerTousLesCommandes(res) {
      let sql = "SELECT * FROM commande ";
      
      let query = connection.query(sql, (err, result) => {
  
          if (err) throw err;
          {
            
           }
           
            res.send(result)
  
      });
      console.log(query._results)
  
    }
  
  
    
  
    function chercherUnCommandeViaID( id) {
      chercherUnCommande( id , 1)
    }
  
    function chercherUnCommandeViaClient( nom) {
      chercherUnCommande( nom, 2)
    }
  
    function chercherUnCommandeViaModedachat( prenom) {
      chercherUnCommande( prenom , 3)
    }
  
   function chercherUnCommandeViaModeDePayement( pseudo) {
    chercherUnCommande( pseudo , 4)
    }
    function chercherUnCommandeViaQuantite( tel) {
      chercherUnCommande( tel , 5)
      }
      
      function chercherUnCommandeViaPrduit( adresse) {
        chercherUnCommande( adresse , 6)
        }
  
        function chercherUnCommandeViaDateDeommande(email) {
          chercherUnCommande(  email, 7)
          }
  
   
          function chercherUnCommandeb( n , res) {
            let sql = "" ;
            var tab = []
            
            var nom =   n.toString()

            var date = "%" + nom + "%"
       

            console.log(nom)
            console.log(date)
           
            
           
            if(n==1){
              sql = 'select * from  commande where id = ?  or cli = ? or quantite = ? or produit = ? or quantite = ? or payement = true'  
              tab =  [ nom , nom , nom , nom , nom ]
            }
            else if(n==0){
              sql = 'select * from commande where id = ?  or cli = ? or quantite = ? or produit = ? or quantite = ? or payement = false'  
              tab =  [ nom , nom , nom , nom , nom ]
             }
             else {
              sql = 'select * from commande where id = ?  or cli = ? or quantite = ? or produit = ? or quantite = ? '  
              tab =  [ nom , nom , nom , nom , nom ]
             }
            
             
             if (nom.length >= 4){
              sql = 'select * from  commande where id = ?  or cli = ? or quantite = ? or produit = ? or quantite = ? or datedecommande like ? or datedepayement like ?'  
              tab =  [ nom , nom , nom , nom , nom , date , date ]
             }
           
        

        
         
          
            let query = connection.query(sql , tab, (err, result) => {
      
                if (err) throw err;
                   {
            
                    }
          console.log(result)
                    res.send(result)
        
            });
      
          }

          function chercherUnCommandec( n , res) {
            let sql = "" ;
           
            sql = "select * from  commande where  datedecommande like ? or datedepayement like ?"   
            var nom = "%" + n + "%"
       
            let query = connection.query(sql, [ nom , nom] ,(err, result) => {
      
                if (err) throw err;
                   {
            
                    }
      
                    res.send(result)
        
            });
      
          }
  
    function chercherUnCommande( name , id) {
      let sql = "" ;
  
      if(id==1)
  sql = "SELECT * FROM commande where id =  ?"  ;
  else if ( id== 2)
    sql = "SELECT * FROM commande where idc =  ? "
  else if ( id== 3)
  sql = "SELECT * FROM commande where modedachat =  ? "
  else if ( id== 4)
  sql = "SELECT * FROM commande where modedepayement =  ? "
  else if ( id== 5)
  sql = "SELECT * FROM commande where quantite = ?"  
  else if ( id== 6)
  sql = "SELECT * FROM commande where produit = ?"  
  else if ( id== 7)
  sql = "SELECT * FROM commande where datedecommande = ? "
      
      let query = connection.query(sql,[name] ,(err, result) => {
  
          if (err) throw err;
          {
            
            console.log("cherching")
              
              
              return result ;
              
              }
  
      });
    }
      
  
      function supprimerUnCommande( id) {
  
       let  sql = "delete FROM commande where id =  ?" ;
      
       var i = id.toString();
        let query = connection.query(sql, [i], (err, result) => {
    
            if (err) throw err;
            {
              
              console.log("cherching")
                
                 
                return result ;
                
                }
    
        });
  
      }
  
  
  
      function ajouterUnCommande(cli,quantite,produit  ) {
      
        var a = cli.toString() ;
         var b = quantite.toString() ;
        var c = produit.toString() ;
        
       

       
     let  sql = "INSERT INTO commande (cli,quantite,produit,datedecommande ,payement , datedepayement) VALUES ( ?,?,? , NOW(), false , null ); "  ;
    
     let query = connection.query(sql, [a ,b,c ] , (err, result) => {
       
      if (err) throw err;
      {
      
        
          }
    
    });
     
   
   

       }
  



       function ajouterPayementEtLivraison(cli , nombcom, nomlivr ){
        var clia = cli.toString() ;
        var nombcoma = nombcom.toString() ;
        var nomlivra = nomlivr.toString() ;
        
           let  sql = "INSERT INTO payement (idcom , modedachat,  datedepayement) VALUES ( ?,?,?,now()); "  ;
          
           let query = connection.query(sql, [ clia,nombcoma,nomlivra ] , (err, result) => {
             
            if (err) throw err;
            
            
          
               
                
          
          });
           
        
             }

       

       function ajouterUnCommandePayer(cli,quantite,produit  ) {
      
        var a = cli.toString() ;
         var b = quantite.toString() ;
        var c = produit.toString() ;
        
       

       
     let  sql = "INSERT INTO commande (cli,quantite,produit,datedecommande ,payement , datedepayement) VALUES ( ?,?,? , NOW(), true , NOW() ); "  ;
    
     let query = connection.query(sql, [a ,b,c ] , (err, result) => {
       

      if (err) throw err;
      {
      
        
          }

          var idcom = result.insertId
  
          let  sqll = "INSERT INTO payement (idcom,modedachat, datedepayement) VALUES ( ?,? , NOW()); "  ;
    


          let query = connection.query(sqll, [idcom , 0  ] , (err, result) => {
       

            if (err) throw err;
            {
            
              
                }

              });
    
    });
     
   
   

       }

       function IdDergnierCommandeVia( res) {
        
       
     let  sql = "SELECT id FROM commande where id =  (SELECT  COUNT(*) as t FROM commande) ; "  ;
    
     let query = connection.query(sql, (err, result) => {
       
      if (err) throw err;
      {
      
        
        res.send( result)
        
          
        
           
          }
    
    });
     
   
    


       }
  

       function nombreDeCommande(i , res) {
        var id = i.toString()
            let  sql = "SELECT  COUNT(*) as t FROM ecommerce.commande where cli = ?" ;
              
            let query = connection.query(sql,[id]  , (err, result) => {
                  
              if (err) throw err;
                {
               
                }
                 console.log(result)
                res.send(result)
            
            });
            
          }
          
  
       function modifierUnCommande( cli,modedachat,modedepayement,quantite,produit,datedecommande, id) {
        let  sql = "UPDATE commande SET cli= ?, modedachat=?, modedepayement=? , quantite=? , produit=?, datedecommande=? WHERE id=?;";
        var a = cli.toString() ;
        var b = modedachat.toString() ;
        var c = modedepayement.toString() ;
        var d = quantite.toString() ;
        var e = produit.toString() ;
        var f = datedecommande.toString() ;
        var g = id.toString() ;
  
         let query = connection.query(sql,[a ,b,c,d,e,f,g]  , (err, result) => {
          
       if (err) throw err;
       {
         
         console.log("cherching")
           
           
           return result ;
           
           }
     
     });
     
          }
  
          module.exports = {
            chercherUnCommandeViaID : chercherUnCommandeViaID ,
           chercherUnCommandeViaClient : chercherUnCommandeViaClient ,
           chercherUnCommandeViaModeDePayement : chercherUnCommandeViaModeDePayement ,
           chercherUnCommandeViaModedachat : chercherUnCommandeViaModedachat ,
           chercherUnCommandeViaPrduit :  chercherUnCommandeViaPrduit ,
           chercherUnCommandeViaDateDeommande :  chercherUnCommandeViaDateDeommande ,
           chercherUnCommandeViaQuantite : chercherUnCommandeViaQuantite ,
           listerTouLesCommandesEtlivraison : listerTouLesCommandesEtlivraison ,
           ajouterUnCommande : ajouterUnCommande ,
           chercherUnCommandec:chercherUnCommandec,
           modifierUnCommande : modifierUnCommande ,
           supprimerUnCommande : supprimerUnCommande ,
           listerTousLesCommandes : listerTousLesCommandes ,
           nombreDeCommande:nombreDeCommande,
           ajouterUnCommandePayer : ajouterUnCommandePayer ,
           chercherUnCommandeb : chercherUnCommandeb ,
          }  ;