var mysql = require('mysql');

 var connection= mysql.createConnection({
   host:'remotemysql.com',
   user:'TAjktmiiR9',
   port:'3306',
   password:'rzGkBAqkuR',
   database:'TAjktmiiR9'
 });
 
connection.connect(function(error){
   if(!!error){
     console.log(error);
   }else{
     console.log('Connected!: to ecomerce wayy');
   }
 });  
module.exports = connection; 


