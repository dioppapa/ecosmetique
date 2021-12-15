var mysql = require('mysql');

 var connection= mysql.createConnection({
   host:'mysql5045.site4now.net',
   user:'a7dd44_ecommer',
   port:'3306',
   password:'Salamata2004',
   database:'db_a7dd44_ecommer'
 });
 
connection.connect(function(error){
   if(!!error){
     console.log(error);
   }else{
     console.log('Connected!: to ecomerce wayy');
   }
 });  
module.exports = connection; 


