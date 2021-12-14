
   var indexpr  = 0 ;


   var tableDonnep = {}
   var categorie = {}
   
   
   tableDonnep = tableDonneInitialp()
   
   categorie  = getCategorie()

   
  
   var marque = optionMarque()
   var categorieh =  optionCategorie(categorie.categorie)
   
   var idpr = tableDonnep[indexpr].id
   var lp = tableDonnep.length ;
  
     
   createTableProduit()
   updateDetailp(tableDonnep[indexpr])
   cleackTableLinep() 
   validerAjouterProduit()
   
   function chercherp() {

    
    $('#idinputsercha').off()
    $('#idinputsercha').keyup(function(event){

      var a = $(this).val()
      chercherProduit(a)
       
 
    });
  

}

function changementPourModification() {
   
  $('#divclientdp').html('')

  $('#divclientdp').append( '<div class="divclientitem"> <label class="clientdlab"> Categorie</label><select class="inputa">  <option value="Ordinateur">Ordinateur</option><option  value="Television">Television</option><option value="Accessoire">Accessoire</option> </select> </div> <div class="divclientitem"> <label class="clientdlab">Marque</label> <select class="inputa">  ' + marque + '</select>  </div><div class="divclientitem"> <label class="clientdlab"> Prix</label>  <input class="inputa" type="number" > </input> </div> <div class="divclientitem"> <label class="clientdlab"> Description</label>  <textarea class="inputa"> </textarea> <label class="clientdlabb" style="display: none;"> </label></div>')
 
  
  csscorps()
  cssinputa()
 
  validerInput()
  $(".divajout").css({
      'display': 'block' ,
    
  }) 
  
  
  $('.ajvalider').eq(0).attr("disabled", true)
 
  $(".tablelinep").css({
             
    'pointer-events': 'none',
    
     });
 
 
}

 function optionMarque() {
   var option = ""
   for( var a = 0 ; a < categorie.marque.length ; a++){
    option +=   "<option >" +  categorie.marque[a].marque + " </option>"
   }
  
   return option 
 }

 function optionCategorie(categorie) {
  var option = ""
  for( var a = 0 ; a < categorie.length ; a++){
   option +=   "<option >" +  categorie[a] + " </option>"
  }
 
  return option 
}
function changementPourAjout(a) {
   
  $('#divclientdp').html('')

  
  $('#divclientdp').append( '<div class="divclientitem"> <label class="clientdlab"> Categorie</label><select class="inputa"> '+ categorieh + ' </select> </div> <div class="divclientitem"> <label class="clientdlab">Marque</label> <select class="inputa">  ' + marque + '</select>  </div><div class="divclientitem"> <label class="clientdlab"> Prix</label>  <input class="inputa" type="number" > </input> </div> <div class="divclientitem"> <label class="clientdlab"> Description</label>  <textarea class="inputa"> </textarea> <label class="clientdlabb" style="display: none;"> </label></div>')
 
  csscorps()
  cssinputa()
 
  validerInput(a)
  $(".divajout").css({
      'display': 'block' ,
    
  }) 
  
  
  $('.ajvalider').eq(0).attr("disabled", true)
 
  $(".tablelinep").css({
             
    'pointer-events': 'none',
    
     });
 
 
}

function validerInput(a) {
  var vp = false
  var vt = false
  var vf = false

  $("#file").change(function(){

    vf = true

    if( vp == true && vt == true && vf == true){
      if(a==1)
    $('.ajvalider').eq(0).attr("disabled", false)
    else
    $('.ajvalider').eq(2).attr("disabled", false)
   
    }

  });
  

  $('.inputa').eq(2).keyup( function () {

    var prix = $('.inputa').eq(2).val()
  
      if(prix.length>=3){
        vp = true
             
      }
      
     
              })

              $('.inputa').eq(3).keyup( function () {

                var text = $('.inputa').eq(3).val()
  
               
                  if(text.length>= 15 &&  text.length <= 200 ){
                    vt = true
                 
                  }
                 
               
                  
                 
                          })
                          $('.inputa').keyup( function () {

      
                            if( vp == true && vt == true && vf == true)
                            
                            if(a==1)
                            $('.ajvalider').eq(0).attr("disabled", false)
                            else
                            $('.ajvalider').eq(2).attr("disabled", false)
                           
                                          })
                          
 
}

function inputFileChanged(){
  $("#file").change(function(){

    uploadImageTemporel()
   
    $("#submit").click()

  });

  
}

function uploadImage() {
  $("#myForm").submit(function (e) {
  
    e.preventDefault();
    var formData = new FormData(this);

    var classe =  $('.inputa').eq(0).val()
   
    var n =  $("#file").val()

    
    var b  =  n.lastIndexOf('\\')

    var name = n.substring(b + 1)
  
   
    

    
    $.ajax({
        type: "POST",
        url: "/upload?temporel=false&name=" + name + "&classe=" + classe,
        data: formData,
        processData: false,
        contentType: false,
        success: function(r){
           
           
        },
        error: function (e) {
            
        }
    });

});

}

function uploadImageTemporel() {
  $("#myForm").submit(function (e) {
  
    e.preventDefault();
    var formData = new FormData(this);
    var n =  $("#file").val()

    
    var b  =  n.lastIndexOf('\\')

    var name = n.substring(b + 1)
  
    
    $.ajax({
        type: "POST",
        url: "/upload?temporel=vrai&name="+ name,
        data: formData,
        processData: false,
        contentType: false,
        success: function(r){
           
          $("#idapercupp").attr("src", "public/image/temporel/" + r) ;

        },
        error: function (e) {
            
        }
    });

});

}

function uploadFile() {
  inputFileChanged()
  validerInput()
  $("#file").click()
 
}

function annulationPourAjout() {
                

  $('.inputa').eq(3).replaceWith( '<label class="clientdlabb"> </label>')
  $('.inputa').eq(2).replaceWith( '<label class="clientdlabb"></label>')

  $('.inputa').eq(1).replaceWith( '<label class="clientdlabb"> </label>')
  $('.inputa').eq(0).replaceWith('<label class="clientdlabb"> </label>')
  cssinputannuler()
  updateDetailp(tableDonnep[indexpr])

  $(".divajout").css({
    'display': 'none',
   
    }) ;
    $(".bt").eq(5).css({
             
      'pointer-events': 'auto',
      
       });
    $(".tablelinep").css({
             
      'pointer-events': 'auto',
      
       });

}

function supprimerProduit() {

  if( indexpr <= 18) {
    alert("vous ne pouve plus supprimer chercher à modifier pour une eventuelle changement")
  }
  else {

 
  var classe = $('.clientdlabb').eq(5).text()
  
 
  

  var name = $('.clientdlabb').eq(9).text()

      
  $.ajax( {
                 
    type: 'GET',
    url: '/supprimerUnProduit?produit='+ idpr+ '&classe='+ classe+ '&name=' + name,
    success: function(data){
          
      tableDonnep = tableDonneInitialp()
   
       
     lp = tableDonnep.length ;
     
     
     if(indexpr==0)
     indexpr  = 0
     else if(indexpr == lp )
     indexpr = lp-1
     
    
     idpr = tableDonnep[indexpr].id

     $('.tabclientp').html('')
     $('.tabclientp').append(' <tr><th>id</th><th>classe</th><th>marque</th><th>prix</th><th>description</th> <th>img</th>  </tr>')
     
      createTableProduit()
      csscorps()
      curenntcsstabp( indexpr)
   
     updateDetailp(tableDonnep[indexpr])
          
     cleackTableLinep()
            $(".divsup").css({
              'display': 'none',
             
              }) ;
              

    }  

     
       
});

}
}
function ajouterProduit( ) {

   
  var n =  $("#file").val()

  
  var b  =  n.lastIndexOf('\\')

  var classe = $('.inputa').eq(0).val()
  var  marque = $('.inputa').eq(1).val()
    var prix =  $('.inputa').eq(2).val()
    var description = $('.inputa').eq(3).val()
    var  img =  n.substring(b + 1)
   
    
  $.ajax( {
                 
    type: 'GET',
    url: '/ajouterproduit?classe=' + classe + '&marque=' +marque+ '&prix='+ prix + '&description='+ description+ '&img=' + img ,
    success: function(data){
      tableDonnep = tableDonneInitialp()
   
   idpr = tableDonnep[indexpr].id
    lp = tableDonnep.length ;
    
indexpr = lp -1

     $('.tabclientp').html('')
     $('.tabclientp').append(' <tr><th>id</th><th>classe</th><th>marque</th><th>prix</th><th>description</th> <th>img</th>  </tr>')
    
   createTableProduit()

   annulationPourAjout()

   cleackTableLinepAfter()
   boutonControlp()
   curenntcsstabp(indexpr)
   
   cssDivHeader() 
cssbody()
csscorps()

     
    
    }  
       
});

}

function getCategorie() {
  var result = {}
  $.ajax({
    url:"/categorie",
    async: false,  
    success:function(data) {

      
           result = data

    }
 });
 return result;
}

function modifierProduit( ) {

   
  var n =  $("#file").val()

  
  var b  =  n.lastIndexOf('\\')

  var classe = $('.inputa').eq(0).val()
  var  marque = $('.inputa').eq(1).val()
    var prix =  $('.inputa').eq(2).val()
    var description = $('.inputa').eq(3).val()
    var  img =  n.substring(b + 1)
   
    
  $.ajax( {
                 
    type: 'GET',
    url: '/updateproduit?classe=' + classe + '&marque=' +marque+ '&prix='+ prix + '&description='+ description+ '&img=' + img + '&id=' + idpr ,
    success: function(data){
     

       tableDonnep = tableDonneInitialp()
   
       
    
     $('.tabclientp').html('')
     $('.tabclientp').append(' <tr><th>id</th><th>classe</th><th>marque</th><th>prix</th><th>description</th> <th>img</th>  </tr>')
     
      createTableProduit()
      annulationPourAjout()
      updateDetailp(tableDonnep[indexpr])
    

     
 cleackTableLinep()
    boutonControlp()
      csscorps()
      curenntcsstabp( indexpr)
     
    
            $(".divsup").css({
              'display': 'none',
             
              }) ;
    
    }  
       
});

}
function chercherProduit(a) {
      
  
  $.ajax( {
                 
    type: 'GET', 
    url: '/searchp?p=' + a ,
    success: function(data){
      autocomplp(data,a)
      cssDivAutoCompl()
      divSearchClickp(data)
    }  
       
});

    
    $("#serchtableapercu").css({
      'display': 'block',
     
      }) ;

   

}

function textToSpan( text , chart) {
  var result
 
    result =   text.replace( chart, '<span class="mark">' + chart + '</span>')
   
   
   return result
  

 }
  function autocomplp(data , chart){
    $('#serchtableapercu').html('')
    for( var a = 0 ; a < data.length ; a++){
    
    $('#serchtableapercu').append('<div class="divserchp">  <span class="spant"> categorie et marque  :</span>  <span class="spanv">'   + textToSpan( data[a].classe, chart) +' '+ textToSpan( data[a].marque , chart)+' ' + textToSpan( data[a].prix.toString() , chart)+ 'F </span>  </br>     <span class="spant"> desription :</span>  <span class="spanvv">' + textToSpan( data[a].description , chart) + '   </span> </div>' );
   
    }
  }

  function divSearchClickp(data) {

    $(".divserchp").click(function(){
      idpr = data[$(this).index()].id
  
     
    updateDetailp( data[ $(this).index() ])
    $("#serchtableapercu").css({
      'display': 'none', 
     
      }) ;
      updateCssTableFromserchp(idpr , tableDonnep)
   

    });
   
   }

   function updateCssTableFromserchp( id , table) {
      
    var a = idToindex( id , table) + 1
    indexpr  = a
    curenntcsstabp( indexpr)
        
  }

   function createTableProduit() {
    var l = tableDonnep.length ;
  
   
    
    
    for( var a = 0 ; a < l ; a++){
          
      $('.tabclientp').append('<tr class="tablelinep"> <td> ' +  (a + 1 ) + ' </td>    <td> ' + tableDonnep[a].classe+ '  </td>  <td> ' + tableDonnep[a].marque+ '  </td>     <td> ' + tableDonnep[a].prix+ '  </td>  <td> ' + tableDonnep[a].description+ '  </td>  <td> ' + tableDonnep[a].img+ '  </td>   </tr>' );
       
    }
  }
  

  
  function gestionStock() {
  
    $('#gestion').click(function(){

      $("#tabproduit").css({
        'display': 'none',
        
     }) ;
     $("#tableapercup").css({
      'display': 'none',
      
   }) ;
     
     $("#divgestion").css({
      'display': 'block',
      
   }) ;

  
      
     
  
});

    
  }
   
  function boutonControlp() {
    $(document).off()
    $(document).keyup(function(event){
  
      
  
      var keycode = (event.keycode ? event.keycode:event.which) 
    
     if(keycode=='38'){
      if( indexpr <=0)
      indexpr = 0 ;
      else
      indexpr --
    
     
      curenntcsstabp( indexpr)
  
     updateDetailp(tableDonnep[ indexpr])
     idpr = tableDonnep[indexpr].cli
  
        
       }
      else if (keycode=='40'){
        if(indexpr>= lp -1)
        indexpr= lp-1
          else
          indexpr ++
          
          curenntcsstabp( indexpr)
        
        updateDetailp(tableDonnep[ indexpr])
        idpr = tableDonnep[indexpr].cli
    
    
    }
  
     });
    
    
  }
  function cleackTableLinep() {
  
  
    $('.tablelinep').click(function(){

      
   
      indexpr = $(this).index() - 1
      
     
     
       idpr = tableDonnep[indexpr].id
  
     
  
      
   updateDetailp(tableDonnep[indexpr])
   curenntcsstabp( indexpr)
   
  
});

    
  }

  function cleackTableLinepAfter() {
  
  
    $('.tablelinep').click(function(){

      
   
      indexpr = $(this).index()  - 1
      
     
     
       idpr = tableDonnep[indexpr].id
  
      
 
      
   updateDetailp(tableDonnep[indexpr])
   curenntcsstabp( indexpr)
   
  
});

    
  }

  function cleackTableLinepAfterM() {
  
  
    $('.tablelinep').click(function(){

      
   
      indexpr = $(this).index()  
       
     
     
       idpr = tableDonnep[indexpr].id
  
      
 
      
   updateDetailp(tableDonnep[indexpr])
   curenntcsstabp( indexpr)
   
  
});

    
  }

  
  function  validerAjouterProduit(){
    $('.ajvalider').eq(0).click(function(){
     uploadImage()
   
      $("#submit").click()

      ajouterProduit( )
    });
    $('.changeimage').click(function(){
      uploadFile()
    });
    $('.ajvalider').eq(1).click(function(){
      annulationPourAjout()
      
    });
    
    $('.ajvalider').eq(2).click(function(){
      uploadImage()
   
      $("#submit").click()
      modifierProduit( )
    });
    
  
    
  }
  
  function updateDetailp(data) {
    
    $('#idapercupp').attr('src', "public/image/categorie/" + data.classe +"/" + data.img)
  
    $('.clientdlabb').eq(5).text( data.classe)
    $('.clientdlabb').eq(6).text( data.marque)
    $('.clientdlabb').eq(7).text( data.prix)
    $('.clientdlabb').eq(8).text( data.description)
    $('.clientdlabb').eq(9).text( data.img)

    
  
    
  }

  function tableDonneInitialp() {
    var result={};
    $.ajax({
      url:"/produit",
      async: false,  
      success:function(data) {
         result = data; 
      }
   });
   return result;
  }
  
  
  
  
   
  

          

         
  

         
         


