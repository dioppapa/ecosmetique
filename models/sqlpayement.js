var connection  = require('./configmysql');





     


      function listerTousPayement(res) {
            let  sql = "SELECT * FROM payement;" ;
           

            let query = connection.query(sql , (err, result) => {
                  
              if (err) throw err;
                {
               
                }
        
                res.send(result)
            
            });
            
          }
 
         
          function chercherpayement( n , res) {
            let sql = "" ;
           

            var tab = []
            var nd =   n.toString()
            var date =  "%" + nd + "%"
          
    

            if(nd.length >= 4){
             
              sql = "select * from  payement   where id = ? or idcom = ? or  datedepayement like  ? ;"   
              tab = [ n , n  ,date ]
            }
    
    
    
            else {
              sql = "select * from  payement   where id = ? or idcom = ?  ;"   
              tab = [ n , n   ]
         
             }
    
          
        
            let query = connection.query(sql, tab,(err, result) => {
        
                if (err) throw err;
                   {
            
                    }
        console.log(result)
                     res.send(result)
        
            });
        
          }

          function chercherpayementb( n , res) {
            let sql = "" ;
           

          
            var nom = "%" + n + "%"
   
            
            sql = "select * from  payement  where datedepayement like ?;"   
           
            let query = connection.query(sql, [ nom ] ,(err, result) => {
        
                if (err) throw err;
                   {
            
                    }
        
                     res.send(result)
        
            });
        
          }


 module.exports = {
   
  listerTousPayement : listerTousPayement,
  chercherpayement : chercherpayement ,
  chercherpayementb:  chercherpayementb ,
   
  }  ;