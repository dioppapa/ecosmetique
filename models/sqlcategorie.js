
   var connection  = require('../models/configmysql');

    
   function listerTousLesCategorie(res) {

    var cat = {}
     let sql = "SELECT DISTINCT (marque)  FROM categorie";
   
     const aa = './public/image/categorie'  ;
     var fs = require('fs') ;
  
     fs.readdir( aa    , function (err , data) {
    
      cat.categorie = data

        }) 

          
  let query = connection.query(sql, (err, result) => {

            if (err) throw err;
            {
              }
          cat.marque = result


        res.send(cat)
          
        });
       
          
      
  
   
      
      
   
  
  
    }
  
    
          module.exports = {
            
            listerTousLesCategorie : listerTousLesCategorie ,
           
          }  ;
  
  
          function fa(callback){
        
            let sql = "SELECT * FROM categorie";
            let query = connection.query(sql, (err, result) => {
        
                if (err) throw err;
                {
                  }
                  return callback(result);
            });
          }
  
            
      
            
           
      
      