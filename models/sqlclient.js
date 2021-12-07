
   var connection  = require('../models/configmysql');

    
   function listerTousLesClients(res) {
   
   
    fa( function(result){
  
      res.send(result)
      
   });
  
  
    }
  
    function validerlesClient(res , pseudo , passe  , req) {
   
      fa( function(result){
    
     
    var verifie =  verifierClient(pseudo , passe , result , res , req)
  
        if( verifie!= null){
   
            var a = { "success":"success", "user":verifie}
            console.log(verifie)
              res.send( a)
            }
           
             else{
              var a = { "success":"failed", "user":verifie}
              
               res.send(a)
              }
            
  
    });
        
      }
  
  
      function verifierClient(pseudo , passe , data , res) {
        var a = 0
        var l = data.length
           var verifie 
  
            while (a < l) {
        
               if( data[a].pseudo.localeCompare(pseudo) == 0 && data[a].pass.localeCompare(passe) == 0 ) {
                verifie =  data[a]
                break; 
              } else {
                a++
                }
        
              }
              return verifie 
             
            
  
    
        
      }
  
    
  
    function chercherUnClientsViaID( id) {
      chercherUnClients( id , 1)
    }
  
    function chercherUnClientsViaNom( nom) {
      chercherUnClients( nom, 2)
    }
  
    function chercherUnClientsViaprenom( prenom) {
      chercherUnClients( prenom , 3)
    }
  
   function chercherUnClientsViapseudo( pseudo) {
    chercherUnClients( pseudo , 4)
    }
    function chercherUnClientsViaTel( tel) {
      chercherUnClients( tel , 5)
      }
      
      function chercherUnClientsViaadresse( adresse) {
        chercherUnClients( adresse , 6)
        }
  
        function chercherUnClientsViaEmail(email) {
          chercherUnClients(  email, 7)
          }
  
          function chercherUnClientsViaPass(pass) {
            chercherUnClients(  pass, 8)
            }
   
  
            function chercherUnClientsb( n , res) {
              let sql = "" ;
             
              sql = "select * from  client where id =  ? or tel like ?"   
              var nom = "%" + n + "%"
         
              let query = connection.query(sql, [n , nom] ,(err, result) => {
  
                  if (err) throw err;
                     {
              
                      }
  
                      res.send(result)
          
              });
  
            }
  
  
            function chercherUnClientsc( n , res) {
              let sql = "" ;
             
              sql = "select * from client inner join clientservice on client.id = clientservice.cli where nom like ? or prenom like ? or pseudo like ?  or adresse like ? or email like ? or pass like ? limit 10;"
           
  
                var nom = "%" + n + "%"
              let query = connection.query(sql,[nom , nom, nom,nom , nom , nom],(err, result) => {
  
                  if (err) throw err;
                     {
              
                      }
  
                      res.send(result)
          
              });
  
            }
  
            function chercherUnClientsd( n , res) {
              let sql = "" ;
             
              sql = "select * from  client where  adresse  like ? ;"
           
  
                var nom = "%" + n + "%"
              let query = connection.query(sql,[nom , nom, nom,nom , nom , nom],(err, result) => {
  
                  if (err) throw err;
                     {
              
                      }
  
                      res.send(result)
          
              });
  
            }
  
  
    function chercherUnClients( name , id) {
      let sql = "" ;
  var n = name.toString();
      if(id==1)
  sql = "SELECT * FROM client where id =  ?"  
  else if ( id== 2)
  
  sql = "SELECT * FROM client where nom like '%?%' "
  else if ( id== 3)
  sql = "SELECT * FROM client where prenom like '%?%' "
  else if ( id== 4)
  sql = "SELECT * FROM client where pseudo like '%?%' "
  else if ( id== 5)
  sql = "SELECT * FROM client where tel = ?"  
  else if ( id== 6)
  sql = "SELECT * FROM client where adresse like '%?%' "
  else if ( id== 7)
  sql = "SELECT * FROM client where email like '%?%' "
  else if ( id== 8)
  sql = "SELECT * FROM client where pass like '%?%' "
      
      let query = connection.query(sql,[n] ,(err, result) => {
  
          
              
              return result ;
              
      });
    }
      
  
      function supprimerUnClient( id , res) {
  
       

        let sql = "SELECT * FROM  client   inner join clientservice on client.id = clientservice.cli where client.id = " + id + ";";
        let query = connection.query(sql, (err, result) => {
    
            if (err) throw err;
            {
              }
              
              supprimerUnService( result[0].id , id , res)
               
        });
      
  
      }
  

      function supprimerUnService( id , idd , res) {
  
        
        let  sql = "delete FROM clientservice where id =  ?" ;
      
        var i = id.toString();
         let query = connection.query(sql, [i], (err, result) => {
     
             if (err) throw err;
             {
               
            }
                console.log('sup client' + result)
                supprimerClientService( idd , res )
     
         });
      }
  
      function supprimerClientService( id , res ) {
  
        
        let  sql = "delete FROM client where id =  ?" ;
      
        var i = id.toString();
         let query = connection.query(sql, [i], (err, result) => {
     
             if (err) throw err;
             {
               
            }
                console.log(result)
                res.send('succes')
     
         });
      }
  
  
  
      function ajouterUnClient( nom,prenom,pseudo,tel,adresse,email,pass  , res) {
  var t = tel.toString() ;
  
     let  sql = "INSERT INTO client (nom,prenom,pseudo,tel,adresse,email,pass, ddate) VALUES ( ?,?,?,?,?,?,?,now()); "  ;
    
     let query = connection.query(sql, [nom ,prenom,pseudo,t,adresse,email,pass ] , (err, result) => {
       

      
      if (err) throw err;
      
       var data = {}
  
       var us = {}
  
      us.name = nom
      us.prenom = prenom
      us.id = result.insertId
  

      ajouterService(us.id , 0, 0 )
    
      data.client = true
    data.connected = true
    data.user = us
           
      console.log(data)
        res.send( data)
          
          
    
    });
     
  
       }
  

       function ajouterService(cli , nombcom, nomlivr ){
        var clia = cli.toString() ;
        var nombcoma = nombcom.toString() ;
        var nomlivra = nomlivr.toString() ;
        
           let  sql = "INSERT INTO clientservice (cli , nombcom, nomlivr , dateinscrip) VALUES ( ?,?,?,now()); "  ;
          
           let query = connection.query(sql, [ clia,nombcoma,nomlivra ] , (err, result) => {
             
            if (err) throw err;
            
            
          
               
                
          
          });
           
        
             }
        
  
       function modifierUnClient( nom,prenom,pseudo,tel,adresse,email,pass , id , date) {
        let  sql = "UPDATE client SET nom= ?, prenom=?, pseudo=? , tel=? , adresse=?, email=?, pass=? date_inscription = ? WHERE id=?;";
        var t = tel.toString() ;
  
         let query = connection.query(sql,[nom ,prenom,pseudo,t,adresse,email,pass , date,id]  , (err, result) => {
       
       if (err) throw err;
       {
         
         console.log("cherching")
           
     
           return result ;
           
           }
     
     });
     
          }
  
          module.exports = {
              chercherUnClientsViaID : chercherUnClientsViaID ,
           chercherUnClientsViaNom : chercherUnClientsViaNom ,
           chercherUnClientsViaprenom : chercherUnClientsViaprenom ,
           chercherUnClientsViapseudo : chercherUnClientsViapseudo ,
           chercherUnClientsViaadresse : chercherUnClientsViaadresse ,
           chercherUnClientsViaTel :  chercherUnClientsViaTel ,
           chercherUnClientsViaEmail : chercherUnClientsViaEmail ,
           chercherUnClientsViaPass : chercherUnClientsViaPass ,
           ajouterUnClient : ajouterUnClient ,
           modifierUnClient : modifierUnClient ,
           supprimerUnClient : supprimerUnClient ,
           listerTousLesClients : listerTousLesClients ,
           chercherUnClientsb : chercherUnClientsb ,
           chercherUnClientsc:chercherUnClientsc,
           chercherUnClientsd:chercherUnClientsd,
           validerlesClient : validerlesClient ,
          }  ;
  
  
          function fa(callback){
        
            let sql = "SELECT * FROM  clientservice  inner join client on client.id = clientservice.cli;";
            let query = connection.query(sql, (err, result) => {
        
                if (err) throw err;
                {
                  }
                  return callback(result);
            });
          }
  
            function fb(callback){
        
              let  sql = "SELECT  COUNT(*) as t FROM ecommerce.commande " ;
                
              let query = connection.query(sql,[id]  , (err, result) => {
                    
                if (err) throw err;
                  {
                 
                  }
                   console.log(result)
                  res.send(result)
              
              });
      
            
           
      }
      
     