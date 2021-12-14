cssLogin()
cssReseau()
cssNomHoraire()
cssSenregistrement()


function cssSenregistrement() {

  
  
    $("#divenregistrer").css({
         'width':'380px',
 'height':'480px',
 'position':'fixed',
 'top': '50%',
            'left': '50%',
             '-ms-transform': 'translate(-50%, -50%)',
            'transform': 'translate(-50%, -50%)',
            'margin':'2% auto',
            'padding':'30px',
 'background':'rgba(0,0,0,0.3)',
 
 
       });
      


      

       

      


       $(".save").css({
        'width': '100%',
      'padding':'10px 0',
      'margin':'5px 0',
      'border-left':'0',
      'border-top':'0',
      'color':'white',
      'border-right':'0',
      'border-bottom': '1px solid #999',
      'outline':'none',
      'background': 'transparent',
       });

       $("#saveNewClient").css({
        'width': '85%',
      'padding': '10px 30px',
      'cursor': 'pointer',
      'display': 'block',
      'margin': 'auto',
      'background': '#F3C693',
      'border': '0',
      'outline': 'none',
      'margin-top':'30px',
      'border-radius': '30px',
       });
       $("#annuler").css({
        'width': '25%',
       'cursor': 'pointer',
      'display': 'block',
      
      'background': '#bafff0',
      
      'outline': 'none',
      'margin-top':'2%',
      'margin-left':'35%',
      'border-radius': '30px',
       });

       $(".spancheck").css({
     
      'color':'red',
      
       });

       $(".span").css({
     
        'color':'red',
        
         });
        
       
    

 
   
      
           
    }


    
function cssNomHoraire() {

  


  $("#user").css({
    'width': '150px',
'position':'relative',
'margin-right':'1% auto',
'float': 'right',
'border':'1px solid #00ffff',
'background':'rgba(0,0,0,0.3)',

'overflow': 'hidden',


  });
  

  $("#nom").css({
   
    'position': 'absolute',
         'left': '50%',
        '-ms-transform': 'translateX(-50%)',
        'transform': 'translateX(-50%)',

    'color': 'white',
    'font-size':'17px',
    'font-weight': 'bold',
    'font-style': 'italic',
'font-family': 'Courier New Courier, monospace',

  

   });

   $("#prenom").css({
    'position': 'absolute',
         'left': '50%',
        '-ms-transform': 'translateX(-50%)',
        'transform': 'translateX(-50%)',
    'color': '#00ffff',
    'font-size':'17px',
    'font-weight': 'bold',
    'font-style': 'italic',
'font-family': 'Courier New Courier, monospace',
  

   });
      
           
    


  $("#destroy").css({
    'margin-left': '20%',
  'cursor': 'pointer',
  'display': 'inline',
  
 
  'border': '0',

  
  'border-radius': '30px',
   });
      
           
    }
    function cssReseau() {

      $("#reseau").css({
            'width': '30px',
            'position': 'fixed',
            'top':'50%',
            'left':'0%',
          'padding':'1%',
          
          
          'border':'1px solid #00ffff',
        'background':'rgba(0,0,0,0.3)',
        
        
        
          });

          $("#imgf").css({
            'width': '30px',
            'height': '30px',
              
           });
           $("#imgt").css({
            'width': '30px',
            'height': '30px',
              
           });
           $("#imgi").css({
            'width': '30px',
            'height': '30px',
              
           });
           $("#imgw").css({
            'width': '30px',
            'height': '30px',
              
           });
        }

    function cssLogin() {

  $("#login").css({
        'width': '200px',
        'position': 'fixed',
        'top':'50%',
        'right':'0%',
        'transform': 'translateX(80%)',

       'padding':'10px',
    
    'background':'rgba(0,0,0,0.3)',
    
    'overflow': 'hidden',
    'border':'1px solid #00ffff',
    
      });
      $("#divm").css({
        'width': '20%',
        'margin-top': '27%',
        
        'float':'left',
        
       });
       $("#imgmb").css({
        'width': '100%',
        'height': '100',
        
       });
       $("#imgu").css({
        'width': '60%',
        'height': '60%',
        'position': 'relative',
         'left': '50%',
        '-ms-transform': 'translateX(-50%)',
        'transform': 'translateX(-50%)',

       
        'border-radius': '50%',
        'border': '1px solid yellow',
       });
       $("#lclient").css({
        'display': 'block',
        
        'margin-left': '35%',
         
       });
       
       

       $("#loginb").css({
        'width': '78%',
        'float': 'right',
        
        'box-shadow': '1px 1px 5px black',
  'border-radius': '5%',
       });
       
       
           $("#pseudo").css({
            'margin':'2px 0',
            'width': '50%',
            'margin-left': '25%',
           });
           $("#passe").css({
            'margin':'5px 0',
            'margin-left': '25%',
            'width': '50%',
            
           });
           
    
           $("#valider").css({
            'width': '50px',
          'cursor': 'pointer',
          'margin-left': '5%',
          'background': '#00ffff',
          'border': '0',
          
          'border-radius': '30px',
           });
    
    
           $(".senregistrer").css({
            'width': '50px',
          'cursor': 'pointer',
          'display': 'inline',
          
          'color': '#00ffff',
          'border': '0',

          
          'border-radius': '30px',
           });
    
          
    
            
               
        }
