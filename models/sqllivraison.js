var connection  = require('./configmysql');

function nombreDeLivraison(i , res) {
    var id = i.toString()
        let  sql = "SELECT  COUNT(*) as l FROM ecommerce.livraison where cli = ?" ;
          
        let query = connection.query(sql,[id]  , (err, result) => {
              
          if (err) throw err;
            {
           
            }
    
            res.send(result)
        
        });
        
      }


      function chercherLivraison( n , res) {
        let sql = "" ;
        var tab = []
        var date =  "%" + n + "%"
        var nd =   n.toString()


        if(n == 0 ){
         
          sql = "select * from  livraison  where id = ? or idco = ?  or livre = false;"   
          tab = [ n , n   ]
     
        }

        else  if(n == 1 ){
         
          sql = "select * from  livraison  where id = ? or idco = ?  or livre = true;"   
          tab = [ n , n   ]
     
        }


        else {
          sql = "select * from  livraison  where id = ? or idco = ?  ;"   
          tab = [ n , n   ]
     
         }

         if(nd.length >= 4){
         
          sql = "select * from  livraison  where id = ? or idco = ? or ddate like  ? ;"   
          tab = [ n , n  ,date ]
        }


        let query = connection.query(sql, tab ,(err, result) => {
  
          if (err) throw err;
             {
      
              }

             
               res.send(result)
  
      });
      }

      function chercherLivraisonb( n , res) {
        let sql = "" ;
       
        sql = "select * from  (select * from  livraison where livre = 1 ) as lb  where  ddate like ? ;" 
          
        var nom = "%" + n + "%"
   
        let query = connection.query(sql, [ nom] ,(err, result) => {
  
                 if (err) throw err;
               {
        
                }
  
                 
                res.send(result)
    
        });
  
      }



      function listerTousLesLivraison(res) {
            let  sql = "SELECT * FROM livraison  ;" ;
              
            let query = connection.query(sql , (err, result) => {
                  
              if (err) throw err;
                {
               
                }
        
                res.send(result)
            
            });
            
          }
 
         

 module.exports = {
   
   nombreDeLivraison : nombreDeLivraison  ,
   listerTousLesLivraison : listerTousLesLivraison ,
   chercherLivraison : chercherLivraison ,
   chercherLivraisonb : chercherLivraisonb ,

   
  }  ;