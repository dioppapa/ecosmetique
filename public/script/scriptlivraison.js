
   
   
   

   function autocompll(data , chart){
    $('#serchtableapercu').html('')

      for( var a = 0 ; a < data.length ; a++){

       var pa = data[a].livre
       var commande = ' <span class="spant">commande:</span>  <span class="spanvc">'   +   textToSpan( data[a].idco.toString() , chart)  +'</span>'
     
      var livraison = '<span class="spant">livraison:</span>  <span class="spanvc">' +  textToSpan( 'non livre'  , 'non livre') +'</span> '
      var livraisona = '<span class="spant">livraison:</span>  <span class="spanvc">' +  textToSpan( 'livre'  , 'livre') +'</span> '
   
      var datedelivraison = '<span class="spant">date de livraison:</span>  <span class="spanvc">'   + textToSpan(   formatDate(data[a].ddate) , chart)+'</span>'
      var datedelivraisona = '<span class="spant">date de livraison:</span>  <span class="spanvc">'   +  formatDate(data[a].ddate) +'</span>'
     
     
      if( pa==0)
      $('#serchtableapercu').append('<div class="divserchl"> ' + commande + livraison + '  </div>' );
    

      else {
        if( pa==1)
        $('#serchtableapercu').append('<div class="divserchl"> ' + commande + livraisona +datedelivraisona + '  </div>' );
        else
        $('#serchtableapercu').append('<div class="divserchl"> ' + commande  +datedelivraison + '  </div>' );
      
      }
     

     }
   }

      
  function chercherl() {

         
    
    $('#idinputsercha').off()
    $('#idinputsercha').keyup(function(event){
      
      var a = $(this).val()
      if(a.length <= 0)
      $('#serchtableapercu').html('')

     
      chercherLivraison( a)
     
     
    });

  }

  function chercherLivraison( a) {

    $.ajax( {
              
   type: 'GET',
   url: '/searchl?p=' + a ,
   success: function(data){
    
    autocompll(data , a) 
    cssDivAutoCompl()
    divSearchClickl(data)

   }  
      

  

});
}

          function cleackTableLinel() {
  
  
            $('.tablelinel').click(function(){
        
              
           
              indexl = $(this).index() - 1
              
             
             
               idl = tableDonneLivraison[indexl].id
          
             
          
              
           curenntcsstabl( indexl)
           
          
        });
        
            
          }

          
   function createTableLivriaison() {

   
      for( var a = 0 ; a < ll ; a++){
      
         var pa = tableDonneLivraison[a].livre

        var dat = tableDonneLivraison[a].ddate

        var date 

        if( dat!=null)
        date = formatDate(dat )
        else
        date = ""
        

        var  pay  = ""
        if(pa==0)
        pay = "non livré"
        else
        pay = "livré"
        
        $('.tablivraison').append('<tr class="tablelinel"> <td> ' + (a+1)+ ' </td>    <td> ' + tableDonneLivraison[a].idco+ ' </td>   <td> ' +pay + ' </td>   <td> ' +date+ '      </tr>' );
         
       
      
    }   
    
    
    
    }  
    
    function updateCssTableFromserchl( id , table) {
      
      var a = idToindex( id , table) + 1
      indexl = a
      curenntcsstabl( indexl)
          
    }

    function divSearchClickl(data) {

      $(".divserchl").click(function(){
        idl = data[$(this).index()].id
    
       
      $("#serchtableapercu").css({	
        'display': 'none', 
       
        }) ;
        updateCssTableFromserchl(idl , tableDonneLivraison)
     
  
      });
     
     }
     
     
    function boutonControll() {
      $(document).off()
      $(document).keyup(function(event){
    
        
    
        var keycode = (event.keycode ? event.keycode:event.which) 
      
       if(keycode=='38'){
        if( indexl <=0)
        indexl = 0 ;
        else
        indexl --
      
       
        curenntcsstabl( indexl)
    
       
        idl = tableDonneLivraison[indexl].id
    
          
         }
        else if (keycode=='40'){
          if(indexl>= ll -1)
          indexl= ll-1
            else
            indexl++
            
            curenntcsstabl( indexl)
          
          
          idl = tableDonneLivraison[indexl].id
      
      
      }
    
       });
      
      
    }
    

      
    function tableDonneInitiall() {
        var result={};
        $.ajax({
          url:"/livraison",
          async: false,  
          success:function(data) {
             result = data; 
          }
       });
       return result;
      }

     


