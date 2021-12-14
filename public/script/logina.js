var vpas = false
  var vp = false

  var aaa , bbb , c , d , e , f , g , h

 
  
createHtmllogina()

createEnregistrerHtmnl()
enregistrer()
validerLogin()
validerNewClient()

inputValidation()

createReseau()
clickReseau()
hoverReseau()
validerInputLogin()
annulerEnregistrement()

function validerInputLogin(){
 
  
  $('#passe').keyup( function () {

    var  passe = $('#passe').val()

   
      if( passe.length >= 3 &&  passe.length <= 8 && /[a-z0-9]/.test(passe) && /[a-z0-9]/.test(passe)){
        vpas = true
             
      }
      else {
        vpas = false
        
      }

      if(vpas==true && vp == true){
        $("#imgu").css({
          'border': '1px solid #00ffff',
         });
      }
      else {
        $("#imgu").css({
          'border': '1px solid yellow',
         });
      }


    });


  $('#pseudo').keyup( function () {

    var pseudo = $('#pseudo').val()
 
      if( pseudo.length  >= 2 &&  pseudo.length <= 8 && /[a-z0-9]/.test(pseudo) && /[a-z0-9]/.test(pseudo) ){
        vp = true
             
      }
      else {
        vp = false
        
      }

      
      if(vpas==true && vp == true){
        $("#imgu").css({
          'border': '1px solid #00ffff',
         });
      }
      
      else {
        $("#imgu").css({
          'border': '1px solid yellow',
         });
      }
      

    });



  
}

function validerLogin() {
    
 $('#valider').click(function(){
  
  


  if(vpas==true && vp == true){
    
  var data = getUserDonne()
  
  
   if(data.success.localeCompare('success') ==0) {
     var nom = data.user.nom
     var prenom = data.user.prenom
     var id = data.user.id

    
     
  var result =     conn(nom , prenom , id)
 
  redirectConn( result)
  alert(data.user.nom)
  $("#imgu").css({
    'border': '1px solid #00ffff',
   });
  showPagnier()
  hideL()
  
   }


   else {
    $("#imgu").css({
      'border': '1px solid red',
     });
  }

  }
  else {
    $("#imgu").css({
      'border': '1px solid orange',
     });
     
  }

    

       });
       

}
function redirectConn( data) {
   
  clientConnected =  data.connected

 
  if(clientConnected == true ) {
   nom = data.user.name
   prenom = data.user.prenom
   idClient = data.user.id
   afficahgePourClient( data.user)
   
  }
  
  else {
   nom = ''
   prenom = ''
   idClient = 0
   
  }
}

function nomEtPrenom(data) {
  
  $('#nom').html( data.name)
  $('#prenom').html( data.prenom)
 
  
  
}

function afficahgePourClient(data) {
  $("#user").css({
    'display': 'block',
    
     })
     $("#loginc").css({
      'display': 'none',
      
       })
     
       nomEtPrenom(data)
}

function conn(nom , prenom , id) {
  var result = ""
 $.ajax({
   
  url:"/cnt?name="+ nom + "&prenom=" + prenom + "&id=" + id,
      async: false,  
   success:function(data) {
       result = data
       
   }
});

return result
  
}



function inputValidation() {

 

 


 
 

 $('.save').eq(0).keyup( function () {

   var nom = $('.save').eq(0).val()
    if( nom.length  == 0)
   $('.span').eq(0).text('champ vide ')
   else if ( nom.length <= 2 )
   $('.span').eq(0).text('trop court')
   else if ( nom.length >= 10 )
   $('.span').eq(0).text('trop long')

   else if ( !nom.match(/^[a-zA-Z]+$/)    )
   $('.span').eq(0).text('caractere non supprte')
   
   else {
    $('.span').eq(0).text('')
   
    $('.span').eq(7).text('')
 
   }


   if( $('.span').eq(0).text().localeCompare('')==0){
    aaa = true
         
  }
  else {
    aaa = false
    
  }

  
   
       })




       $('.save').eq(1).keyup( function () {

         var prenom = $('.save').eq(1).val()

          if( prenom .length  == 0)
         $('.span').eq(1).text('champ vide ')
         else if ( prenom.length <= 2 )
         $('.span').eq(1).text('trop court')
         else if ( prenom.length >= 10 )
         $('.span').eq(1).text('prenom trop long')
         else if ( !prenom.match(/^[a-zA-Z]+$/)    )
         $('.span').eq(1).text('caractere non supprte')
         
         else {
          $('.span').eq(1).text('')
         
          $('.span').eq(7).text('')
        }

        if( $('.span').eq(1).text().localeCompare('')==0){
          bbb = true
               
        }
        else {
          bbb = false
          
        }
      
        
             })



             $('.save').eq(2).keyup( function () {

               var pseudo = $('.save').eq(2).val()
      
                if( pseudo.length  == 0)
               $('.span').eq(2).text('champ vide ')
               else if ( pseudo.length <= 2 )
               $('.span').eq(2).text('trop court')
               else if ( pseudo.length >= 10 )
               $('.span').eq(2).text('trop long')
               else if ( !pseudo.match(/^[a-zA-Z]+$/)    )
               $('.span').eq(2).text('caractere non supprte')
               
               else{
                $('.span').eq(2).text('')
               
                $('.span').eq(7).text('')
 
               }
               

               if( $('.span').eq(2).text().localeCompare('')==0){
                c = true
                     
              }
              else {
                c = false
                
              }

                   })


                   $('.save').eq(3).keyup( function () {

                     var tel = $('.save').eq(3).val()
            
                      if( tel.length  == 0)
                     $('.span').eq(3).text('champ vide ')
                     else if ( tel.length <= 6 )
                     $('.span').eq(3).text('trop court')
                     else if ( tel.length >= 15 )
                     $('.span').eq(3).text('numero trop long')
                     else if ( !tel.match(/^[0-9]+$/)    )
                     $('.span').eq(3).text('numero invalide')
                     
                     else {
                      $('.span').eq(3).text('')
                      $('.span').eq(7).text('')
 
                     }
                    
                     if( $('.span').eq(3).text().localeCompare('')==0){
                      d = true
                           
                    }
                    else {
                      d = false
                      
                    }
                      
                         })

                         $('.save').eq(4).keyup( function () {

                     var adress = $('.save').eq(4).val()
            
                      if( adress.length  == 0)
                     $('.span').eq(4).text('champ vide ')
                     else if ( adress.length >= 15 )
                     $('.span').eq(4).text('trop long')
                     else if ( adress.length <= 3 )
                     $('.span').eq(4).text('trop court')
                     else if ( !adress.match(/^[a-zA-Z0-9/]+$/)    )
                     $('.span').eq(4).text('format invalide')
                     
                     else {
                      $('.span').eq(4).text('')
                      $('.span').eq(7).text('')
 
                     }
                    
                     if( $('.span').eq(4).text().localeCompare('')==0){
                      e = true
                           
                    }
                    else {
                      e = false
                      
                    }
                      
                         })



                         $('.save').eq(5).keyup( function () {

                           var email = $('.save').eq(5).val()
                  
                            if( email.length  == 0)
                           $('.span').eq(5).text('champ vide ')
                           else if ( email.length >= 70 )
                           $('.span').eq(5).text('trop long')
                           else if ( email.length <= 6 )
                           $('.span').eq(5).text('trop court')
                           else if ( !email.match(/^[a-z0-9._-]+@[a-z0-9._-]+\.[a-z]{2,6}$/)    )
                           $('.span').eq(5).text('format invalide')
                           
                           else {
                            $('.span').eq(5).text('')
                           
                            $('.span').eq(7).text('')
 
                           }
                           if( $('.span').eq(5).text().localeCompare('')==0){
                            f = true
                                 
                          }
                          else {
                            f = false
                            
                          }
                               })


            

     
     
                               $('.save').eq(6).keyup( function () {

                                 var passe = $('.save').eq(6).val()
                        
                                  if( passe.length  == 0)
                                 $('.span').eq(6).text('champ vide ')
                                 else if ( passe.length >= 15 )
                                 $('.span').eq(6).text('trop long')
                                 else if ( passe.length <= 3 )
                                 $('.span').eq(6).text('trop court')
                                 else if ( !passe.match(/^[a-zA-Z0-9]+$/)    )
                                 $('.span').eq(6).text('caractere non supprte')
                                 
                                 else {
                                  $('.span').eq(6).text('')
                                  $('.span').eq(7).text('')
 
                                 }
                                 
                                 if( $('.span').eq(6).text().localeCompare('')==0){
                                  g = true
                                       
                                }
                                else {
                                  g = false
                                  
                                }
                                  
                                     })



                                     $('.save').eq(7).keyup( function () {

                                       var passe = $('.save').eq(7).val()
                              
                                        if( passe.length  == 0)
                                       $('.span').eq(7).text('champ vide ')
                                       else if ( passe.length >= 15 )
                                       $('.span').eq(7).text('trop court')
                                       else if ( passe.length >= 15 )
                                       $('.span').eq(7).text('passe trop long')
                                       else if ( !passe.match(/^[a-zA-Z0-9]+$/)    )
                                       $('.span').eq(7).text('caractere non supprte')
                                       
                                       else
                                       $('.span').eq(7).text('')
                                       
                                       if( $('.span').eq(7).text().localeCompare('')==0){
                                        h = true
                                             
                                      }
                                      else {
                                        h = false
                                        
                                      }
                                           })
   
     
       
 


}

function  createEnregistrerHtmnl(){
  
 var debut = '<div id="divenregistrer" style="display: none;"  > <table>' 
 
 
         
 var  nom = '<input  class="save" type="text"  placeholder="Nom" required >'

 var noms = '<span  class="span" type="text"> </span>'

 
var prenom = '<input  class="save" type="text"  placeholder="Prenom" >'

var prenoms = '<span  class="span" type="text"> </span>'

var pseudo = '<input  class="save" type="text"  placeholder="Pseudo" required >'
var pseudos = '<span  class="span" type="text"> </span>'


var  tel = ' <input  class="save" type="text"  placeholder="Tel" required >'
var tels = '<span  class="span" type="text"> </span>'

var addrres = '<input  class="save" type="text"  placeholder="Adresse" required >'
var addrress = '<span  class="span" type="text"> </span>'


var email = '<input  class="save" type="text"  placeholder="Email" required >'
var emails = '<span  class="span" type="text"> </span>'

var pass = '<input  class="save" type="text"  placeholder="Passe" required >'
var passs = '<span  class="span" type="text"> </span>'

var passb = '<input  class="save" type="text"  placeholder="Passe" required >'
var passbs = '<span  class="span" type="text"> </span>'


var fin = ' </table> <input id="saveNewClient" type="button" value="devenir client"> <input id="annuler" type="button" value="annuler">   </div>'


       
var enregistr  =   debut  + nom + noms + prenom + prenoms + pseudo + pseudos +   tel +   tels + addrres  + addrress + email + emails + pass  + passs + passb  + passbs + fin 




     $('body').append(enregistr)
    

     }
     function flouterDiv() {
       $('#global').css({
         'filter': 'blur(5px)',
       '-webkit-filter': 'blur(5px)',
       '-moz-filter': 'blur(5px)',
       '-o-filter': 'blur(5px)',
      '-ms-filter': 'blur(5px)',
                     
       });
     }
     function  createEnregistrerHtmnlB(){
  
       var debut = '<div id="divenregistrer" style="display: none;"  > <table>' 
       
       var  nom = '<tr> <td> <label class="save"> nom </label></td> <td>  <input class="save" type="text"></input> </td> </tr>'
     
     var prenom = '<tr><td> <label class="save"> prenonom </label></td><td>  <input class="save" type="text"></input> </td></tr>'
     
     var pseudo = '<tr> <td> <label class="save"> pseudo </label></td> <td>  <input class="save" type="text"></input> </td> </tr>'
       
     var  tel = ' <tr> <td> <label class="save"> tel </label></td> <td>  <input class="save" type="text"></input> </td> </tr>'
     
     var addrres = '<tr> <td> <label class="save"> adresse </label></td> <td>  <input class="save" type="text"></input> </td> </tr>'
     
     var email = '<tr> <td> <label class="save"> email </label></td> <td>  <input class="save" type="text"></input> </td> </tr>'
     
     var pass = '<tr> <td> <label class="save"> passe </label></td><td>  <input class="save" type="text"></input> </td> </tr>'
     

     var fin = ' </table> <input id="saveNewClient" type="button" value="enregistrer">  </input> </div>'
     
     
             
     var enregistr  =   debut  + nom + prenom + pseudo +   tel + addrres + email + pass + fin 
     
     
           $('#global').append(enregistr)
     
           }
function  createNomEtPrenomHtmnl(){
      
 
 var nom = '<tr> <td> <label id="nom"> nom </label></td> </tr>' 



 var prenom = '<tr> <td> <label id="prenom"> prenom </label></td></tr>'
        
 
 var debut = '<div id="user" style="display: none;" > <table>'

 var milieu = '</table>'
 var bouton = '<input type="button" id="destroy" value="fermer session"></input>'
           
 var fin = '</div>'
          
var nomEtPrenom =   debut  + nom + prenom + milieu + bouton + fin


     $('body').append(nomEtPrenom)

     }

     function createHtmllogina() {

       var img = '<img id="imgu" src="public/image/acceuil/profile.jpg"></img>'
       var imgb = '<div id="divm"> <img id="imgmb" src="public/image/acceuil/makix.png"></img> </div>'
       
       
       var pseudo = '<input  name="name" type="text" id="pseudo" placeholder="Pseudo" required >' 
     
       var pass = '<input type="password" name="password" id="passe" placeholder="Password" required>'
              
       
                 
                
     var valider = '<input id="valider" class="button" value="valider" >  </input>'
     
     var senregistrer = '<a id="enregistrer" class="senregister"> devenir client </a>'
   
 var debut = '<div id="user" style="display: none;" > '
 var nom = ' <label id="nom"> nom </label> </br> ' 

 var prenom = ' <label id="prenom"> prenom </label> </br> '
 
 var bouton = '<input type="button" id="destroy" value="fermer session"></input>'
           
 var fin = '</div>'
 var nomEtPrenom =   debut  + nom + prenom  + bouton + fin


var loginc = '<div id="loginc" >'+ pseudo + pass + valider + senregistrer +'</div>'

 var loginb = '<div id="loginb" >' + img  + nomEtPrenom  + loginc+ '</div>'
        
 
          

var login = '<div id="login" >' + imgb + loginb +'</div>'

     $('body').append( login)
     
           }

     
           function clickReseau(){


        $('.res').mousedown(function(){
            var i = $(this).index()
            $('.res').eq(i).css({
              'box-shadow': '1px 1px 3px #555 inset',
              'background': 'blue',

              });
        
                            })
        .mouseup(function(){

            var i = $(this).index()
           
            $('.res').eq(i).css({
              'box-shadow': '',
              'background': '',
  
            });
                              })
        .click(function(){
           
            var i = $(this).index()
          if( i == 0){
            window.location.href = 'https://www.facebook.fr/'
       
           
          }
          if( i == 1){
            window.location.href = 'https://www.twitter.fr/'
          }
           if( i == 2){
            window.location.href = 'https://www.instagram.fr/'
          }
           if( i == 3){
            window.location.href = 'https://www.google.fr/'
          }
           
    
    })
         
           }


           function hoverReseau() {
            $('#imgf').hover(function(){ 
              var i = $(this).index()
            
              animeReseau(i)
             },function(){
              var i = $(this).index()
            
             
             
           });



           $('#imgt').hover(function(){ 
            var i = $(this).index()
          
            animeReseau(i)
           },function(){
            var i = $(this).index()
          
           
           
         });



         $('#imgi').hover(function(){ 
          var i = $(this).index()
        
          animeReseau(i)
         },function(){
          var i = $(this).index()
        
         
         
       });

       $('#imgw').hover(function(){ 
        var i = $(this).index()
      
        animeReseau(i)
       },function(){
        var i = $(this).index()
      
       
       
     });
             
           }
            function animeReseau(i) {
              $('.res').eq(i)
              .css('width', '30px')
              .css('height','30px')
              .animate({
              width : 50,
              height : 50,
              },{
              duration : 500
              , queue : true // ici peu importe sa valeur
              , complete : function(){
               
                animeReseaub(i)
              }
              });
            
            }
            function animeReseaub(i) {
              $('.res').eq(i)
              .css('width', '50px')
              .css('height','50px')
              .animate({
              width : 30,
              height : 30,
              },{
              duration : 500
              , queue : true // ici peu importe sa valeur
              , complete : function(){
                
              }
              });
            
            }
           function createReseau() {

            var fac = '<img id="imgf" class="res" src="public/image/admi/facebook.png"></img>'
            var twit = '<img id="imgt" class="res"  src="public/image/admi/twitter.png"></img>'
            
            var instag = '<img id="imgi" class="res"  src="public/image/admi/insta.png"></img>' 
          
            var watchap = '<img id="imgw" class="res"  src="public/image/admi/messenger.png"></img>'
                   
            
                      
                     
         
               
     
     var reseau = '<div id="reseau" >'+ fac + twit + instag + watchap+' </div>'
     
          $('body').append( reseau)
          
                }
          
     
     
     
     
     function createHtmlloginB() {
  
 var pseudo = '<input  name="name" type="text" id="pseudo" placeholder="Pseudo" required >' 

 var pass = '<input type="password" name="password" id="passe" placeholder="Password" required>'
        
 
           
          
var valider = '<input id="valider" class="button" value="valider" >  </input>'

var senregistrer = '<a id="enregistrer" class="senregistrer"> s\'enregistrer </a>'

     $('#entete').append('<div id="login" >' + pseudo + pass + valider + senregistrer + '</div>')

     }
     function validerNewClient() {
     
       $('#saveNewClient').click(function(){
         

         enregistrerDansbase()
        
       
       });
       
     }
     function showHideDivEnregistrer(a) {

       if(a==0 ) {
      $("#divenregistrer").css({
        'display': 'none',
       }) ;
      }
      else {
        $("#divenregistrer").css({
          'display': 'block',
         }) ;
      }
     }

     function showNomPrenom() {

     
     
        $("#user").css({
          'display': 'block',
         }) ;
      
     }

     function annulerEnregistrement() {
     
      $('#annuler').click(function(){
        
        hideL()
        annulerFlouter()
     
ableclick()
    
     
    
       $("#divenregistrer").css({
        'display': 'none',
       }) ;

      });
      
    } 


     
     function enregistrer() {
     
       $('#enregistrer').click(function(){
         
         hideL()
         flouter() 
   disableclick()
       
        
       
          $("#divenregistrer").css({
           'display': 'block',
          }) ;
         
       });
       
     }      

    
     function enregistrerDansbase() {
var vp = comparePasse()

if( vp){
      if(aaa==true && bbb == true && c == true && d == true && e == true && f == true && g == true && h == true ){
      
        saveFinal()
        showPagnier() 

        $("#divenregistrer").css({
         'display': 'none',
        }) ;
        
        ableclick()

  }
  else {

  }
        

} else {
 $('.span').eq(7).text('les mots de pass ne correspondent pas')

}



     }

     function comparePasse() {

       var verified = false
       var pass = $('.save').eq(6).val()
       var passb = $('.save').eq(7).val()

       if(    pass.localeCompare(passb)==0 )

       verified = true
            else
            verified =  false


            return  verified 
        
      
       
     }


     function verfierLesSpan() {

       var verified = false
       var pass = $('.save').eq(6).val()
       var passb = $('.save').eq(7).val()

       if(    pass.localeCompare(passb)==0 ) {

       verified = true
          }   else {
            verified =  false
           }
            return  verified 
        
      
       
     }



     function validerInput() {

       var nom = $('.save').eq(0).val()
       var prenom = $('.save').eq(1).val()
       var  pseudo = $('.save').eq(2).val()
       var tel = $('.save').eq(3).val()
       var adresse = $('.save').eq(4).val()
       var  email = $('.save').eq(5).val()
     
       var pass = $('.save').eq(6).val()
       var passb = $('.save').eq(7).val()

       var check = true
      
       if( nom.length  == 0  || prenom.length == 0 || pseudo.length == 0  || tel.length == 0  || adresse.length == 0  || email.length == 0  || pass.length == 0  || passb.length == 0 ) {
         $('.spancheck').text('remplir les champs vides')
         check = false
       }
       
       
      
         if( check==true) {
           $('.spancheck').text('')
           $("#saveNewClient").css({
           
           'background': 'green',
          
            });
           
           }
    

    
    
     }
      

     function saveFinal() {
       var nom = $('.save').eq(0).val()
       var prenom = $('.save').eq(1).val()
       var  pseudo = $('.save').eq(2).val()
       var tel = $('.save').eq(3).val()
       var adresse = $('.save').eq(4).val()
       var  email = $('.save').eq(5).val()
     
       var pass = $('.save').eq(6).val()
       var passb = $('.save').eq(7).val()

       $.ajax( {
                    
         type: 'GET',
         url: '/savedansbase?nom=' + nom  + '&prenom=' + prenom  + '&pseudo=' +   pseudo + '&tel=' +   tel + '&adresse=' +   adresse + '&email=' +   email  + '&pass=' +   pass,
         success: function(data){
           
           redirectConn( data)
           connectUser( data.user.name,  data.user.prenom , data.user.id)

           hideL()
           annulerFlouter()
        
   ableclick()
       
        
       
          $("#divenregistrer").css({
           'display': 'none',
          }) ;
         }  
            
     });
       
     }
     
     
     
     function getUserDonne() {
       var result = {}
      $.ajax({
       type: 'GET',
        url:"/validerLoginPass?pseudo=" +  $('#pseudo').val() + "&passe=" + $('#passe').val() ,
        async: false,  
        success:function(data) {
          
            result = data
        }
     });
     
     return result
       
     }

     function connectUser( nom ,  prenom , id) {
      
      
       $.ajax({
         type: 'GET',
        url:"/connectuser?nom=" +  nom + "&prenom=" + prenom + "&id=" + id ,
        
        success:function(data) {
          
          
        }
     });
     
    
       
     }
       
     
     
function connctNouvelClient() {
 var data = getUserDonneRgistre()
     
 if(data.success.localeCompare('success') ==0) {
   var nom = data.user.name
   var prenom = data.user.prenom
   var id = data.user.id


   
    conn(nom , prenom , id)
    showNomPrenom()
 } else
 {
   alert('non vaalide')
 }
}
     function getUserDonneRgistre() {
       var result = {}

       
      $.ajax({
        
        url:"/validerLoginPass?pseudo=" +  $('.save').eq(2).val() + "&passe=" + $('.save').eq(6).val() ,
        async: false,  
        success:function(data) {
          
            result = data
        }
     });
     
     return result
       
     }
     
     
     
     
       function redirect() {
         window.location.href = '/'
       
       }
     
     
     
     
     
