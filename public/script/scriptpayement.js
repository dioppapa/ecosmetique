

function divSearchClickpa(data) {

  $(".divserchpa").click(function(){
    idpa = data[$(this).index()].id

   
  $("#serchtableapercu").css({
    'display': 'none', 
   
    }) ;
    updateCssTableFromserchpa(idpa , tableDonnePayement)
 

  });
 
 }
 
 function updateCssTableFromserchpa( id , table) {
    
  var a = idToindex( id , table) + 1
  indexpa = a
  curenntcsstabpa( indexpa)
      
}

function autocomplpa(data , chart){
  $('#serchtableapercu').html('')

  
  var tab = ["orange money" , "autre"]
  var datedepayement = ""

    for( var a = 0 ; a < data.length ; a++){

     
      var modedachat = ""
      var pa = data[a].modedachat
      var commande = ' <span class="spant">commande:</span>  <span class="spanvc">'   +   textToSpan( data[a].idcom.toString() , chart)  +'</span>'
      if( pa==0)
      modedachat = '<span class="spant">mode:</span>  <span class="spanvc">' +  textToSpan( tab[0]  , tab[0]) +'</span> '
     else if( pa==1)
     modedachat = '<span class="spant">mode:</span>  <span class="spanvc">' +  textToSpan( tab[1]  , tab[1]) +'</span> '
  

    
     if(chart.length>= 4)
       datedepayement = '<span class="spant">date:</span>  <span class="spanvc">'   + textToSpan(   formatDate(data[a].datedepayement) , chart)+'</span>'
     else
       datedepayement = '<span class="spant">date:</span>  <span class="spanvc">'   +   formatDate(data[a].datedepayement) +'</span>'
     
     
    
      $('#serchtableapercu').append('<div class="divserchpa"> ' + commande  +modedachat + datedepayement + '   </div>' );
    
    
   

   }
 }

function chercherpa() {

       
  
  $('#idinputsercha').off()
  $('#idinputsercha').keyup(function(event){
    
    var a = $(this).val()
    if(a.length <= 0)
    $('#serchtableapercu').html('')

   
    chercherPayement( a)
     

  });

}

function chercherPayement( a) {

  $.ajax( {
            
 type: 'GET',
 url: '/searchpa?p=' + a ,
 success: function(data){
  
  
  autocomplpa(data , a)
  cssDivAutoCompl()
  divSearchClickpa(data)
 
 }  
    



});
}

function boutonControlpa() {
  $(document).off()
  $(document).keyup(function(event){

    

    var keycode = (event.keycode ? event.keycode:event.which) 
  
   if(keycode=='38'){

    if( indexpa <=0)
    indexpa = 0 ;
    else
    indexpa --
  
    curenntcsstabpa(indexpa)
  
    idpa = tableDonnePayement[indexc].id

      
     }
    else if (keycode=='40'){
      if( indexpa >=lpa-1)
      indexpa = lpa-1
        else
        indexpa ++
        
        curenntcsstabpa( indexpa)
      
     
     
        idpa = tableDonnePayement[indexc].id

  
  }

   });
  
  
}



function cleackTableLinepa() {

  $('.tablelinepa').click(function(){

    
 
    indexpa = $(this).index() - 1
    
    idpa = tableDonnePayement[indexpa].id

    


 
 curenntcsstabpa(indexpa)

});

  
}


function tableDonnePayementf() {
  var result={};
  $.ajax({
    url:"/listerPayement",
    async: false,  
    success:function(data) {
       result = data; 
    }
 });
 return result;
}


function  createTablePayemenent() {

    
  for( var a = 0 ; a < lpa ; a++){

     var pa = tableDonnePayement[a].modedachat

    var dat = tableDonnePayement[a].datedepayement

    var date 

    if( dat!=null)
    date = formatDate(dat )
    else
    date = ""
    

    var  pay  = ""
    if(pa==0)
    pay = "orange money"
    else
    pay = "autre"
    
    $('.tabpayement').append('<tr class="tablelinepa"> <td> ' + (a+1)+ ' </td>    <td> ' + tableDonnePayement[a].idcom+ ' </td>   <td> ' +pay + ' </td>   <td> ' +date+ '      </tr>' );
     
  
}   




}  

