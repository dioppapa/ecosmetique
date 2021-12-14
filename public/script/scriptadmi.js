
 
    var dirc = getCategorieDir()

    var tr = 4
    var ld = dirc.length
    var f =  parseInt( ld/tr )
    
    var r =   parseInt( ld%tr )
    var ff =  ld -  r
    var hid  =  false
   
  
var indexDir = 0
   disableBoutnonClient()
   clickMenu()
   clickSupprimValide()
   clickAjouterDir()
   gestionStock()

  
  

 if(r==0)
createTableCategorie(f)
else if(r==1)
createTableCategorieR( 1 , ff)
else if(r==2)
createTableCategorieR( 2 , ff)
else if(r==3)
createTableCategorieR( 3 , ff)


clickDir()

boutonControl()

hideGainClick()
  
var nombcnp =  nombrDanTab( 'payement', 0, tableDonneCommde)
animeNoti($('#notaa')  , 10)
animeNoti($('#notbb') , nombcnp)



function clickAjouterDir( ) {

  $('.controlppp').eq(1).click(function(){
  
    var name = dirc[indexDir]
   
    var nname = $('.controlppp').eq(0).val()

    if( nname.length >= 2){
    modifierDir(name  , nname)
    $('.divvv').css({
           
      'display': 'none',
      
       });
  
    $('.controlp').eq(3).css({
             
      'display': 'block',
      
       });
      
    
  }

  }) ;

  $('.controlp').eq(2).click(function(){
 //   var name = dirc[indexDir]
  //  supprimerDir(name)
 }) ;



  $('.controlp').eq(3).click(function(){
  
   
    $('.divv').css({
             
      'display': 'block',
      
       });

    $('.controlp').eq(3).css({
             
      'display': 'none',
      
       });
     
}) ;

$('.controlp').eq(1).click(function(){
  
   
  $('.divvv').css({
           
    'display': 'block',
    
     });

  $('.controlp').eq(3).css({
           
    'display': 'none',
    
     });
   
}) ;


$('.controlpp').eq(1).click(function(){
  var name =  $('.controlpp').eq(0).val()

  if( name.length >= 2){
     ajouterDir(name)
    $('.divv').css({
           
      'display': 'none',
      
       });
  
    $('.controlp').eq(3).css({
             
      'display': 'block',
      
       });
      
    
  }
 
 
}) ;




}

function clickDir() {
  $('.tabparam td').click(function(){
 
   
   var a = $(this).index()
   var b = $(this).parent().index()
  
   indexDir   =  4*b + a

   updateCurDir(indexDir)
  
  }) ;
}

function modifierDir(name , nname){
  
  $.ajax( {
                 
    type: 'GET',
    url: '/modifierdir?name=' +  name + '&nname=' + nname,
    success: function(data){
      tabparamAfter(data)
    }
  

 
       
});
}

function tabparamAfter(data) {
  dirc = data
  indexDir = 0
   ld = dirc.length


f =  parseInt( ld/tr)



r =   parseInt( ld%tr )

ff =  ld -  r

$('.tabparam').html('')

if(r==0)
createTableCategorie(f)
else if(r==1)
createTableCategorieR( 1 , ff)
else if(r==2)
createTableCategorieR( 2 , ff)
else if(r==3)
createTableCategorieR( 3 , ff)

clickDir()
cssparam()




  
}
function supprimerDir(name) {
  $.ajax( {
                 
    type: 'GET',
    url: '/supprimerdir?name=' +  name,
    success: function(data){
      tabparamAfter(data)
    }
  

 
       
});
}

 function cligniote(id) {
   
  id 
  .css('width', '5px')
  .css('height','5px')
  .animate({
  width : 20,
  height : 20,
  },{
  duration : 1000
  , queue : true // ici peu importe sa valeur
  , complete : function(){
   
    cligniote(id)
  }
  });


   
 }


  function animeNoti( id , a) {
    
   
    if(a <= 3){
      id.css({
                                            
    
        'background-image': 'linear-gradient(white,green)',
       });
      

    }

    else if (a >= 3 && a <= 8){
      id.css({
                                            
    
        'background-image': 'linear-gradient(white,yellow)',
       });
       cligniote(id)
    }
    else {
      id.css({
                                            
    
        'background-image': 'linear-gradient(white,red)',
       });
       cligniote(id)
    }

   id.text(a)

  
  }
function hideGainClick() {

  $('#idhide').click(function(){
  

    $("#hidegain").css({
                                            
    
     'background-image': 'linear-gradient(white,#eee)',
    });
 
  if(hid == false){
    hideG()
    hid = true
  }
   else {
  showG()
  hid = false
   }
  
  

  
    });
  
  
}
function hideG() {
  $('#idhide')
  .css('left', '90%')
  .animate({
  left : '40%',
  
  },{
  duration : 1500
  , queue : true // ici peu importe sa valeur
  , complete : function(){
    
   
    $('#idhide').attr('src', "public/image/admi/flech.png");
     
             
  }
  });


    


    $('#hidegain')
  .css('left', '95%')
  .animate({
  left : '60%',
  
  },{
  duration : 1500
  , queue : true // ici peu importe sa valeur
  , complete : function(){
    
    
   
    
  
               
    }
    });


  
}


function showG() {
  $('#idhide')
  .css('left', '40%')
  .animate({
  left : '90%',
  
  },{
  duration : 1500
  , queue : true // ici peu importe sa valeur
  , complete : function(){
    
   
    $('#idhide').attr('src', "public/image/admi/moins.png");
     
             
  }
  });


    


    $('#hidegain')
  .css('left', '60%')
  .animate({
  left : '95%',
  
  },{
  duration : 1500
  , queue : true // ici peu importe sa valeur
  , complete : function(){
    
   
    $("#hidegain").css({
                                            
    
      'background-image': '',
     
  });
             
  }
  });


  
}

function ajouterDir(name) {
  $.ajax( {
                 
    type: 'GET',
    url: '/ajouterdir?name=' +  name,
    success: function(data){
      tabparamAfter(data)
     
   
  
       categorieh =  optionCategorie(data)
         
    }  
       
});
}
function updateCurDir( i) {

 
  $('.controlp').eq(0).text(dirc[indexDir])
  cssCurrentDir(indexDir)
  
  
  
}
function htmlDirc( data) {

  var div = '<div> <img class="dirimg" src="public/image/admi/archive.png"></img>  </br> ' +  data + '</div >'

  return div
}
   function createTableCategorie(f) {
    

    for( var a = 0 ; a < f; a++)
    $('.tabparam').append('<tr> <td>  ' + htmlDirc( dirc[a*4])   + ' </td>  <td>  ' +  htmlDirc( dirc[a*4 +1]) + ' </td> <td>  ' + htmlDirc( dirc[a*4 +2] ) + '  </td> <td>  '+ htmlDirc( dirc[a*4 +3]) + ' </td></tr>')
     

  }



  function createTableCategorieR( n ,  ff) {
    var fff =   parseInt(ff/4)

    
    if( n == 1){
      createTableCategorie(fff)
      $('.tabparam').append('<tr> <td> '   +  htmlDirc( dirc[ ff ] )+ '  </td>    </tr> ' );
    
    }
    else if ( n == 2) {
      createTableCategorie(fff)
      $('.tabparam').append('<tr> <td>   '+ htmlDirc(  dirc[ ff ]) + ' </td>   <td> ' + htmlDirc( dirc[ (ff+1) ])+ ' </td> </tr> ' );
    
    }
    else if ( n == 3) {
     
      createTableCategorie(fff)
      $('.tabparam').append('<tr> <td> ' + htmlDirc( dirc[ ff ] ) + ' </td> <td> ' + htmlDirc( dirc [ff +1] )+ ' </td><td> ' +  htmlDirc(dirc[ ff + 2] )+ ' </td>   </tr> ' );

    }
  
  }  
  

   function getCategorieDir() {
    var result = []
    $.ajax({
      url:"/listerCategorie",
      async: false,  
      success:function(data) {
        
             result = data
  
      }
   });
   return result;
  }


  function disableBoutnonClient() {
    $(".bt").css({
             
      'pointer-events': 'none',
      
       });

      
        
  
    
     
  }

  function disableBoutonCommande() {
    $(".bt").css({
             
      'pointer-events': 'none',
      
       });

      
  
    
     
  }



  function disableBoutnonProduit() {
    $(".bt").css({
             
      'pointer-events': 'none',
      
       });

       
         $(".bt").eq(1).css({
             
          'pointer-events': 'auto',
          
           });
         $(".bt").eq(5).css({
             
          'pointer-events': 'auto',
          
           });
           $(".bt").eq(6).css({
             
            'pointer-events': 'auto',
            
             });
      
  
    
     
  }


  function clickSupprimValide(){
    $('.inputvalidationa').eq(0).click(function(){
      supprimerClient()
  }) ;
  $('.inputvalidationb').eq(0).click(function(){
    $(".divsup").eq(0).css({
      'display': 'none',
}) ;
  }) ;

  $('.inputvalidationa').eq(1).click(function(){
    supprimerProduit()
}) ;
$('.inputvalidationb').eq(1).click(function(){
  $(".divsup").eq(1).css({
    'display': 'none',
}) ;
}) ;

}
    
  function clickMenu(){
    $('.classdivm').click(function(){
      var i = $(this).index()
      $(".classflech").css({
        'display': 'none',
  }) ;
      $(".classflech").eq(i).css({
        'display': 'block',
  }) ;
    
  $(".partimenu").css({
    'display': 'none',
}) ;
  $(".partimenu").eq(i).css({
    'display': 'block',
}) ;


      if( i == 0){
        chercher()
        disableBoutnonClient()
        boutonControl()
         curParti  = 1 

      }
      else if ( i == 1){
        curParti  = 2 
        chercherp()
        disableBoutnonProduit()
        boutonControlp()
         
      }
      else if ( i == 2){
        curParti  = 3 
        chercherc()
        disableBoutonCommande() 
        boutonControlc()
      }
      else if ( i == 3){
        curParti  = 4 
        chercherl()
        disableBoutonCommande() 
        boutonControll()
      }

      else if ( i == 4){
        curParti  = 5
      
        chercherpa()
        disableBoutonCommande() 
        boutonControlpa()
      }



         
        }) ;
  }


  
