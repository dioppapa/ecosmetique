
 
  
 var curClientindex  = 0 ;
 var curParti  = 1 ;



 var tableDonne = {}
 
 
 tableDonne = tableDonneInitial()
 


 var curClientid = tableDonne[curClientindex].id

 
 var l = tableDonne.length ;
 createTableClient(l)
 cleackTableLine()
 updateDetail(tableDonne[0])
 boutonControl()
 chercher()

 
 function chercher() {

   
     $('#idinputsercha').off()
     $('#idinputsercha').keyup(function(event){
 
       var a = $(this).val()
       chercherClient( a)
        
  
     });
   

 }

 function curClientReturn(){

   return curClientid ;
 }

 function autocompl(data , chart){
   $('#serchtableapercu').html('')
   for( var a = 0 ; a < data.length ; a++){
   
   $('#serchtableapercu').append('<div class="divserch">     <span class="spant"> nom et adresse :</span>  <span class="spanv">'   + textToSpan( data[a].nom, chart) +' ' + textToSpan( data[a].prenom , chart)+' ' + textToSpan( data[a].adresse , chart)+' </span>  </br>  <span class="spant"> email :</span>  <span class="spanvv">' + textToSpan( data[a].email , chart) +'  </span> </div>' );
  
   }
 }
 function cssDivAutoCompl() {
   $(".divserch,.divserchp  ,.divserchc , .divserchl , .divserchpa").css({
     'border-bottom': '1px solid blue' ,
     'padding-left':'15px',
     'cursor':'pointer',

     'background-image': 'linear-gradient(#c6ffec,white)',
     
        
   }) ;
   $("#serchtableapercu").css({
     'display': 'block',
     'padding-top':'50px',
     }) ;
     $(".spant").css({
       'font-size': '8px',
       'font-style': 'normal',
       
       
     }) ;
     $(".spantv").css({
       'font-size': '9px',
       'font-style': 'normal',
       
       
     }) ;

     $(".spanv").css({
       'font-size': '10px',
       'font-style': 'italic',
       'font-weight': 'bold',
       'padding-left':'15px',
       
     }) ;
     $(".spanvv").css({
               
       'font-size': '11px',
       'font-style': 'italic',
       'font-weight': 'bold',
       'padding-left':'45px',
      
       
     }) ;
     $(".spanvc").css({
               
       'font-size': '12px',
       'font-style': 'italic',
       'font-weight': 'bold',
       'padding-left':'2px',
       'padding-right':'5px',
      
       
     }) ;
     $(".mark").css({
          'color':'blue',
      
      }) ;
    
      $('.divserch').hover(function(){
           
       var a = $(this).index()
       $(".divserch").eq(a).css({
       
         'background-image': 'linear-gradient(#87cefa,white)',
     
            
       }) ;

       },function(){
         
         $(".divserch").css({
       
           'background-image': 'linear-gradient(#c6ffec,white)',
           
              
         }) ;
     });
     
   
 }

 function textToSpan( text , chart) {
   var result
  
     result =   text.replace( chart, '<span class="mark">' + chart + '</span>')
    
    
    return result
   
 
  }
 
  function updateCssTableFromserch( id , table) {
     
   var a = idToindex( id , table) + 1
   curClientindex = a
   curenntcsstab( curClientindex)
       
 }

 
 
 function idToindex( id , table) {
 
   var index = 0 ;
 
   for( var a = 0 ; a < table.length ; a++){
     if( table[a].id == id)
     index = a 
 
 }
     
    return index - 1;
  
   
 }

 
 function supprimerClient() {
 
 
   $.ajax( {
                  
     type: 'GET',
     url: '/supprimerUnClient?client=' + curClientid,
     success: function(data){
       var index  = idToindex( curClientid , tableDonne)
 
       tableDonne.splice(index, 1)
       
       $('table .tableline').eq(index + 1).remove()
       curClientindex = 0

      
     }  
        
 });
 
 }
 
 

 
  function divSearchClick(data) {

   $(".divserch").click(function(){
     curClientid = data[$(this).index()].id
 
    
   updateDetail( data[ $(this).index() ])
   $("#serchtableapercu").css({
     'display': 'none', 
    
     }) ;
     updateCssTableFromserch(curClientid , tableDonne)
  

   });
  
  }
 
  

 
 
 function chercherClient( a) {
   $.ajax( {
                
     type: 'GET',
     url: '/lister?p=' + a,
     success: function(data){
        autocompl(data,a)
        cssDivAutoCompl()
        divSearchClick(data)
     }  
        
 });
 }
 
 

 function boutonControl() {
   $(document).off()
   $(document).keyup(function(event){
 
     
 
     var keycode = (event.keycode ? event.keycode:event.which) 
   
    if(keycode=='38'){
     if( curClientindex <=0)
     curClientindex = 0 ;
     else
     curClientindex --
   
    
     curenntcsstab( curClientindex)
 
    updateDetail(tableDonne[ curClientindex])
    curClientid = tableDonne[curClientindex].cli
 
       
      }
     else if (keycode=='40'){
       if(curClientindex>=l-1)
       curClientindex= l-1
         else
         curClientindex ++
         
         curenntcsstab( curClientindex)
       
       updateDetail(tableDonne[ curClientindex])
       curClientid = tableDonne[curClientindex].cli
   
   
   }
 
    });
   
   
 }
 
 function cleackTableLine() {
 
   $('.tableline').click(function(){

     
  
     curClientindex = $(this).index() - 1
     
     curClientid = tableDonne[curClientindex].id

     

  updateDetail(tableDonne[curClientindex])
  curenntcsstab(curClientindex)
  
 
});

   
 }


function updateDetail(data) {
 
 $('.clientdlabb').eq(0).text(data.nom)
 $('.clientdlabb').eq(1).text(data.prenom)

 var date = new Date(data.dateinscrip)
 var month    = date.getMonth()
 var day = date.getDate()
 var year = date.getFullYear()

 $('.clientdlabb').eq(2).text(day + '/' + month +  '/' + year )

 curClienservicetid = 0


}

function tableDonneInitial() {
 var result={};
 $.ajax({
   url:"/listerTable",
   async: false,  
   success:function(data) {
      result = data; 
   }
});
return result;
}



function createTableClient(l) {

      
 
 for( var a = 0 ; a < l ; a++){
   
   $('.tabclient').eq(0).append('<tr class="tableline"> <td> ' + (a+1)+ ' </td>    <td> ' +tableDonne[a].nom+ ' </td>   <td> ' +tableDonne[a].prenom+ ' </td>   <td> ' +tableDonne[a].pseudo+ ' </td> <td> ' +tableDonne[a].tel+ ' </td>   <td> '  +tableDonne[a].adresse+ ' </td> <td> ' +tableDonne[a].email+ ' </td>     </tr>' );
    
 
}   



}  


