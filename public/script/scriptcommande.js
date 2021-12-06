
         
         var indexpa  = 0 ;

         
          var tableDonnePayement = {}
         
        
          tableDonnePayement = tableDonnePayementf()
          
         
          var idpa = tableDonnePayement[indexpa].id
          
                var lpa = tableDonnePayement.length ;
      
                

               
     
 



    var id  = 0 ;

    var indexc = 0
    var comnonp = 0

    var tableDonneCommde = {}
    
    
    tableDonneCommde = tableDonneInitialCommande()

   
   function nombrDanTab( payement , index, table) {
  
    var size = 0 
     for( var a = 0 ; a < table.length ; a++){
       if( table[a].payement == index)
            size = size + 1
 
          
   
   }
       
   return size
    
     
   }
    
   

  
    var idcm = tableDonneCommde[0].id
  
    var lc = tableDonneCommde.length ;

    var indexl  = 0 ;

    var tableDonneLivraison = {}

   
    tableDonneLivraison = tableDonneInitiall()
    
    
    var idl = tableDonneLivraison[indexl].id
    
          var ll = tableDonneLivraison.length ;


        
          createTableCommande(lc)
         
         updateDetailCommande( tableDonneCommde[0] )
        
         cleackTableLinec()
         

         createTableLivriaison()
         cleackTableLinel()
        


         createTablePayemenent()
         cleackTableLinepa()
         

         function chercherc() {

         
    
          $('#idinputsercha').off()
          $('#idinputsercha').keyup(function(event){
            
            var a = $(this).val()
            if(a.length <= 0)
            $('#serchtableapercu').html('')

           
            chercherCommande( a)
             
       
          });

        }

        function divSearchClickc(data) {

          $(".divserchc").click(function(){
            idcm = data[$(this).index()].id
        
           
            updateDetailCommande(  data[ $(this).index() ] )
       
        
          $("#serchtableapercu").css({
            'display': 'none', 
           
            }) ;
            updateCssTableFromserchc(idcm , tableDonneCommde)
         
      
          });
         
         }

         function updateCssTableFromserchc( id , table) {
      
          var a = idToindex( id , table) + 1
          indexc  = a
          curenntcsstabc( indexc)
              
        }

        function chercherCommande( a) {

             $.a
             jax( {
                       
            type: 'GET',
            url: '/searchc?p=' + a ,
            success: function(data){
             
             
              autocomplc(data , a)
              cssDivAutoCompl()
              divSearchClickc(data)

            }  
               

           

        });
        }
      

        function autocomplc(data , chart){
         $('#serchtableapercu').html('')

           for( var a = 0 ; a < data.length ; a++){

            var pa = data[a].payement
            var cli = ' <span class="spant">client:</span>  <span class="spanvc">'   +   textToSpan( data[a].cli.toString() , chart)  +'</span>'
           var quantite = '<span class="spant">quantite:</span>  <span class="spanvc">' + textToSpan( data[a].quantite.toString() , chart) +'</span>'
           var produit = '<span class="spant">produit:</span>  <span class="spanvc">' +  textToSpan(  data[a].produit.toString(), chart) +'</span>'
           var payement = '<span class="spant">payement:</span>  <span class="spanvc"> ' +  textToSpan( 'non payé'  , 'non payé') +'</span> </br>'
           var datedecommande = '<span class="spant">date de commande:</span>  <span class="spanvc">'   + textToSpan(   formatDate(data[a].datedecommande) , chart)+'</span>'
           var datedepayement = '<span class="spant">date de payement:</span>  <span class="spanvc">' + textToSpan(  formatDate(data[a].datedepayement) , chart) +'</span>'
          
          
           if( pa==0)
           $('#serchtableapercu').append('<div class="divserchc"> ' + cli + quantite + produit + payement + datedecommande  + '  </div>' );
         

           else
           $('#serchtableapercu').append('<div class="divserchc"> ' + cli + quantite + produit  +'</br>'+ datedecommande + datedepayement + '  </div>' );
         

          }
        }

        function formatDate(date) {
          var da = new Date( date )
          var month    = da.getMonth() + 1
          var day = da.getDate()
          var year = da.getFullYear()

          var delai = day + '/' + month +  '/' + year
         
          return delai ;
  
          
        }

         function cleackTableLinec() {
  
          $('.tablelinec').click(function(){
      
            
         
            indexc = $(this).index() - 1
            
            idcm = tableDonneCommde[indexc].id
      
            
      
        
         updateDetailCommande( tableDonneCommde[indexc] )
         
         curenntcsstabc(indexc)
        
      });
      
          
        }
      

        function boutonControlc() {
          $(document).off()
          $(document).keyup(function(event){
        
            
        
            var keycode = (event.keycode ? event.keycode:event.which) 
          
           if(keycode=='38'){

            if( indexc <=0)
            indexc = 0 ;
            else
            indexc --
          
           
            curenntcsstabc( indexc)
        
            updateDetailCommande(tableDonneCommde[ indexc])
            idcm = tableDonneCommde[indexc].id
      
              
             }
            else if (keycode=='40'){
              if(indexc>=lc-1)
              indexc= lc-1
                else
                indexc ++
                
                curenntcsstabc( indexc)
              
              updateDetailCommande(tableDonneCommde[ indexc])

             
          idcm = tableDonneCommde[indexc].id
      
          
          }
        
           });
          
          
        }
        
      
    
   
    function createTableCommande(l) {

       
  
      for( var a = 0 ; a < l ; a++){

        var pa = tableDonneCommde[a].payement

        var dat = tableDonneCommde[a].datedepayement

        var date 

        if( dat!=null)
        date = formatDate(tableDonneCommde[a].datedepayement )
        else
        date = ""
        

        var  pay  = ""
        if(pa==0)
        pay = "non payé"
        else
        pay = "payé"
        $('.tabcommande').append('<tr class="tablelinec"> <td> ' + (a+1)+ ' </td>    <td> ' + tableDonneCommde[a].cli+ ' </td>   <td> ' + tableDonneCommde[a].quantite+ ' </td>   <td> ' + tableDonneCommde[a].produit+ ' </td> <td> ' + formatDate( tableDonneCommde[a].datedecommande )+ ' </td>   <td> '  +  pay + ' </td> <td> ' + date+ ' </td>     </tr>' );
           }   
    
    
   }  

  
   function indexToValeur( index , table) {
  
   
    for( var a = 0 ; a < table.length ; a++){
      if( table[a].id == index)
      return table[a];
   
  
  }
      
     
    
  }


 
  

  function indexToLivraisonValeur( index , table) {
  
   
    for( var a = 0 ; a < table.length ; a++){
      if( table[a].idco == index)
      return table[a];
   
  
  }
      
     
    
  }
    
 

   function updateDetailCommande(data) {

   
    
    var v =   indexToValeur( data.cli, tableDonne )


   
   
    
if(v==null)
$('.clientdlabbc').eq(0).text('non enregistré')
else {
  $('.clientdlabbc').eq(0).text(v.nom + ' ' + v.prenom)

}


var pr =   indexToValeur( data.produit, tableDonnep )




$('.clientdlabbc').eq(1).text(pr.marque)

    $('.clientdlabbc').eq(2).text(data.produit )

    $('.clientdlabbc').eq(3).text(data.quantite )
  
    $('.clientdlabbc').eq(5).text( 'orange money' )

   
    var  mp = data.payement
    var valp = ""

   

    if( mp==0){
     
      $('.divclientitem').eq(14).css({
        'display': 'none' , 
         
        
        }) ;
        $('.divclientitem').eq(15).css({
          'display': 'none' , 
           
          
          }) ;
          $('.divclientitem').eq(13).css({
            'display': 'block' , 
             
            
            }) ;
            valp = 'non payé'
            $('.clientdlabbc').eq(4).text( valp )
  
    }
    else {
      $('.divclientitem').eq(13).css({
        'display': 'none' , 
         
        
        }) ;

        $('.divclientitem').eq(14).css({
          'display': 'block' , 
           
          
          }) ;
          $('.divclientitem').eq(15).css({
            'display': 'block' , 
             
            
            }) ;
            
    }
    
   
  $('.clientdlabbc').eq(6).text(formatDate(data.datedepayement))
  
  

 
  
  
  
  var l =   indexToLivraisonValeur( data.id , tableDonneLivraison )
  
  

  var livre = l.livre 

  if(livre==0){
    $('.clientdlabbc').eq(7).text('non livré')

    $('.divclientitem').eq(17).css({
      'display': 'none' , 
       
      
      }) ;

      $('.divclientitem').eq(16).css({
        'display': 'block' , 
         
        
        }) ;

  }
 else {
  $('.divclientitem').eq(16).css({
    'display': 'none' , 
     
    
    }) ;
    $('.divclientitem').eq(17).css({
      'display': 'block' , 
       
      
      }) ;
 }
 

 
  
  $('.clientdlabbc').eq(8).text( formatDate(l.ddate ) )



  
  
  $('.clientdlabbc').eq(9).text(formatDate(data.datedecommande ))

  
   
  }
  
    

  

  

 
    

     

    

    
 

    function tableDonneInitialCommande() {
        var result={};
        $.ajax({
          url:"/commande",
          async: false,  
          success:function(data) {
             result = data; 
          }
       });
       return result;
      }
      
      

      