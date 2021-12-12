    
var nom 
var prenom
var idClient 
var clientConnected = false
var reduir = false
var lshow = false
var anime = false
var regress = false
var ajouternewp = true
var b = true
var aa = 0.001
        var aap = 0.001

        var a = 0.1
        var ap = 0.08
        var produit = tableDonneInitial()
       var XX = $('body').width() - 160
        var tr = 3
        var curtab = 1
        var datacurtab = {}
        var indextr  = 0
        var firstindex = 0
        var curIndexTab = 0
        var curIndexTabid = 0
        var curIndexTabdebut = 0
        var curIndexTabfin = 0
         var pagnierData = [[],[],[]]
         var pagnierDatapayer = [[],[],[]]
         var curIndexTabDatap = []
         var inc = 0
         
         var affichpagn = false
         
         var price = []
         
         
         var parti
        var lp  = produit.length
        
        
        var pa = lp/(tr*3)
        
        if ( lp < 1){
          parti = 1
         }
        
         else if ( pa >  parseInt( pa)) {
        
          parti =  parseInt( pa) + 1
         }
         else if(  pa == parseInt( pa) )
               parti = pa
        
        var rest = lp %  ( tr*3 )

        //appelle aux methodes
        destroySection()
        createTableproduit(produit , 0, tr)
      
htmlPlus()

chercherProduit()
htmldivanimepagnier()
plus()

cssPlus()

cssTable()
cssUnProduit()
cssDisplayAjoutOrBy(0)
 cssAjouterOk()
 cssdivPagnier()
 cssBody()
 cssPagnier()

 showHideLogin()

 //animePagnierA()
 cssdivPagnierInit()
 
   //var nl =  textt($('.pdescription').eq( curIndexTab) , curIndexTab) 
       
 // curveGlobale(nl , curIndexTab )

 
  
  
  
 var dataUser = testConn()
 
 clientConnected = dataUser.connected
 
 
  if(clientConnected == true) {
  nom = dataUser.user.name
  prenom = dataUser.user.prenom
  idClient = dataUser.user.id
  afficahgePourClient( dataUser.user)
  
 }
 
 else {
  nom = ''
  prenom = ''
 idClient = 0
  
 }
 
 var elem = document.getElementById("lserch");

      
 
 
        // connection methode

        function  destroySection(){
      
      

          $('#destroy').click(function(){
            
           
            destroy()
           
        });
          
        }
        
        function destroy() {
          $.ajax({
            url:"/decnt",
            
            success:function(data) {
        
              window.location.href = '/'
              
            }
         });
          
        }
        
        function testConn() {
          var result = {}
          $.ajax({
            url:"/testConn",
            async: false,  
            success:function(data) {
              
                   result = data
        
            }
         });
         return result;
        }
        // payement et autre
        function  payerDirectement() {

  $('.commander').click(  function(){

    if(affichpagn){
    
      
    }
    else{
      var idproduit =   parseInt( $('.mark').eq(  curIndexTab ).text()) 

    
      if( contain( pagnierDatapayer[2] , idproduit ) ){
          
        alert( 'deja acheter'  )
  
         
        } else {
          pagnierDatapayer[0].push( idClient)
          pagnierDatapayer[1].push(  1)
          pagnierDatapayer[2].push(  idproduit)
        }       
  
        $(".tablelinepA .p .divcomm .commander").eq(curIndexTab).attr('src', "public/image/acceuil/ok.png");
             
             
  
              
  
        $(".tablelinepA .p .divcomm .ajouter").eq(curIndexTab).css({
          'display': 'none',
          
          }) ;
  
          $(".tablelinepA .p .divcomm .lac").eq(curIndexTab).css({
            'display': 'block',
            
            }) ;
        getPagnierAchatDirect( idproduit ,idClient  )
  
    }
    
    }) ;
  
}

function getPagnierAchatDirect( idp , idc ) {

  var data = [[],[],[]]
        
  var r  = pagnierDatapayer[0].length
  pagnierDatapayer[0] = []

  for( var a = 0 ; a < r ; a++ ){
  pagnierData[0].push( idClient)

  }

  var data = []

  
  data.push( idc)
  data.push(  1)
  data.push(  idp)
 

  $.ajax({
    url:"/postepagnierachatdirect",
    datatype : "JSON" ,
    type:"POST" ,
    data:  {data : data}, 
     success:function(data) {
           
    }
  });

  
  
}


        //creata table 
        function createTableproduit(data , debut , fin) {
     
          $('.tableproduit').html('')
              
          for ( var a = debut ; a < fin ; a++){
              var p = createProduithtml( data[(3*a)])
              var pp = createProduithtml( data[(3*a + 1)])
              var ppp = createProduithtml( data[(3*a + 2)])
              var divc =   createProduitPagnier()
          
              $('.tableproduit').append('<tr class="tablelinepA"> <td class="p">'+ p + divc+'  </td>  <td class="p">     '+ pp  + divc+ '  </td>  <td class="p">  '+ ppp +  divc+ '    </td>   </tr>' );
           
        
            
            
        
            
          } 
          
        
          clickProduit( )
          ProduitHover()

          cssCurProduit(curIndexTab)

          ajouterPagnier()
          payerDirectement()
    
         
        }  

        function createProduithtml(data) {

          var id = '<mark class="mark">' + data.id + ' </mark> </br>'
          var img = '<img class="impgp" src ="public/image/categorie/' + data.classe  +'/' + data.img + '"/> '
          var   classe = '<label class="pclasse"> '+data.classe   + '</label> ' ;
             
          var prix = '<label class="pprix"> '+data.prix+ 'F </label> ' ;
             var divclasseprix = '<div class="divclasspri">' + classe + prix + '</div>'
            var description = '<div class="pdescription"> '+ data.description+ ' </div>' ;
        
            return  '<div class="divunproduit" >' + id + img + divclasseprix + description + '<div> ';
            
        } 
        
        function createProduitPagnier() {
    
      

          var bc = '<div class="commanderb"> <img class="commander"  src ="public/image/acceuil/pp.png"/> </br> <label class="lac"> acheté </label> </div>'
          
          var ba = '<div class="ajouterb"> <img class="ajouter"  src ="public/image/acceuil/plus.png"/> </br> <label class="laj"> ajouté </label></div>'
      
           
            
          var div = '<div class = "divcomm"  > ' + bc + ba  + ' </div>'
      
          
            return div
          
        }
     
        
        
        function  clickProduit(){
          $('.p').click(function(i){
              
             
            
              var indexp = $(this).parent().index()
              indextr = indexp 
              var index = $(this).index()
          
              var y = 3*indexp + index
          curIndexTab = y
          
          firstindex = 3*indextr
           
          
             
           
             
          cssdivPagnier()
           
          
                
            });
            
        }

       
       
function ProduitHover(){

  $('.tablelinepA .p').hover(function(){

    if(affichpagn){

    } else {
      var indexp = $(this).parent().index()
    indextr = indexp 
    var index = $(this).index()
    firstindex = 3*indextr
         
    var y = 3*indexp + index

    cssCurProduit(y)
    
    cssDisplayAjoutOrBy(y)
    
   
   // reverseCurveGlobale( curIndexTab , y )
    
   // var nl =  textt($('.pdescription').eq(y) , y ) 

   
      
   // curveGlobale(nl , y )
    
      curIndexTab = y
      
     
      cssdivPagnier()
 
    }
    
     

  },function(){
    
   

});

 
  
        
     
 }

 // faire des achat
 function  ajouterPagnier() {

  $('.ajouter').click(  function(){
    
    if(affichpagn){

    }
    else {
      var idproduit =   parseInt( $('.mark').eq(  curIndexTab ).text()) 

    
   
      if(  contain( pagnierData[2]  , idproduit) ){
          
        alert( 'mo gui ci biir'  )
  
         
        } else {
          
          pagnierData[0].push( idClient)
          pagnierData[1].push(  1)
          pagnierData[2].push(  idproduit)
          
    }
    
    curIndexTabDatap.push( curIndexTab)

       

    $(".tablelinepA .p .divcomm .ajouter").eq(curIndexTab).css({
      
     
      
 
      }) ;
      $(".tablelinepA .p .divcomm .ajouter").eq(curIndexTab).attr('src', "public/image/acceuil/ok.png");
     
     

      

      $(".tablelinepA .p .divcomm .commander").eq(curIndexTab).css({
        'display': 'none',
        
        }) ;

        $(".tablelinepA .p .divcomm .laj").eq(curIndexTab).css({
          'display': 'block',
          
          }) ;

        
          affichagePagnier()

     

          $('.divpagnier').css({
           'display': 'none',
          });
            
           
       
      }
    
     
     
     
     
      
  
     
    
});
}

        function tableDonneInitial() {
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
        

        //curve

        //css produit
        function cssTable() {

          $(".tableproduit").css({
            'position': 'relative',
            'width': '70%',
          
          'border-collapse': 'separate',
          'border-spacing': '8px 40px',
          
          'left': '50%',
                    '-ms-transform': 'translateX(-50%)',
                    'transform': 'translateX(-50%)',
          
           });
          
           $("#tableproduitdiv").css({
            
           });
          
           
          
           
          
           
               
           $(".tablelinepA").css({
            
          
           });
          
           $(".p").css({
            
          
           });
          
           
          
          }
          function cssUnProduit() {
            $('.divunproduit').css({
              'position': 'relative',
              
            });
            
            
            $(".mark").css({
          
              'display': 'none',
            
              
               });
            
               $(".impgp").css({
              
               
                'position': 'relative',
        
                'width': '50%',
                'height': '50%',
        
                
                'left': '50%',
                '-ms-transform': 'translateX(-50%)',
                'transform': 'translateX(-50%)',
        
               
                         
                 });
                 $(".divclasspri").css({
                  'margin-top': '5px',
                
                 
                   });
                 
                 $(".pclasse").css({
                  'float': 'left',
                  'font-weight': 'bold',
                   'font-size': '15px',
                   'color': 'blue',
                    'font-family': 'Arial',
                    'font-style': 'italic',
                   });
                   
                   $(".pprix").css({
                    'float': 'right',
                    'width': 'max-content',
                    'margin': '0px',
                  //  'color': '#00ffff',
                
                    'font-size': '17px',
                    'font-style': 'italic',
                    
        
               'font-weight': 'bold',
               'font-family': 'Courier New Courier, monospace',
        
               'box-shadow': '1px 1px 5px black',
               'border-radius': '5%',
                     });
              
                   $(".pdescription").css({
                    'margin-top': '30px',
                    'color': 'white',
                    'font-weight': 'bold',
                    'font-size': '10px',
                    'display': 'none',
                    'text-align': 'center',
                     
               'font-family': 'Courier New Courier, monospace',
        
                     });
            
            
          }
        
        
        function cssCurProduit(y) {

          $(".tablelinepA .p").css({
            'border': '1px solid black',
            'box-shadow': '1px 1px 5px black',
           'border-radius': '5%',
           // 'background':'rgba(0,0,0,0.3)',
            '-webkit-transition': '.8s ease-in-out',
            'transition': '.8s ease-in-out ', 
            
        
            }) ;
             
                   
          $(".tablelinepA .p").eq( y).css({
            
          
           'border': '1px solid blue',
           'box-shadow': '1px 1px 5px black',
           'border-radius': '5%',
         //   'background':'rgba(0,0,0,0.3)',
           
            }) ;
             
           
        
             
          $('.divunproduit').css({
            
          });
          
                
             
         }
        
        //css ajouter acheter
        function  cssAjouterOk(){
    
          $('.divcomm').css({
           
            'width': '100%',
            'position': 'absolute',
             'top': '50%',
            'left': '50%',
            '-ms-transform': 'translate(-50%, -50%)',
            'transform': 'translate(-50%, -50%)',
                      
              });
              $('.commander').css({
              
                'width': '40px',
                'height': '40px',
                'margin-left': '5px',
                   
                    'border-radius': '50%', 
                  });
      
                  $('.ajouter').css({
                   
                    'width': '40px',
                    'height': '40px',
                    'margin-right': '5px',
                   
                    'border-radius': '50%', 
                   });
      
                 
                   $('.commanderb').css({
                    'float': 'left',
                   
                    'position': 'relative',
                       });
      
                  
                      $('.ajouterb').css({
                        'float': 'right',
                      
                         'position': 'relative',
                        
                       });
                       $('.lac').css({
                        'font-weight': 'bold',
                        'font-size': '12px',
                        'position': 'absolute',
                        'top': '90%',
                        'left': '48%',
            '-ms-transform': 'translate(-50%, -50%)',
            'transform': 'translate(-50%, -50%)',
            'display': 'none',
                       });
                       $('.laj').css({
                        'font-weight': 'bold',
                        'font-size': '12px',
                        'position': 'absolute',
             'top': '90%',
            'left': '48%',
            '-ms-transform': 'translate(-50%, -50%)',
            'transform': 'translate(-50%, -50%)',
            'display': 'none',
                       });
      
        }
      
        
        
        function cssDisplayAjoutOrBy(a) {
          $('.divcomm').css({
            
            'display': 'none',
                       
              });
              $('.divcomm').eq(a).css({
            
                'display': 'block',
                           
                  });
        
                  $('.ajouter').css({
                    
                    });
                 
                  $('.ajouter').hover(function(){
                    
                    $('.ajouter').eq(a).css({
                     
                      
                      });
        
                    },function(){
                      $('.ajouter').eq(a).css({
                  
            
                      });
                  });
        
         }

         //html pagnier
         function pagnier() {
          var p = '<img class="pagnier"  src ="public/image/acceuil/ppp.png"/>'
          var tt = '<label class="pagnierlabel"/>cliquer ici pour valider pagnier</label>'
        var div = '<div id="pagnierAnimation" >' + p + tt +  '</div>'

          $('#paginerdiv #pagnierAnimation').remove();
          
          $('#paginerdiv').append(div)
         
        clickPagnier()
        
         
        
          
           }
        
        
           function htmldivanimepagnier() {
            var p = '<div id="paginerdiv"> </div>'
            $('html #paginerdiv').remove();
            $('html').append(p)
           
            pagnier()
           
            
             }
          

             function clickPagnier() {
      
      
      $("#paginerdiv").bind('click',clickPagnierBinde)
   
     
     
    
}

function clickPagnierBinde(){
  if(pagnierData[0].length != 0)  {
      
    showPagnier()
  
    flouter()
      disableclick()
      affichpagn = true

    }
   
}
function showPagnier() {
   
  $(".divpagnier").css({
    'display': 'block',
    
     })
     
    csshtmlPagnier()
    
    animeDivPagnier()
     
}

function  affichagePagnier() {
  var pd = []
  price = []
  for( var j = 0 ;  j <   pagnierData[2].length  ;  j++) {

  for( var i = 0 ;  i <   produit.length  ;  i++) {

    if( produit[i].id == pagnierData[2][j]  ) {
      pd.push( htmlProduitdansPagnier( produit[i].id ,  produit[i].img , produit[i].classe , produit[i].marque , produit[i].prix , pagnierData[1][j]) )
        price.push( produit[i].prix )
    }
                  
  }
}
 
  htmlPagnier( pd  )
  
  bouttonSup()
  acheterViaPagnier()
  commaderDansPagnier()
  ajoutEtdiminutionQuantite()
  
   reduirePagnier()

}
function reduirePagnier() {
  $('.btreduire').click(function(){
   
   
    $('.divpagnier').css({
      'display': 'none',
     });
     annulerFlouter()
     
    ableclick()

    affichpagn  = false

 });

 }

function ajoutEtdiminutionQuantite() {
 
  var val = 1

var index = 0
      

$('.plus').each(function(i){

  var save = 1 

  $('.plus').eq(i).click(function(){
 
 
  save = parseInt( $('.spannomb').eq( i).text())
    
  
   var prixTotal    =  0
   if( index == i) {
   
   val =    val + 1

   save = val
   if( val >= 100)
           val = 100

   var prix  =   price[i]
   
  

   $('.spannomb').eq( i).text( save)
   pagnierData[1][i] = save
   $('.spantotalpro').eq(i).text( prix * val + 'F')
  

   $('.spannomb').each(function(i){

    prixTotal = prixTotal + parseInt( $('.spantotalpro').eq(i).text())
   

  });
  
  
  $('.spantotal').text( prixTotal + 'F')
   } 
   else {

    index = i
    save = parseInt( $('.spannomb').eq( i).text())
        
    val = save 
   
    if( index == i) {
      
      val =    val + 1
    
     save = val
     
     if( val >= 100)
     val = 100
     
     $('.spannomb').eq( i).text(save)
           
     pagnierData[1][i] = save
     var prix  =   price[i]
     
     var prixTotal  = 0
     $('.spantotalpro').eq(i).text( prix * val + 'F')

     $('.spannomb').each(function(i){

      prixTotal = prixTotal + parseInt( $('.spantotalpro').eq(i).text())
     
      
  
 
    });
    
    $('.spantotal').text( prixTotal + 'F')
}

     

   }

  });
  

});

      $('.moins').each(function(i){
      
         var save = 1 

        $('.moins').eq(i).click(function(){
        
  save = parseInt( $('.spannomb').eq( i).text())
    
  
  var prixTotal    =  0

          if( index == i) {
            save = val
            val =    val - 1
            if( val <= 0)
            val = 1

           
           

            var prix  =   price[i]
            var prixTotal  = 0

            $('.spannomb').eq( i).text(save)
            pagnierData[1][i] = save
     
            $('.spantotalpro').eq(i).text( prix * val+ 'F')
            $('.spannomb').each(function(i){

              prixTotal = prixTotal + parseInt( $('.spantotalpro').eq(i).text())
             
         
            });
            
            
             $('.spantotal').text( prixTotal + 'F')

          }

          else {
         
         
           index = i
          
              save = parseInt( $('.spannomb').eq( i).text())

           val = save 

           if( index == i) {
           
            val =    val - 1
            if( val <= 0)
            val = 1

            save = val 

            $('.spannomb').eq( i).text(save)
        

            var prix  =   price[i]
            var prixTotal  = 0
             pagnierData[1][i] = save
     
          
            $('.spantotalpro').eq(i).text( prix * val + 'F')
            $('.spannomb').each(function(i){

              prixTotal = prixTotal + parseInt( $('.spantotalpro').eq(i).text())
             
         
            });

            
            
            
            $('.spantotal').text( prixTotal + 'F')

          }
          }

        });

      });
     
     
}

function acheterViaPagnier() {
  $('.acheter').click(function(){
    
      
        
         purchaseClicked() 
 });

 }

 function commaderDansPagnier() {
  $('.btcommander').click(function(){
   
      

    if(clientConnected == true){
      commanderViaPagnier()
    }
    else {
      $('.divpagnier').css({
        'display': 'none',
       });
       showL()
      
     
    }
     
      

       
      

      

     

 });

 }

 function commanderViaPagnier() {
  getPagnierCommande()
  $('.divpagnier').css({
    'display': 'none',
   });
       
  

}
function getPagnierCommande( ) {
  var r  = pagnierData[0].length
pagnierData[0] = []

for( var a = 0 ; a < r ; a++ )
pagnierData[0].push( idClient)

$.ajax({
url:"/postepagniercommander",
datatype : "JSON" ,
type:"POST" ,
data:  {data : pagnierData}, 
 success:function(data) {
        
        pagnierData = [[],[],[]]
        annulerFlouter()
        ableclick()
        initTabAfterCom()
}
});

}

function initTabAfterCom(){
  for(  var a = 0 ; a < curIndexTabDatap.length ; a++){
   $(".tablelinepA .p .divcomm .commander").eq(curIndexTabDatap[a]).css({
     'display': 'block',
     
     }) ;

     $(".tablelinepA .p .divcomm .laj").eq(curIndexTabDatap[a]).css({
       'display': 'block',
       
       }) ;

       $(".tablelinepA .p .divcomm .ajouter").eq(curIndexTabDatap[a]).attr('src', "public/image/acceuil/plus.png");

  }

  curIndexTabDatap = []








}


function htmlPagnier(pd  ) {
  
 
  
  $('body .divpagnier').remove()
   
  var a = ''
  $('.divpagnier').html('')
  
  for( var i = 0 ; i < pd.length ; i++){
   a =  a + '<tr class="trproduitpagnier"> ' + pd[i]  + '</tr>'   
    
 }
 
 
 
 
 var tabp  = '<div class="tablepagnier">  <table> ' + a + '  </table> <div>'
 
   var bt = '<input type="button" class="acheter" value="Acheter">'
   var btcommander = '<input type="button" class="btcommander" value="Commander">'
   var btreduir = '<input type="button" class="btreduire" value="R">'
 
 
   var pricetotal = 0
 
     for ( var j = 0 ; j < pd.length ; j++){
     pricetotal = pricetotal +  price[j]
     
     }
   
   
   
       var divac = '<div class="divac"> '+ bt + btcommander +' </div>'
   
       var spantotal = '<div class="spantotala"> <span class="spantotalb">facture globale :</span> <span class="spantotal">'+ pricetotal +'F</span> </div>'
   
       var divvalider = '<div class="divvalider"> ' + spantotal+ divac +'</div>'
     
      var divpagnier = '<div class="divpagnier"> </div>'

  
  

  
      $('body').append( divpagnier)
    
      $('.divpagnier').append( tabp)
    
   
      $('.divpagnier').append( divvalider)
      $('.divpagnier').append( btreduir)
    
     
     
 }
 

 
 function htmlProduitdansPagnier( id , img , categorie , marque , total , quantite) {
  
  var idpdp = '<mark  class="idproduitpagnier" style ="display:none;">  ' + id + ' </mark>'

  
  var imgpr = '<img class="imgpr"  src ="public/image/categorie/' + categorie +'/' + img +'"/>'
     
  
  var descrip = '  <div   class="descrip"> <span class="des">Description : </span> <span   class="descripb"> ' + marque +'  '+ categorie + '</span> </div>'

  
  
var plus = '<img class="plus" src="public/image/admi/plus.png"></img>'
var moins = '<img class="moins" src="public/image/admi/moinsb.png"></img>'

var sup = '<img class="sup" src="public/image/admi/sup.png"></img>'     

var spannomb = '<div  class="spannomd"> <span  class="spannomc"> article </span> <span  class="spannomb">    ' +  quantite +' </span> </div>'

var spantotalpro = '<div class="spantotalproc"> <span  class="spantotalprob"> prix </span> <span  class="spantotalpro">  '+ total + 'F</span>  <div>'

  var divproduit = '<div class="divproduit"> ' + spannomb + plus + moins + sup + imgpr + descrip + spantotalpro  + '</div>'
 
  return divproduit ;
}

 

function animeDivPagnier(){
 
  var windowh = $(window).height()
  
  var ty =  $(window).height()/2
  
  var tx = Math.round($('body').width() /3) 
   
  
   
  
   
   $('.divpagnier')
    .css('width', '0px')
    .css('height','0px')
    .animate({
    width : tx,
    height : ty,
    },{
    duration : 1500
    , queue : true // ici peu importe sa valeur
    , complete : function(){
      
    }
    });
  }
  // chercher produit wayyy
  function chercherProduit() {
      
   
    $('#serchacceuil').keyup(function(event){
  
      
      var keycode = (event.keycode ? event.keycode:event.which) 
      
      if(keycode=='13')
      {
      }
  
      var keycode = (event.keycode ? event.keycode:event.which) 
      
      if(keycode=='13')
      {
      }
  var val = $(this).val()
      if( /^[a-z]+$/.test(  val )) {
        
      showHideDivautocompl(1)
        
     
        $.ajax( {
           type: 'GET',
        url: '/searchAcceuil?p=' +  val,
        success: function(data){
          
          
          autocomplacceuil(data  , val)
         
          hoverDivAutoComplet()
        
         }  
  
        });
  
  }
     
  else {
     showHideDivautocompl(0)
  }
     
      });
    

     
      
        }
  
     
        
        function hoverDivAutoComplet(){
          $('.divsercha').hover(function(){ 
            
            var a = $(this).index()
            $(".totalitem").css({
             
              
              'background-image':'linear-gradient(white , #c6ffec)' ,      
                             
                            
             
              }) ; 
           
            $(".totalitem").eq(a).css({
             
              
              'background':'#c6ffec' ,
                            
             
              }) ; 
          });
  
          
            
        }
    
       
        function showHideDivautocompl(a) {
  
          if(a==0 ) {
         $("#apercuacceuil").css({
           'display': 'none',
          }) ;
         }
         else {
           $("#apercuacceuil").css({
             'display': 'block',
            }) ;
         }
       }

  
       function autocomplacceuil(data , val) {
       
        $('#apercuacceuil').html('')
     
        
        for( var a = 0 ; a < data.length ; a++){
          var img = '  <img class="imgautocomp" src ="public/image/categorie/' + data[a].classe  +'/' + data[a].img + '"/>  '
    
          
        
           var classe  =  '<span class="classe"> <span class="ca"> Categorie  : </span> ' +  textToSpan( data[a].classe  , val) + '</span> '
            var marque  =    '<span class="marque"> <span class="ca"> Marque : </span>  ' + textToSpan( data[a].marque   , val) + '</span> </br>'
            var  description  =   '<span class="description">  <span class="ca"> Description : </span> ' + textToSpan( data[a].description , val)  + '</span> </br>'
        
             var line =  '<div class="totalitem">' +  description  + marque   + classe + img + '</div>' 
             
          $('#apercuacceuil').append('<div class="divsercha">  ' + line + ' </div>' );
         
         
      
          }
          divserchclick( data)
          cssautocompl()
  
      
      }
      
  
      function textToSpan( text , chart) {
        var result
       
          result =   text.replace( chart, '<span class="mark">' + chart + '</span>')
         
         
         return result
        
      
       }
  
       
      function divserchclick(  data) {
      
        $('.divsercha').click(  function(){
         
          var index = $(this).index()
         
          IndexTocurentTab( index  , data)
         
          
          if( curtab== parti  && rest != 0){
           
             //   createTableproduitRestantClick(produit , curtab -1)
               
              //  curIndexTabdebut = (curtab -1 ) *tr * 3
              //  curIndexTabfin = lp
              
              }
        else{
          
          createTableproduit(produit , (curtab -1 ) *tr, (tr *curtab))
            
          curIndexTabdebut = (curtab -1 ) *tr * 3
          curIndexTabfin = (tr *curtab) * 3
        
              
          
        }
       
       
        
        curIndexTab =  curentIndexInTab( curIndexTabid ,curIndexTabdebut  ,  curIndexTabfin)
       
        showHideDivautocompl(0)
         
        htmlPlus()
        cssPlus()
        plus()
   cssTable()
  cssUnProduit()
   cssCurProduit(curIndexTab)
   
   cssDisplayAjoutOrBy(curIndexTab)
   cssAjouterOk()
   $("#lserch").css({
    'display': 'block',
    
   
    }) ; 
    $("#zonederecherche").css({
      'display': 'none',
      
     
      }) ; 

       
  
  var int =  curIndexTab
   var o = 0 

    var intid =   setInterval( function() {
       
         
    

  
  
    if( o%2 == 0 ){
      $(".tablelinepA .p").eq(int).css({
        'border': '1px solid #00ffff',
        
       
        }) ; 
    }else{
      $(".tablelinepA .p").eq(int).css({
        'border': '1px solid black',
        
       
        }) ; 
    }
       
  
           o = o + 1
  
           if(o == 100)
           clearInterval(intid)
  
      }, 500);
  
      
   
   
    });
    
    
       }

      



       function IndexTocurentTab( index  , data) {
  

        var id = data[index].id
      
        curIndexTabid = id
       var i =  idToindex( id , produit)
      
      
       
       var y = (1/(3*tr))*i   + 1/(3*tr)
      
        
       var j =  Math.abs( y)
      
       
       
       var k = parseInt(y)
       var r = 0
       
       if(j > k)
       r =  k + 1
       else if(j == 0)
       r = 1
       else 
       r = k
      
       
      
       curtab = r
      
       
        
        
      }
      function idToindex( id , table) {
        
        var index = 0 ;
      
        for( var a = 0 ; a < table.length ; a++){
          if( table[a].id == id)
          index = a 
      
      }
          
         return index ;
       
        
      }
      
  
  
  
          function curentIndexInTab(id , debut ,  fin) {
        var c = 0
      
        for( var a = 0 ; a < (fin - debut ) ; a++ ){
              
          if( produit[a + debut].id==id)
             return  a
            
        }
        
        
          
         }
     
       
       
         
      
  function bouttonSup() {
  

    $('.sup').click(function(){
  
     
      var index = $(this).parent().index()
     
  
      var cur = curIndexTabDatap[index]
  
      
  
  var id  =  parseInt($(".idproduitpagnier").eq(index).text())  
  
  var idd = pagnierData[2].indexOf( id)
  
        
    pagnierData[0].splice( idd , 1)
    pagnierData[1].splice(idd, 1 )
    pagnierData[2].splice( idd, 1)
  
    
  
    
    $(".tablelinepA .p .divcomm .ajouter").eq(cur).attr('src', "public/image/acceuil/plus.png");
   
   
  
    
  
    $(".tablelinepA .p .divcomm .commander").eq(cur).css({
      'display': 'block',
      
      }) ;
  
      $(".tablelinepA .p .divcomm .laj").eq(cur).css({
        
        
        }) ;
  
    
  
       
  curIndexTabDatap.splice(index , 1)
  price.splice(index,1)
  
  $('.divproduit').eq(index).remove();
  
  var prixTotal  = 0
  
  $('.spannomb').each(function(i){
  
   prixTotal = prixTotal + parseInt( $('.spantotalpro').eq(i).text())
  
  });
  
  $('.spantotal').text( prixTotal + 'F')
  
  if( prixTotal==0){
    $('.divpagnier').css({
      'display': 'none',
     });
     annulerFlouter()
     
    ableclick()
  }
        });
  
        
  
  }

  
function csshtmlPagnier() {
  
 
  $('#global').css({
    'position': 'relative',
  });
  

  
  $('.divpagnier').css({
    'position': 'fixed',
    'top': '50%',
    'left': '50%',
     '-ms-transform': 'translate(-50%, -50%)',
    'transform': 'translate(-50%, -50%)',
   'background-image': 'url(public/image/acceuil/ppp.png)',
   'background-size': 'cover',
 
  
});

 
var ty =  $(window).height()/2

var tx = Math.round($('body').width() /3) 
 

$('.divpagnier').width(tx)
$('.divpagnier').height(ty)
 

 
 

 $('.divproduit').css({
  'position': 'relative',
  'background-image':'linear-gradient(white , #c6ffec)' ,      
            
   'width':'90%',
  'height': '60px',
  
  'border-radius': '5%',
  'margin-left': '5%',
  'margin-bottom': '2%',

});

 $('.tablepagnier').css({
  'overflow': 'auto' ,
  'border': '1px solid black' ,
  'height': '200px',
  'width':'93%',
  'margin': '10px',
  'box-shadow': '1px 1px 5px black',
  'border-radius': '5%',
});

$('.descrip').css({
  'position': 'absolute',
  
  'top': '15%',
  'left': '45%',
            '-ms-transform': 'translateX(-50%)',
            'transform': 'translateX(-50%)',
  
            'font-size': '7px',
           
            
     

});
$('.descripb').css({
 
  'float': 'right',
     
            'font-weight': 'bold',
            'font-size': '10px',
           
            'text-align': 'center',
     

});
$('.des').css({
  
  'float': 'left',
            'font-size': '8px',
            'font-style': 'oblique',
            'text-align': 'center',
     

});

$('.spannomd').css({
  'position': 'absolute',
  
  
 'top': '75%',
            'left': '40%',
             '-ms-transform': 'translate(-50%, -50%)',
            'transform': 'translate(-50%, -50%)',
  
});

$('.spannomc').css({
  'font-style': 'oblique',
  'font-size': '9px',
  
  'font-weight': 'bold',
});
$('.spannomb').css({
  'font-style': 'oblique',
  'font-size': '13px',
  'font-family': 'Courier New Courier, monospace',
  'font-weight': 'bold',
});

$('.imgpr').css({
  'position': 'absolute',
  
  'width':'20%',
  'position':'absolute',
 'top': '50%',
            'left': '10%',
             '-ms-transform': 'translate(-50%, -50%)',
            'transform': 'translate(-50%, -50%)',
  'border-radius': '30px',
});

$('.boutp').css({
 
  'position': 'absolute',
 
  'left': '65%',
  '-ms-transform': 'translateX(-50%)',
  'transform': 'translateX(-50%)',
  'border': '1px solid blue',
 
});

$('.plus').css({
  'position':'absolute',
  'top': '70%',
  'right': '0%',
            
              '-ms-transform': 'translate(-50%, -50%)',
             'transform': 'translate(-50%, -50%)',
  'width': '20px',
  'height': '20px',
 
  'box-shadow': '1px 1px 3px #555',
  'border-radius': '50%',
 
});

$('.moins').css({
  'position':'absolute',
  'top': '70%',
  'right': '15%',
            
              '-ms-transform': 'translate(-50%, -50%)',
             'transform': 'translate(-50%, -50%)',
  'width': '20px',
  'height': '20px',
 
  'box-shadow': '1px 1px 3px #555',
  'border-radius': '50%',
 
});

$('.sup').css({
  'position':'absolute',
 'top': '20%',
 'right': '5%',
           
             '-ms-transform': 'translate(-50%, -50%)',
            'transform': 'translate(-50%, -50%)',
  'width': '20px',
  'height': '20px',
 
  'box-shadow': '1px 1px 3px #555',

 
});

$('.spantotalpro').css({
       
 
  'font-style': 'oblique',
  'font-size': '13px',
  'font-family': 'Courier New Courier, monospace',
  'color': '#00ffff',
  'font-weight': 'bold',
});
$('.spantotalprob').css({
  
            'font-style': 'oblique',
            'font-size': '8px',
            
            'font-weight': 'bold',
 
});

$('.spantotalproc').css({
  'position':'absolute',
  'top': '50%',
  'left': '45%',
              '-ms-transform': 'translate(-50%, -50%)',
             'transform': 'translate(-50%, -50%)',
       
  

});

$('.divvalider').css({
  'position': 'relative',
  'border': '1px solid black' ,
  'margin': '10px',
  'box-shadow': '1px 1px 5px black',
  'border-radius': '5%',
});

$('.divac').css({
 
 
  'transform': 'translateX(15%)',

});
$('.spantotal').css({
 
 
  'transform': 'translateX(30%)',
  'font-style': 'oblique',
  'font-size': '17px',
  'color': '#00ffff',
  'font-weight': 'bold',
  'font-family': 'Courier New Courier, monospace',
});
$('.spantotalb').css({
 
  'font-style': 'oblique',
  'font-size': '17px',
  
  'font-weight': 'bold',

  
});

$('.spantotala').css({
 
  'transform': 'translateX(18%)',

  
});

   

$('.btcommander').css({
  
  'width': '35%',
  'padding': '10px 10px',
  'cursor': 'pointer',
  'display': 'inline',
  
  'background-image':'linear-gradient(white , #c6ffec)' ,      
  
  'border': '0',
    'margin-top': '5px',
    'margin-right': '5px',
  'outline': 'none',
  'border-radius': '30px',
  'box-shadow': '1px 1px 3px #555',
  'font-size': '15px',
     
     'font-weight': 'bold',
     'font-family': 'Courier New Courier, monospace',
    

});
$('.acheter').css({
  
  'width': '35%',
  'padding': '10px 10px',
  'cursor': 'pointer',
  'display': 'inline',

  'background-image':'linear-gradient(white , #c6ffec)' ,      
  
  'border': '0',
    'margin-top': '5px',
    'margin-right': '5px',
  'outline': 'none',
  'border-radius': '30px',
  'box-shadow': '1px 1px 3px #555',
  'font-size': '15px',
     
     'font-weight': 'bold',
     'font-family': 'Courier New Courier, monospace',

});
$('.btreduire').css({
  
 

  
    'margin-top': '2px',
    'margin-right': '2px',
    'position': 'absolute',
  'top': '10px',
  'right': '10px',
});

hovermouseboutonp()

}


function hovermouseboutonp() {

  $('.btcommander').mousedown(function(){

   
    $('.btcommander').css({
    
        'box-shadow': '1px 1px 3px #555 inset',
        'background': '#dcdcdc',
    });

                    })

                    .mouseup(function(){
  
                       
                        $('.btcommander').css({
                        'box-shadow': '1px 1px 3px #555',
                        'background': '',
                    });
                    
                    });

  $('.btcommander').hover(function(){ 
            
    $(".btcommander").css({
    
     
     'background': '#c6ffec',               
     'font-size': '15px',
     'font-style': 'italic',
     'font-weight': 'bold',
     'font-family': 'Courier New Courier, monospace',
    
     }) ; 
   },function(){
     $('.btcommander').css({
      'font-size': '15px',
      'font-style': 'normal',
      'font-weight': 'bold',
      'font-family': 'Courier New Courier, monospace',
      
      'background-image':'linear-gradient(white , #c6ffec)' ,      
  
     });
 
   
 });
  

 $('.acheter').hover(function(){ 
            
  $(".acheter").css({
  
   
   'background': '#c6ffec',               
   'font-size': '15px',
   'font-style': 'italic',
   'font-weight': 'bold',
   'font-family': 'Courier New Courier, monospace',
  
   }) ; 
 },function(){
   $('.acheter').css({
    'font-size': '15px',
    'font-style': 'normal',
    'font-weight': 'bold',
    'font-family': 'Courier New Courier, monospace',
    
    'background-image':'linear-gradient(white , #c6ffec)' ,      

   });

 
});

$('.acheter')
.mousedown(function(){

   
    $('.acheter').css({
    
        'box-shadow': '1px 1px 3px #555 inset',
        'background': '#dcdcdc',
    });

                    })

                    .mouseup(function(){
  
                       
                        $('.acheter').css({
                        'box-shadow': '1px 1px 3px #555',
                        'background': '',
                    });
                    
                    });




  $('.sup')
  .mousedown(function(){
  
      var i = $(this).parent().index()
    
      $('.sup').eq(i).css({
      
          'box-shadow': '1px 1px 3px #555 inset',
          'background': '#dcdcdc',
      });
  
                      })
  .mouseup(function(){
  
    var i = $(this).parent().index()
     
      $('.sup').eq(i).css({
      'box-shadow': '1px 1px 3px #555',
      'background': '',
  });
  
  });
  $('.sup').hover(function(){ 
            
    var i = $(this).parent().index()
    $(".sup").eq(i).css({
     
      
      'box-shadow': '1px 1px 12px #555 ',               
                    
     
      }) ; 
    },function(){
      $('.sup').css({
        'box-shadow': '1px 1px 3px #555',
  
      });
  
    
  });

  $('.plus')
.mousedown(function(){

    var i = $(this).parent().index()
  
    $('.plus').eq(i).css({
    
        'box-shadow': '1px 1px 3px #555 inset',
        'background': '#dcdcdc',
    });

                    })
.mouseup(function(){

  var i = $(this).parent().index()
   
    $('.plus').eq(i).css({
    'box-shadow': '1px 1px 3px #555',
    'background': '',
});

});
$('.plus').hover(function(){ 
          
  var i = $(this).parent().index()
  $(".plus").eq(i).css({
   
    
    'box-shadow': '1px 1px 12px #555 ',               
                  
   
    }) ; 
  },function(){
    $('.plus').css({
      'box-shadow': '1px 1px 3px #555',

    });

  
});
$('.moins')
.mousedown(function(){

    var i = $(this).parent().index()
  
    $('.moins').eq(i).css({
    
        'box-shadow': '1px 1px 3px #555 inset',
        'background': '#dcdcdc',
    });

                    })
.mouseup(function(){

  var i = $(this).parent().index()
   
    $('.moins').eq(i).css({
    'box-shadow': '1px 1px 3px #555',
    'background': '',
});

});
$('.moins').hover(function(){ 
          
  var i = $(this).parent().index()
  $(".moins").eq(i).css({
   
    
    'box-shadow': '1px 1px 12px #555 ',               
                  
   
    }) ; 
  },function(){
    $('.moins').css({
      'box-shadow': '1px 1px 3px #555',

    });

  
});

}



         //css pagnier
         function cssdivPagnier() {
          $('#paginerdiv').css({
            'position': 'absolute',
           
            
             
          });
          
         var top =   topDivPagnier()
        
          var windoww = $(window).width()
            $('#paginerdiv').width( windoww)
            $('#paginerdiv').height( 40)
        
            $('#paginerdiv').offset({
             
               top : top 
              });
           
        }
      
        function topDivPagnier() {
          var top = 0 

          var width = $('tr').height()
        
          
       
     
           if( indextr==0){

            top =   $('tr').eq(0).offset().top + width
         
           }
               
               else  if ( indextr== 1)
               top =     $('tr').eq(1).offset().top + width
  
               else
               top =     $('tr').eq(2).offset().top  + width
 
             
    
          
            return top
           
         }


        
         function getPosition(e) {
          var left = 0
          var top = 0
        
          var data ={}
            while (e.offsetParent != undefined && e.offsetParent != null) {
                 left += e.offsetLeft +( e.clientleft!= null ? e.clientleft : 0 ) ;
                 top += e.offsetTop + ( e.clientTop != null ? e.clientTop : 0);
                 e = e.offsetParent ;
            }
            data.top = top
            data.left = left
            return data ;
           
        }

       
        //anime pagnier
        function animePagnierA() {
          var X =    $('#tableproduitdiv').width() - 120
       
           var Y = $('body').height()
           
           var animp =   setInterval( function() {
            animPagnier() 
             }, 5);
    
       

        }

       function animPagnier() {
        $("#pagnierAnimation").css({
          'transform': 'translateX(' + inc + 'px)',
          
           });
          incX()
        
        }
        
         
         function incX() {
          if( b == true){
           inc = inc + 1
            if( inc == XX)
              b = false
            
              }
         else {
           inc = inc - 1
           if( inc == 0)
           b = true
         
         }
        
        }
    

        // show login hid 
        function  showHideLogin()   {
 
 
          $('#divm').click(function(){
        
               
            if(  lshow){
              
                hideL()
                ableclick()
                annulerFlouter()
            } 
            else {
             
              showL()
        
            }
            
        
             });
            
        }
        
        function  hideL()   {
 
          $('#login').css({
            '-webkit-transform': 'translateX(0%)',
        'transform': 'translateX(80%)',
        '-webkit-transition': '.3s ease-in-out',
        'transition': '.3s ease-in-out',
        
          });
        
          lshow = false
           
        }
        
        function  showL(){
         
         
             $('#login').css({
                '-webkit-transform': 'translateX(0%)',
        'transform': 'translateX(0%)',
        '-webkit-transition': '.3s ease-in-out',
        'transition': '.3s ease-in-out',
        
          });
          lshow = true
        }
        
        
        function disableclick() {

          if(is.ie()){
            $("#paginerdiv").unbind('click',clickPagnierBinde)
   
          }
          else {
              $(".p").css({
                   
            'pointer-events': 'none',
            
             });

             $("#paginerdiv").css({
                   
              'pointer-events': 'none',
              
               });

          }
          
            
           
             
         }

         
        function ableclick() {
          if(is.ie()){
            $("#paginerdiv").bind('click',clickPagnierBinde)
   
          }
          else {
          $(".p").css({
                   
            'pointer-events': 'auto',
            
             });
             $("#paginerdiv").css({
                   
              'pointer-events': 'auto',
              
               });
         
          }
        }

        function flouter(){
          if(is.ie()){
            flouterie()
          }else {
            $('#global , .pagnier').css({
              'filter': 'blur(5px)',
           '-webkit-filter': 'blur(5px)',
           '-moz-filter': 'blur(5px)',
           '-o-filter': 'blur(5px)',
           '-ms-filter': 'blur(5px)',
                         
          });
          }
         
        
         
        $('.divpagnier').css({
          'filter': 'none',
        });
         }
         function annulerFlouter(){
           if(is.ie()){
            annulerflouterie()
           } else {
            $('#global, .pagnier').css({
              'filter': 'none',
                         
          });
           }
         
         
         }
      
        
      //html plus
      function htmlPlus(){
        var progr = '<div id="progr">  </div>'
        $('.tableproduit').append(' <tr>  <td>   </td> <td>  ' + progr+' <img id="plus" src ="public/image/acceuil/next.png"  /> </td> </tr> ')
        update() 
      }
      function update() {
        $('#progr')
      .css('width','0px')
      .animate({
      width : '60px'
      },{
      duration : 2500
      , queue : true // ici peu importe sa valeur
      , complete : function(){
        update()
      }
      });
        }
      

        function plus() {
      
          $('#plus').click(function(){
            
             curTabUpdate(parti)
        
            
            if( curtab== parti  && rest != 0){
          //   createTableproduitRestant(produit , curtab -1)
        
          
        createTableproduit(produit , 0, tr)
           }
            else {
             
               
            createTableproduit(produit , (curtab -1 ) *tr, (tr *curtab))
                  
            }
           
             htmldivanimepagnier()
        
             htmlPlus() 
            plus()
        
           
            cssTable()
        
         cssUnProduit()
        cssPlus()
        cssDisplayAjoutOrBy(curIndexTab)
        cssCurProduit(curIndexTab)
        cssAjouterOk()
        
        cssdivPagnier()
        cssPagnier()
              alert('plus wayy')
        $('.pagnier').css({
          'width':'30px',
         
         'height': '30px' ,
         
        
        });

            
        });
        }
        function curTabUpdate(m) {
  
          if ( curtab >= m)
          curtab = 1
          else
          curtab++
          
        }
        
        
      function cssPlus(){
  

        if(is.ie()){
          $('#plus').css({
            'position': 'relative',
            'width': '100px',
            'height': '100px',
            
            'top': '50%',
            'left': '50%',
            'transform': 'translateX(65%)',
              });
        }else {
          $('#plus').css({
            'position': 'relative',
            'width': '100px',
            'height': '100px',
            
            'top': '50%',
            'left': '50%',
                      '-ms-transform': 'translateX(-50%)',
                      'transform': 'translateX(-50%)',
              });
        }
       
            $('#progr').css({
              'position': 'absolute',
              'width': '60px',
              'height': '60px',
              'margin-left': '80px',
              'margin-top': '20px',
              'background-color': '#4CAF50',
             
            
                });
        
            
        
        
       }
      
        
        // css body
        function cssBody() {
   
          $("body").css({
            //'background-image': 'linear-gradient(rgba(0,0,0,0.4),rgba(0,0,0,0.4)),url(public/image/acceuil/bg.jpg)',
            'background-image': 'url(public/image/acceuil/bg.jpg)',
         
            'background-repeat':'no-repeat',
        
            'background-position': 'center',
            'background-size': 'cover',
          
         // 'background-color': 'rgba(0,0,0,0.4)',
            'margin':'0px',
            'position':'relative',
            'padding':'0px'
             });
        
            $("html").css({
            
              'margin':'0px',
              'padding':'0px'
            });
             
         }
        
        function contain(tab  , val){

          var ver = false
          for(var a = 0 ; a < tab.length ; a++)  {
  if(tab[a]== val)
  ver = true
          }
return ver ;
          
        } 
        
        
//css pagnier
function cssPagnier() {
  $('#pagnierAnimation').css({
   
   'border':'1px solid #00ffff',
  
   'width':'15%',
   'border-radius':'15%',
    
 
 });

  $('.pagnier').css({
     'width':'30px',
     'float': 'left' ,
    
    'height': '30px' ,
    
  
  });
  $('.pagnierlabel').css({
    'font-weight': 'bold',
    'font-size': '10px',
    'font-family': 'Courier New Courier, monospace',

   
 
 });
 }
 function cssdivPagnierInit() {
  
  
 
  var H = $(window).height()
    
   var top = (H* 30 )/100
    $('#paginerdiv').offset({
     
       top : top 
      });
   
}



 

function flouterie(){
  

  $(".pdescription").css({
    
   'color': 'transparent',
   'text-shadow': '0 0 8px #fff',
  
   
    });
    $(".pclasse").css({
    
      'color': 'transparent',
      'text-shadow': '0 0 8px #000',
     
      
       });

       $(".pprix").css({
    
        'color': 'transparent',
        'text-shadow': '0 0 8px #00ffff',
       
        
         });
         $("#lmess").css({
    
          'color': 'transparent',
          'text-shadow': '0 0 8px #fff',
         
          
           });
           $("#lmessb").css({
    
            'color': 'transparent',
            'text-shadow': '0 0 8px #00ffff',
           
            
             });
         
             $("#lserch").css({
    
              'color': 'transparent',
              'text-shadow': '0 0 8px #fff',
             
              
               });


}



function annulerflouterie(){
  
 
  $(".pclasse").css({
    
    'color': 'black',
   'text-shadow': '',
  
   
   });

    $(".pprix").css({
    
        'color': '#00ffff',
        'text-shadow': '',
       
        
         });
         $(".pdescription").css({
    
          
          'text-shadow': '',
         
          
           });
           $("#lmess").css({
    
            'color': '#fff',
            'text-shadow': '',
           
            
             });
             $("#lmessb").css({
      
              'color': '#00ffff',
              'text-shadow': '',
             
              
               });
           
               $("#lserch").css({
      
                'color': '#fff',
                'text-shadow': '',
               
                
                 });
   cssUnProduit()
   
}
 




$('#ttt').offset({
             
  top : 100 
 });

