
   var connection  = require('../models/configmysql');

    
   function listerTousLesProduits( res) {
      let sql = "SELECT * FROM produit ";
      
      let query = connection.query(sql, (err, result) => {
  
          if (err) throw err;
          {
            
              
             res.send( result) 
              
              }
  
      });
    }
  
  
    
  
    function chercherUnProduitViaID( id) {
      chercherUnProduit( id , 1)
    }

    function chercherUnProduitViaClasse( id) {
        chercherUnProduit( id , 2)
      }
      function chercherUnProduitViaMarque( id) {
        chercherUnProduit( id , 3)
      }
      function chercherUnProduitViaPrix( id) {
        chercherUnProduit( id , 4)
      }
      function chercherUnProduitViaDescription( id) {
        chercherUnProduit( id , 5)
      }
  
    
  
    
  
  
    function chercherUnProduit( name , id) {
      let sql = "" ;
  
      if(id==1)
  sql = "SELECT * FROM produit where id = ?" ;
  else if ( id== 2)
  
  sql = "SELECT * FROM produit where classe like '%?%' "
  else if ( id== 3)
  sql = "SELECT * FROM produit where marque like '%?%' "
  else if ( id== 4)
  sql = "SELECT * FROM produit where prix = ? " ;
  else if ( id== 5)
  sql = "SELECT * FROM produit where description like '%?%' "
  

      
      let query = connection.query(sql,[name] , (err, result) => {
  
          if (err) throw err;
          {
            
               
              return result ;
              
              }
  
      });
    }
    function chercherUnProduita( n , res) {
      let sql = "" ;
     
      sql = "select * from  produit where  classe like ? or marque like ? or description like ? limit 7"   
      var nom = "%" + n + "%"
 
      let query = connection.query(sql, [ nom , nom , nom] ,(err, result) => {

          if (err) throw err;
             {
      
              }

              res.send(result)
  
      });
  
    }

    function chercherUnProduitb( n , res) {
      let sql = "" ;

      var r 
     
      sql = "select * from  produit where  classe like ? or marque like ? or description like ? limit 3"   
      var nom = "%" + n + "%"
 
      let query = connection.query(sql, [ nom , nom , nom , nom] ,(err, result) => {

          if (err) throw err;
             {
      
              }
              

              res.send(result)
  
      });

   
    }
  
      function supprimerUnProduit( id , res) {
  
       let  sql = "delete  FROM produit where id  =  ?"  ;
      
       var i = id.toString()
        let query = connection.query(sql , [i]  ,(err, result) => {
    
            if (err) throw err;
            {
              
                res.send( result) ;
                
                }
    
        });
  
      }
  
  
  
      function ajouterUnProduit( classe, marque,prix , description , img , res) {
  var a = classe.toString() ;
  var b = marque.toString() ;
  var c = prix.toString() ;
  var d = description.toString() ;
  var e = img.toString() ;
  
     let  sql = "INSERT INTO produit (classe,marque,prix ,description , img) VALUES ( ?,?,?,?,?); " 
    
     let query = connection.query(sql,[a,b,c,d, e] , (err, result) => {
       
      if (err) throw err;
      {
        
        res.send(result)  
          
          }
    
    });
     
  
       }
  
  
       function modifierUnProduit( classe, marque,prix , description ,img , id) {
        let  sql = "UPDATE produit SET classe= ?, marque= ?,  prix = ?, description = ? , img = ? where id= ?;";
        var a = classe.toString() ;
        var b = marque.toString() ;
        var c = prix.toString() ;
        var d = description.toString() ;
        var e = img.toString() ;
        var f = id.toString() ;

         let query = connection.query(sql, [a , b, c, d ,e , f] , (err, result) => {
       
       if (err) throw err;
       {
         
           
           return result ;
           
           }
     
     });
     
          }
  
          module.exports = {
              
              chercherUnProduitViaID : chercherUnProduitViaID ,
              chercherUnProduitViaClasse : chercherUnProduitViaClasse ,
              chercherUnProduitViaMarque : chercherUnProduitViaMarque ,
              chercherUnProduitViaPrix : chercherUnProduitViaPrix ,
              chercherUnProduitViaDescription : chercherUnProduitViaDescription ,
              supprimerUnProduit:supprimerUnProduit ,
              ajouterUnProduit : ajouterUnProduit ,
              modifierUnProduit : modifierUnProduit ,
              chercherUnProduita : chercherUnProduita ,
           listerTousLesProduits : listerTousLesProduits ,
           chercherUnProduitb:chercherUnProduitb ,
          }  ;