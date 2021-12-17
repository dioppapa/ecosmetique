var mysql = require('mysql');

 var connection= mysql.createConnection({
   host:'sql4.freemysqlhosting.net',
   user:'sql4459593',
   port:'3306',
   password:'DglvYEBBPI',
   database:'sql4459593'
 });
 
connection.connect(function(error){
   if(!!error){
     console.log(error);
   }else{
     console.log('Connected!: to ecomerce wayy');
   }
 });  
module.exports = connection; 


