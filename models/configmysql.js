var mysql = require('mysql');

 var connection= mysql.createConnection({
   host:'sql4.freemysqlhosting.net',
   user:'sql4456445',
   password:'9jCiwxfKxB',
   port:'3306',

   database:'sql4456445'
 });
 
connection.connect(function(error){
   if(!!error){
     console.log(error);
   }else{
     console.log('Connected!: to ecomerce)');
   }
 });  
module.exports = connection; 


