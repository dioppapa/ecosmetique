var X = $(window).width() 
var Y = $(document).height()


cssHeader()
cssDiveAndInput()
animeSerch() 
   clickSerch()


function cssautocompl() {
    cssItem()
      $("#apercuacceuil").css({
 'position': 'absolute',
  'left': '50%',
  'top': '12%',
   '-ms-transform': 'translateX(-50%)',
  'transform': 'translateX(-50%)',
     }) ;

      

      
       
   }
  

   
     
   

   function cssHeader() {
    var xx =  (X*98)/100
    
    $("#entete").css({
        'position': 'relative',
       'padding-top':'5%',
         'margin-bottom': '3%',
         }) ;

         $('#entete').width(  xx);
        
        $('#entete').height( Y/5);


        $("#entete").css({
            'background':'rgba(0,0,0,0.3)',
              'background': 'url("public/image/acceuil/beauteb.png")  no-repeat top right,url("public/image/acceuil/beautea.png")  no-repeat top left , rgba(0,0,0,0.3) ',
              
              
             }) ;

             $("#beautea").css({
                'position': 'absolute',
                'left': '50%',
                'top': '50%',
                'width': '200px',
                'height': '70px',
                 '-ms-transform': 'translateX(-50%)',
                'transform': 'translateX(-50%)',
                 }) ;

                 $("#lserch").css({
                    'position': 'absolute',
                    'left': '15%',
                    'top': '60%',
                    
                    'color': 'white',
                    'font-size':'17px',
                    'font-weight': 'bold',
                    'font-style': 'italic',
                    
            
                     }) ;

                     $("#lmess").css({
                        'position': 'absolute',
                        'right': '15%',
                        'top': '20%',
                        
                         '-ms-transform': 'translateX(-50%)',
                        'transform': 'translateX(-50%)',
                        'color': 'white',
                        'font-size':'20px',
                        'font-weight': 'bold',
                        'font-style': 'normal',
                        
       'font-family': 'Courier New Courier, monospace',



                         }) ;

                         $("#lmessb").css({
                            'position': 'absolute',
                            'right': '25%',
                            'top': '33%',
                            
                             '-ms-transform': 'translateX(-50%)',
                            'transform': 'translateX(-50%)',
                            'color': '#00ffff',
                            'font-size':'17px',
                            'font-weight': 'bold',
                            'font-style': 'italic',
                            
                    'font-family': 'sans-serif',

                             }) ;
       
   }
   function cssDiveAndInput(){
    
    


        $("#zonederecherche").css({
            'position': 'absolute',

            'border-left':'0',
            'border-top':'0',
            'border-right':'0',
            'border-bottom': '1px solid white',
            'top': '55%',
            'left': '30%',
            'display': 'none',
             
            }) ;

            $("#serchacceuil").css({
                
                
                'font-size': '12px',
                'font-style': 'italic',
               
               
            'border-left':'0',
            'border-top':'0',
            'border-right':'0',
            'border-bottom': '0',
            'outline':'none',
            'background': 'transparent',
                }) ;
    

                $("#imgserch").css({
                    'float': 'right',
                    'border-radius': '30px',
                    'height': '20px',
                    'width': '20px',
                    
                    }) ;
        
                
 
   }


   
   function cssItem() {


    $(".ca").css({
        
        
        
        'font-weight': 'bold',
        'margin-right': '10px',
        }) ;

    $(".classe").css({
        
       
        
        
        'font-size': '10px',
        'margin-left': '20px',
       
        }) ;
        $(".marque").css({
        
          
          
                'font-size': '8px',
                'margin-left': '20px',
                
            }) ;
            $(".description").css({
        
               
                'margin-left': '20px',
                'font-size': '9px',
                'font-style': 'italic',
                
                }) ;

   
                $(".imgautocomp").css({
                    
                    'height': '30px',
                    'width':'30px',
                    
                    'position': 'absolute',
                    'right': '5%',
                    'top': '30%',
                    
                     '-ms-transform': 'translateX(-50%)',
                    'transform': 'translateX(-50%)',
                    'border-radius': '50px',
                    }) ;

                    
                      
                  
                    $(".mark").css({
                        'color': 'blue',
                        'font-size': '14px',
                       
                        }) ;
    

                        $(".totalitem").css({
                           
                            'height':'5%',
                            'position': 'relative',
                            'margin-bottom':'1%',
                            'background-image':'linear-gradient(white , #c6ffec)' ,
                            'width':'550px',
                            'border-radius': '30px',
                            }) ;          
                        


                
       
   }

   
   function clickSerch() {
    
    $('#lserch').click(function(i){
    
        showInputSerch()
          
      });
   }

   function showInputSerch() {
    $("#zonederecherche").css({
        'display': 'block',
        
       
        }) ; 
  
    $("#lserch").css({
        'display': 'none',
        
       
        }) ; 
        

        $('#serchacceuil')
  .css('width', '0px')
  .animate({
  width : '400px',
  
  },{
  duration : 1500
  , queue : true  // ici peu importe sa valeur
  , complete : function(){
    
  }
  });
   }
   function animeSerch() {
       
    var refre =   setInterval( function() {
        writeSerch()
         }, 500);
    
         
   
   }
 var i = 0
   var tt = "Cliquer ici pour chercher un produit "
 var text = ''
 var tl  = tt.length
   function writeSerch() {
       text = text + tt.charAt(i)
    $("#lserch").text( text)

    if( i >= tl - 1){
      i  = 0
      text = ''
    }
      else
      i = i + 1

   }

   
