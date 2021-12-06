var w = $(window).width()

var h = $(window).width()

cssDivHeader() 
cssbody()

csshoverbouton()
cssclickbouton()
curenntcssitem(0)
curenntcsstab(0)
curenntcsstabp(0)
curenntcsstabc(0)
curenntcsstabl(0)
curenntcsstabpa(0)
csshovermenu()
cssArchive()
function csshovermenu() {
    $('.classdivm').hover(function(){
        var i = $(this).index()
        
        $(".classdivm").eq(i).css({
                  'background-image': 'linear-gradient(#87cefa,white)',
            }) ;

    
        },function(){
            $(".classdivm").css({
                'background-image': 'linear-gradient(#c6ffec,white)',
          }) ;
            
      });
    
    }


function csshoverbouton() {
    $('.bt').hover(function(){
        var i = $(this).index()
        
        $('.bt').eq(i).css({
            
        'box-shadow': '1px 1px 12px #555',
    });

        },function(){
          $('.bt').css({
            'box-shadow': '1px 1px 3px #555',

          });
      });
    
    }

    function cssclickbouton() {

        $('.bt')
        .mousedown(function(){
            var i = $(this).index()
            $('.bt').eq(i).css({
            
                'box-shadow': '1px 1px 3px #555 inset',
                'background': '#dcdcdc',
            });
        
                            })
        .mouseup(function(){

            var i = $(this).index()
           
            $('.bt').eq(i).css({
            'box-shadow': '1px 1px 3px #555',
            'background': '',
        });
                              })
        .click(function(){
           
            var i = $(this).index()
          if( i == 1 && curParti == 1){
            
            $('.divsup').eq(0).css({
                'display': 'block',
                
            });
          }
          else if( i == 1 && curParti == 2){
           
            $('.divsup').eq(1).css({
                'display': 'block',
                
            });
          }

          else if( i == 5 && curParti == 2){
           
            changementPourAjout(2)
            $('.ajvalider').eq(1).css({
                
                'margin-left':'20%',
            });
            $('.ajvalider').eq(2).css({
                'display': 'inline',

            });
            $('.ajvalider').eq(0).css({
                'display': 'none',
                

            });
            $('.ajvalider').eq(2).attr("disabled", true)
           
          }

          else if( i == 6 && curParti == 2){
           
            changementPourAjout(1)
            $('.bt').eq(6).attr("disabled", true)
           
            $('.ajvalider').eq(2).css({
                'display': 'none',
                
            });
            $('.ajvalider').eq(0).css({
                'display': 'inline',
                'margin-left':'20%',

            });
            $('.ajvalider').eq(1).css({
                
                'margin-left':'',
            });
 
       }

       else if( i == 0 ){
           
        $(".partimenu").css({
            'display': 'none',
        }) ;
          $(".partimenu").eq(7).css({
            'display': 'block',
        }) ;
  
   }

          
           
    
    })



       
            }



              

              function cssinputa(){
                  $(".inputa").css({
                               
                'position': 'absolute' , 
                
                'left': '50%',
                
                '-ms-transform': 'translateX(-50%)',
                'transform': 'translateX(-50%)',
            
            
                'margin-left': '20%' , 
                'font-weight': 'bold',
'font-style': 'italic',

                
               
            'font-size': '10px' , 
            'width': '50%' ,
            
            }) 
                  
              }

              function cssinputannuler(){
                $(".clientdlabb").css({
                'position': 'absolute' , 
                                
                'left': '50%',
                
                '-ms-transform': 'translateX(-50%)',
                'transform': 'translateX(-50%)',
            
            
                'margin-left': '20%' , 
                'font-weight': 'bold',
'font-style': 'italic',

}) 

                $(".clientdlabb").eq(8).css({
                        'font-weight': 'bold',
                        'font-style': 'italic',

                            'font-size': '10px' , 
                       'width': '50%' ,
          
          }) 
                
            }
function cssbody() {
    $("#body").css({
                                        
        
        'width': '100%' , 
        'margin-top': '3%' , 
        'box-shadow': '1px 1px 12px #555',
        'border-radius': '2%' , 
        }) ;
       
        $("#body").height((h*50)/100)
        cssmenu()
        csscorps()
}

function cssDivClient() {
    $("#tabclient").css({
                                        
         
        'width': '60%' , 
        'float': 'left' ,   
        'overflow': 'auto' ,       
        'margin-top': '5%' , 
        'margin-left': '4%' , 
        }) ;
        $("#tabclient").height((h*40)/100)

        $(".tabclient , .tabclientp , .tabcommande , .tablivraison  , .tabpayement").css({
                                        
            
            'width': '100%' , 
            'border-collapse': 'collapse',
            'cursor':'pointer',
            }) ;

            $("td,th").css({
                                        
            
                'border': '1px solid black',
                'border-spacing': '5px',
                'text-align': 'center',
                'font-size':'12px',
                'cursor':'pointer',
                }) ;

                $("tr:nth-child(even)").css({
                    'background-color': '#eee',
                    }) ;
                    $("tr:nth-child(odd)").css({
                        'background-color': '#fff',

                        }) ;
                        $("th").css({
                            'color': 'black',
                            
                            'background-image': 'linear-gradient(#87cefa,white)',
    
                            }) ;
                  
                            $("tbody>tr>:nth-child(5)").css({
                                'font-size':'11px',
                               
                                }) ;
                                $("tbody>tr>:nth-child(6)").css({
                                    'font-size':'11px',
                                   
                                    }) ;
                                    $("tbody>tr>:nth-child(7)").css({
                                        'font-size':'11px',
                                        
                                        }) ;
                  
                                        $("th").css({
                                        
            
                                           
                            
                            'font-size':'13px',
                                                           
                            
                                            }) ;
        $("#tabapercu").css({
            'float': 'right' ,       
            'position': 'relative' ,       
            'background-image': 'linear-gradient(#c6ffec,white)',
            'background-image': 'linear-gradient(#87cefa,white)',
            'border-radius': '10%' ,
            'width': '30%' , 
            'margin-right': '2%' , 
            'margin-top': '10%' , 
            }) ;

            $("#tabapercu").height((h*30)/100)

            $("#idapercup").css({
                'position': 'absolute' , 
                
                'left': '50%',
                
                '-ms-transform': 'translateX(-50%)',
                'transform': 'translateX(-50%)',
                }) ;
                $("#idapercup").height((h*10)/100)
                $("#idapercup").width((w*10)/100)

                
                $("#divclientd").css({
                    'position': 'absolute' , 
                    
                    'width': '100%' , 
                    'top': '55%' , 
                    
                    }) ;
                    $("#divclientd").height((h*14)/100)

                    $(".divclientitem").css({
                        
                        
                        'width': '100%' , 
                        'margin-bottom': '2%' , 
                        'position': 'relative' , 
                        'background-image': 'linear-gradient(#c6ffec,white)',
                        
                        }) ;
                        $(".divclientitem").height((h*2)/100)

                        $(".clientdlab").css({
                        
                            'margin-left': '10%' , 
                            'font-weight': 'bold',
                            'font-style': 'normal',
                            'color': 'blue' , 
                            
                            }) ;
                            $(".clientdlabb").css({
                                'position': 'absolute' , 
                                
                                'left': '50%',
                                
                                '-ms-transform': 'translateX(-50%)',
                                'transform': 'translateX(-50%)',
                            
                            
                                'margin-left': '20%' , 
                                'font-weight': 'bold',
    'font-style': 'italic',

                                
                                }) ;
                           
                        
            $("#idlink").css({
                'position': 'relative' , 
                
                'width': '100%' , 
                'top': '40%' , 
                'padding-left': '10%',
                }) ;
                $("#idlink").height((h*2)/100)

                $("#idfac").css({
                    'position': 'absolute' , 
                    'top': '50%',
                    'left': '25%',
                    'transform': 'translate(-50% , -50%)',
                   
                    }) ;
                    $("#idfac").width((w*2)/100)
                   $("#idfac").height((w*2)/100)

                   $("#idtwitt").css({
                    'position': 'absolute' , 
                    'top': '50%',
                    'left': '40%',
                    'transform': 'translate(-50% , -50%)',
                   
                    }) ;
                    $("#idtwitt").width((w*2)/100)
                   $("#idtwitt").height((w*2)/100)

                   $("#idinst").css({
                    'position': 'absolute' , 
                    'top': '50%',
                    'left': '55%',
                    'transform': 'translate(-50% , -50%)',
                   
                    }) ;
                    $("#idinst").width((w*2)/100)
                   $("#idinst").height((w*2)/100)

                   $("#idmess").css({
                    'position': 'absolute' , 
                    'top': '50%',
                    'left': '70%',
                    'transform': 'translate(-50% , -50%)',
                   
                    }) ;
                    $("#idmess").width((w*2)/100)
                   $("#idmess").height((w*2)/100)
                   $('.tableline').hover(function(){
            
                    var a = $(this).index() -1
                    $(".tableline").eq(a).css({
                    
                      'background-image': 'linear-gradient(#87cefa,white)',
                  
                         
                    }) ;
            
                    },function(){
                        curenntcsstab( curClientindex)
  
                  });
                  
                }

                function cssProduit() { 
                 $("#tabproduit").css({
        'overflow': 'auto' ,                   
         
        'width': '60%' , 
        'float': 'left' ,       
        'margin-top': '5%' , 
        'margin-left': '4%' , 
         
        }) ;
        $("#tabproduit").height((h*40)/100)



                    $("#tableapercup").css({
                        'float': 'right' ,       
                        'position': 'relative' ,       
                        'background-image': 'linear-gradient(#c6ffec,white)',
                        'background-image': 'linear-gradient(#87cefa,white)',
                        'border-radius': '10%' ,
                        'width': '30%' , 
                        'margin-right': '2%' , 
                        'margin-top': '10%' , 
                        
                        }) ;
                        
                        $("#tableapercup").height((h*30)/100)
                       
                        
                        $("#idapercupp").css({
                            'position': 'absolute' , 
                            
                            'left': '50%',
                            
                            '-ms-transform': 'translateX(-50%)',
                            'transform': 'translateX(-50%)',
                            }) ;
                            $("#idapercupp").height((h*10)/100)
                            $("#idapercupp").width((w*10)/100)

                            $(".divsup").css({
                                'position':'relative',
                                'margin-top':'47%',
                               
                                'border':'1px solid green',
                                }) ;
                                $(".divajout").css({
                                    
                                    'margin-top':'47%',
                                    
                                     }) ;
                                    $(".changeimage").css({
                                    
                                        
                                        'margin-left':'23%',
                                        
                                        }) ;
                                        
                                        $(".control").css({
                                    
                                            'margin-top':'5%',

                                            
                                        }) ;
                                        $(".ajvalider").css({
                                    
                                        
                                           
                                            
                                            }) ;
                                        $(".ajvalider").eq(0).css({
                                    
                                        
                                           
                                            
                                            }) ;

                                $(".labelsup").css({
                                    'font-size':'12px' ,
                                    'padding-left':'10%' ,
                                   
                                    }) ;
                                    $(".inputvalidationa").css({
                                        'font-size':'12px' ,
                                        'margin-left':'23%' ,
                                       
                                        }) ;
                               
                                

                            
                $("#divclientdp").css({
                    'position': 'absolute' , 
                    
                    'width': '100%' , 
                    'top': '55%' , 
                    
                    }) ;
                    $("#divclientdp").height((h*14)/100)

                    $(".clientdlab").eq(8).css({
                        'float': 'left' , 
                        'margin-top': '8%' , 
                        'font-size': '10px' ,
                        'color': 'blue' , 
                        
                        'text-align': 'center' ,
                        
                        }) ;

                        $(".clientdlabb").eq(8).css({
                        
                            'font-size': '10px' , 
                            'width': '50%' ,
                            'border': '1px solid blue' ,
                            
                        
                        'text-align': 'center' ,
                            }) ;
                            
                            
                            
                            $(".divclientitem").eq(8).css({
                                
                                
                                }) ;
                    
            
                    
                }
   function cssCommande(){
       
    $("#tabcommande").css({
        'overflow': 'auto' ,                   
         
        'width': '60%' , 
        'float': 'left' ,       
        'margin-top': '5%' , 
        'margin-left': '4%' , 
         
        }) ;
        $("#tabcommande").height((h*40)/100)


        $("#tableapercucom").css({
            'float': 'right' ,       
            'position': 'relative' ,       
            'background-image': 'linear-gradient(#c6ffec,white)',
            'background-image': 'linear-gradient(#87cefa,white)',
            'border-radius': '10%' ,
            'width': '30%' , 
            'margin-right': '2%' , 
            'margin-top': '10%' , 
            
            }) ;
            
            $("#tableapercucom").height((h*30)/100)
          

            $("#idapercom").css({
                'position': 'absolute' , 
                
                'left': '50%',
                
                '-ms-transform': 'translateX(-50%)',
                'transform': 'translateX(-50%)',
                }) ;
                $("#idapercom").height((h*10)/100)
                $("#idapercom").width((w*10)/100)


                $("#divcommandet").css({
                    'position': 'absolute' , 
                    'border': '1px solid blue' , 
                    'width': '100%' , 
                    'top': '35%' , 
                    
                    }) ;
                    $("#divcommandet").height((h*14)/100)

                
                    $(".clientdlabc").css({
                        
                        'margin-left': '2%' , 
                        'font-weight': 'bold',
                        'font-style': 'normal',
                        'color': 'blue' , 
                        'font-size': '12px',
                        
                        }) ;


                        $(".clientdlabc").eq(6).css({
                        
                          
                          'font-size': '12px',
   
    
                           }) ;

                        $(".clientdlabbc").eq(6).css({
                        
                            'display': 'ineline' , 
                            'font-size': '12px',
                            'margin-left': '2%' , 
                            
                            }) ;


        
   }
                function cssUpdatedetaip() {
                            $("#idapercupp").css({
                                            'position': 'absolute' , 
                                            
                                            'left': '50%',
                                            
                                            '-ms-transform': 'translateX(-50%)',
                                            'transform': 'translateX(-50%)',
                                            }) ;
                                            $("#idapercupp").height((h*10)/100)
                                            $("#idapercupp").width((w*10)/100)
                
                                            $(".divsup").css({
                                                'position':'relative',
                                                'margin-top':'47%',
                                               
                                                'border':'1px solid green',
                                                }) ;
                                                $(".divajout").css({
                                                    
                                                    'margin-top':'47%',
                                                    
                                                    'border':'1px solid green',
                                                    }) ;
                                                    $(".changeimage").css({
                                                    
                                                        
                                                        'margin-left':'23%',
                                                        
                                                        }) ;
                                                        $(".ajvalider").css({
                                                    
                                                        
                                                            'margin-top':'10%',
                                                            
                                                            }) ;
                                                        $(".ajvalider").eq(0).css({
                                                    
                                                        
                                                            'margin-left':'20%',
                                                            
                                                            }) ;
                
                                                $(".labelsup").css({
                                                    'font-size':'12px' ,
                                                    'padding-left':'10%' ,
                                                   
                                                    }) ;
                                                    $(".inputvalidationa").css({
                                                        'font-size':'12px' ,
                                                        'margin-left':'23%' ,
                                                       
                                                        }) ;
                                               
                                                
                
                                            
                                $("#divclientdp").css({
                                    'position': 'absolute' , 
                                    
                                    'width': '100%' , 
                                    'top': '55%' , 
                                    
                                    }) ;
                                    $("#divclientdp").height((h*14)/100)
                
                                    $(".clientdlab").eq(8).css({
                                        'float': 'left' , 
                                        'margin-top': '8%' , 
                                        'font-size': '10px' ,
                                        'color': 'blue' , 
                                        
                                        'text-align': 'center' ,
                                        
                                        }) ;
                
                                        $(".clientdlabb").eq(8).css({
                                        
                                            'font-size': '10px' , 
                                            'width': '50%' ,
                                            'border': '1px solid blue' ,
                                            
                                        
                                        'text-align': 'center' ,
                                            }) ;
                                            
                                            
                                            
                                            $(".divclientitem").eq(8).css({
                                                
                                                
                                                }) ;
                                    
                            
                                    
                }

                function curenntcsstab(i) {
                    $(".tableline").css({
                        'background-image': '',
                        'cursor':'pointer'
                    }) ;
         
                    $(".tableline").eq(i).css({
                                    
                        
                            
                        'background-image': 'linear-gradient(#87cefa,white)',
                        'cursor':'pointer'
                    }) ;
            
                        
                     
                            }

                            function curenntcsstabp(i) {
                                $(".tablelinep").css({
                                  'background-image': '',
                                    'cursor':'pointer'
                                }) ;
                     
                                $(".tablelinep").eq(i).css({
                                                
                                    
                                        
                                    'background-image': 'linear-gradient(#87cefa,white)',
                                    'cursor':'pointer'
                                }) ;
                        
                                    
                                 
                                        }


                                        function curenntcsstabc(i) {
                                            $(".tablelinec").css({
                                              'background-image': '',
                                                'cursor':'pointer'
                                            }) ;
                                 
                                            $(".tablelinec").eq(i).css({
                                                            
                                                
                                                    
                                                'background-image': 'linear-gradient(#87cefa,white)',
                                                'cursor':'pointer'
                                            }) ;
                                    
                                                
                                             
                                                    }


                                                    function curenntcsstabl(i) {
                                                        $(".tablelinel").css({
                                                          'background-image': '',
                                                            'cursor':'pointer'
                                                        }) ;
                                             
                                                        $(".tablelinel").eq(i).css({
                                                                        
                                                            
                                                                
                                                            'background-image': 'linear-gradient(#87cefa,white)',
                                                            'cursor':'pointer'
                                                        }) ;
                                                
                                                            
                                                         
                                                                }


                                                                function curenntcsstabpa(i) {
                                                                    $(".tablelinepa").css({
                                                                      'background-image': '',
                                                                        'cursor':'pointer'
                                                                    }) ;
                                                         
                                                                    $(".tablelinepa").eq(i).css({
                                                                                    
                                                                        
                                                                            
                                                                        'background-image': 'linear-gradient(#87cefa,white)',
                                                                        'cursor':'pointer'
                                                                    }) ;
                                                            
                                                                        
                                                                     
                                                                            }
     
     function curenntcssitem(i) {
         
        $(".classdivm").eq(i).css({
                        
            
                
            'background-image': 'linear-gradient(#87cefa,white)',
            'cursor':'pointer',
            }) ;

            $(".classflech").eq(i).css({
                     'display': 'block',
                }) ;
         
                }

function cssmenu() {
    $("#menu").css({
        'float': 'left' ,                
        
        'width': '25%' , 
        
        'background-image': 'linear-gradient(white,#eee)',
        'cursor':'pointer',
        'margin-top': '5%' , 
        'padding-top': '5%' ,
        }) ;
       
        $("#menu").height((h*30)/100)

        $(".classdivm").css({
                        
            
            'position': 'relative' , 
            'width': '100%' ,
            'height': '9%' ,
            'margin-bottom': '2%' , 
            'background-image': 'linear-gradient(#c6ffec,white)',
            'cursor':'pointer',
            }) ;

           
           

         
            $(".classicone").css({
                        
                 
                'position': 'absolute' ,
                'top': '50%',
                'left': '13%',
                'transform': 'translate(-50% , -50%)',
                'cursor':'pointer',
                }) ;
                $(".classicone").width((w*2)/100)
                $(".classicone").height((w*2)/100)
  
                $(".classflech").css({
                        
                 
                    'position': 'absolute' ,
                    'top': '50%',
                    'left': '90%',
                    'transform': 'translate(-50% , -50%)',
                    'cursor':'pointer',
                    }) ;
                    $(".classflech").width((w*2)/100)
                    $(".classflech").height((w*2)/100)
      

                $(".classlab").css({
                        
                      
                    'position': 'left' ,
                    'margin-left': '50%' ,
                    'margin-top': '2%' ,
                    
                     
                    'text-align': 'left' ,
                    'font-weight': 'bold',
    'font-style': 'italic',
    
    'cursor':'pointer',

                   
                    }) ;
                    $(".classlab").height((w*2)/100)
  

}

function csscorps() {
    $("#corps").css({
        'float': 'right' ,                    
        'background-image': 'linear-gradient(#eee,white)',

        'width': '70%' , 
        'margin-top': '1%' , 
        
        }) ;
       
        $("#corps").height((h*49)/100)
        cssDivClient()
        cssProduit()
        cssCommande()
        cssparam()
}


function cssparam() {
    $(".divparam").css({
        'float': 'left' ,                    
        'background-image': 'linear-gradient(#eee,white)',
        'border': '1px solid black' , 
       
        'width': '50%' , 
        'margin-top': '1%' , 
        
        }) ;

        $(".divparama").css({
            'position': 'relative' ,   
            'float': 'right' ,                    
            'background-image': 'linear-gradient(#eee,white)',
            'border': '1px solid black' , 
           
            
            'margin-top': '10%' , 
            'margin-right': '10%' , 
            'padding-top': '2%' , 
            
            }) ;
            $(".divparama").width((w*15)/100)
            
        $(".dirimg").width((w*7)/100)
        $(".dirimg").height((h*7)/100)


        $("#imgparam").css({
            'float': 'left' ,                    
            
            'margin-top': '1%' ,
            'margin-bottom': '10%' , 
            
            }) ;
            $("#imgparam").width((w*10)/100)
            $("#imgparam").height((h*10)/100)

            $(".divcontrolp").css({
                'float': 'right' ,                    
                'border': '1px solid blue' ,
                'margin-top': '10%' , 
                
                
                }) ;
                $(".divv, .divvv").css({
                    'position': 'absolute' ,  
                    'border': '1px solid blue' ,                  
                    'top': '92%',
                    'left': '50%',
                    'transform': 'translate(-50% , -50%)',
                    
                    }) ;
                    $(".divv , .divvv").width((w*15)/100)

                    $(".controlpp").eq(0).css({
                        'float': 'left',
                        }) ;
                        $(".controlpp").eq(1).css({
                            'float': 'right',
                            }) ;
                     

                            $(".controlpp , .controlppp").eq(0).width((w*8)/100)
                            $(".controlppp").eq(0).width((w*8)/100)
         

                            $(".controlp").eq(0).css({
                                'position': 'absolute' ,  
                                              
                                'top': '8%',
                                'left': '50%',
                                'transform': 'translate(-50% , -50%)',
                                
                                }) ;
                                $(".controlp").eq(1).width((w*2)/100)
                                $(".controlp").eq(2).width((w*2)/100)
                                $(".controlp").eq(1).height((w*2)/100)
                                $(".controlp").eq(2).height((w*2)/100)
               
               
               
                                $(".controlp").eq(3).css({
                    'position': 'absolute' ,  
                    'border': '1px solid blue' ,                  
                    'top': '92%',
                    'left': '50%',
                    'transform': 'translate(-50% , -50%)',
                    
                    }) ;
    
                cssCurrentDir(0)
}

function cssCurrentDir(i){
    $(".tabparam td").css({
      
        'border': '' ,                  
       
        
        }) ;
    $(".tabparam td").eq(i).css({
       
        'border': '2px solid blue' ,                  
       
        
        }) ;
        
}

function  cssDivHeader()  {

      $("#header").css({
        
       
               
         'width': 'wrap-content' ,      
        

        }) ;
        $("#header").height((h*10)/100)
        $("#htitre").css({
            
             'width': 'wrap-content' ,      
             'height': '50%' ,     
             
  'background-image': 'linear-gradient(white,#c6ffec)',
       
            }) ;
            $('.bt').css({
            
        'box-shadow': '1px 1px 3px #555',
        'border-radius': '5%',
    });
            $("#houtil").css({
                
               
  'background-color': '#eee',
  'box-shadow': '1px 1px 12px #555',
  'margin-top': '1%' ,
                 'width': 'wrap-content' ,      
                 'height': '50%' ,  
                 'background-image': 'linear-gradient(white,#eee)',
            
                }) ;
       
                $("#logoetlabel").css({
                    'position': 'relative',
                       
                    'float':  'left' ,
                   
                   }) ;
                   $("#logoetlabel").width((w*25)/100)
                   $("#logoetlabel").height(((h*10)/100)/2)

                   $("#idlogo").css({
                
                    'float': 'left' ,
                       
                   
                   }) ;
                   $("#idlogo").width((w*5)/100)
                   $("#idlogo").height((h*5)/100)
                
                   $("#idlab").css({
                
                   
                    'position': 'absolute',
                    'top': '50%',
                    'left': '50%',
                    'transform': 'translate(-50% , -50%)',
                    'color':'blue',
                    
       
       'font-family': 'Courier New Courier, monospace',


       'font-weight': 'bold',
       'font-size': '17px',
       'font-style': 'oblique',


           
                   }) ;


                   $("#iduser").css({
                
                   'float':  'right' ,
                   'border-radius':  '50%' ,
                   }) ;
                   $("#iduser").width((w*5)/100)
                   $("#iduser").height((h*5)/100)


                   $("#iddivnot").css({
                    'position':  'relative' ,
                    'display':  'inline' ,
                    'border-left': '2px solid #c6ffec' ,  
                    'float':  'right' ,  
                    'margin-right':  '5%' ,    
                    }) ;
                    $("#iddivnot").width((w*15)/100)
                    $("#iddivnot").height((h*5)/100)
                

                    $("#nota").css({
                        'position': 'absolute',
                    'top': '50%',
                    'left': '35%',
                    'padding': '2%',
                    'transform': 'translate(-50% , -50%)',
                     
                       
                       
                        }) ;
                        $("#nota").width((w*3)/100)
                        $("#nota").height((w*3)/100)

                        $("#notb").css({
                            'position': 'absolute',
                        'top': '50%',
                        'left': '65%',
                        'padding': '2%',
                        'transform': 'translate(-50% , -50%)',
                            
                            }) ;
                            $("#notb").width((w*3)/100)
                                                            $("#notb").height((w*3)/100)

                                                            $("#notaa").css({
                                                                'position': 'absolute',
                                                            'top': '30%',
                                                            'left': '37%',
                                                            'padding': '2%',
                                                            'transform': 'translate(-50% , -50%)',
                                                            'border-radius':  '50%' ,
                                                            'text-align':  'center' ,
                                                            'font-family': 'Courier New, Courier, monospace',

                                                               
                                                                }) ;
                                                                $("#notaa").width((w*2)/100)
                                                                $("#notaa").height((w*2)/100)

                                                                $("#notbb").css({
                                                                    'position': 'absolute',
                                                                'top': '30%',
                                                               
                                                                'left': '67%',
                                                                'padding': '2%',
                                                                'transform': 'translate(-50% , -50%)',
                                                                'border-radius':  '50%' ,
                                                                'text-align':  'center' ,
                                                                'font-family': 'Courier New, Courier, monospace',

                                                                   
                                                                    }) ;
                                                                    $("#notbb").width((w*2)/100)
                                                                    $("#notbb").height((w*2)/100)
    

        
                            $("#divserch").css({
                                'position':  'relative' ,
                                'display':  'inline' ,
                                
                                'border-left':'2px solid #c6ffec' ,  
                                'float':  'right' ,  
                                'margin-right':  '5%' ,    
                                }) ;
                                $("#divserch").width((w*30)/100)
                                $("#divserch").height((h*5)/100)

                                $("#idimgserch").css({
                                        
                                    'display':  'inline' ,
                                    
                                    'float':  'left' ,  
                                    'margin-top':  '5%' , 
                                    }) ;
                                    $("#idimgserch").width((w*2)/100)
                                    $("#idimgserch").height((w*2)/100)


                                    
                                    $("#idinputsercha").css({
                                        
                                        'display':  'inline' ,
                                          
                                        'float':  'right' ,  
                                        'margin-top':  '6%' , 
                                        'border-left':'0',
                                        'border-top':'0',
                                        'border-right':'0',
                                        'border-bottom': '1px solid white',
                                        'background':'rgba(0,0,0,0.1)',
                                        }) ;
                                       
                                        
                                $("#divsercha").css({
                                    'position':  'absolute' ,
                                    'top': '50%',
                        'left': '50%',
                        
                        'transform': 'translate(-50% , -50%)',
                                    'display':  'inline' ,
                                    
                                    'float':  'right' ,  
                                    'background-color':'white' , 
                                    'border-radius':  '10%' ,
                                     'background':'rgba(0,0,0,0.3)',
                                    }) ;
                                    $("#divsercha").width((w*20)/100)
                                    $("#divsercha").height((h*4)/100)
                                  


                                    $("#divbouton").css({
                                         'float':  'right' ,  
                                        'position':  'relative' ,  
                                        
                                        'border-left': '2px solid #c6ffec' ,
                                        'height': '100%' ,
                                        
                                        
                                        }) ;
                                        $("#divbouton").width((w*40)/100)
                                        

                                        $("#idparam").css({
                                            
                                            'position':  'absolute' ,  
                                            'top': '50%',
                                            'left': '95%',
                                            
                                            'transform': 'translate(-50% , -50%)',
                                           
                                           
                                            
                                            }) ;
                                            $("#idparam").width((w*2)/100)
                                            $("#idparam").height((w*2)/100)

                                            

                                        $("#idsup").css({
                                            
                                           'position':  'absolute' ,  
                                           'top': '50%',
                                           'left': '85%',
                                           
                                           'transform': 'translate(-50% , -50%)',
                                          
                                          
                                           
                                           }) ;
                                           $("#idsup").width((w*2)/100)
                                           $("#idsup").height((w*2)/100)


                                           $("#idnp").css({
                                            
                                            'position':  'absolute' ,  
                                            'top': '50%',
                                            'left': '65%',
                                            
                                            'transform': 'translate(-50% , -50%)',
                                           
                                           
                                            
                                            }) ;
                                            $("#idnp").width((w*2)/100)
                                            $("#idnp").height((w*2)/100)
                                           
                                    

  

   

                                            $("#idarch").css({
                                            
                                                'position':  'absolute' ,  
                                                'top': '50%',
                                                'left': '75%',
                                                
                                                'transform': 'translate(-50% , -50%)',
                                               
                                               
                                                
                                                }) ;
                                                $("#idarch").width((w*2)/100)
                                                $("#idarch").height((w*2)/100)



                                                $("#idact").css({
                                            
                                                    'position':  'absolute' ,  
                                                    'top': '50%',
                                                    'left': '55%',
                                                    
                                                    'transform': 'translate(-50% , -50%)',
                                                   
                                                   
                                                    
                                                    }) ;
                                                    $("#idact").width((w*2)/100)
                                                    $("#idact").height((w*2)/100)


                                                    $("#idedit").css({
                                            
                                                        'position':  'absolute' ,  
                                                        'top': '50%',
                                                        'left': '45%',
                                                        
                                                        'transform': 'translate(-50% , -50%)',
                                                       
                                                       
                                                        
                                                        }) ;
                                                        $("#idedit").width((w*2)/100)
                                                        $("#idedit").height((w*2)/100)
         
                                                        $("#idplus").css({
                                            
                                                            'position':  'absolute' ,  
                                                            'top': '50%',
                                                            'left': '35%',
                                                            
                                                            'transform': 'translate(-50% , -50%)',
                                                           
                                                           
                                                            
                                                            }) ;
                                                            $("#idplus").width((w*2)/100)
                                                            $("#idplus").height((w*2)/100)
             
                                                            $("#divgain").css({
                                            
                                                                'display':  'inline' ,
                                                                'position':  'relative' , 
                                                                'border-right': '2px solid #c6ffec' ,
                                                                'float':  'left' , 
                                                                'height':  '100%' ,  
                                                               
                                                                
                                                                }) ;


                                                                $("#divgain").width((w*35)/100)
                                                               
                                                                $("#idlabgaina").css({
                                            
                                                                    'position':  'absolute' ,  
                                                                    'top': '50%',
                                                                    'left': '20%',
                                                                    
                                                                    'transform': 'translate(-50% , -50%)',
                                                                   
                                                                    'font-weight': 'bold',
    'font-style': 'italic',
                                                                    'font-family': 'Courier New, Courier, monospace',

                                                                    
                                                                    }) ;
                                                                    $("#idlabgainb").css({
                                            
                                                                        'position':  'absolute' ,  
                                                                        'top': '50%',
                                                                        'left': '60%',
                                                                        
                                                                        'transform': 'translate(-50% , -50%)',
                                                                       
    'font-size': '20px',
    'font-weight': 'bold',
    'font-style': 'italic',
                                                                       
  
                                                                        }) ;
                                                                        $("#idhide").css({
                                            
                                                                            'position':  'absolute' ,  
                                                                            'top': '50%',
                                                                            'left': '90%',
                                                                            
                                                                            'transform': 'translate(-50% , -50%)',
                                                                           
                                                                           
                                                                            
                                                                            }) ;
                                                                            $("#idhide").width((w*2)/100)
                                                            $("#idhide").height((w*2)/100)
                                                            


                                                            $("#hidegain").css({
                                            
                                                                'position':  'absolute' ,  
                                                                'top': '50%',
                                                                'left': '95%',
                                                                



   'background-image': 'linear-gradient(white,#eee)',

                                                                'transform': 'translate(-50% , -50%)',
                                                               
                                                               
                                                                
                                                                }) ;


                                                                $("#hidegain").width((w*10)/100)
                                                                $("#hidegain").height((w*2)/100)
                                                                
                                                            }
   

    function cssArchive() {
        
                                                 
    $(".archive").css({ 
    
        'position': 'absolute',
        'top': '50%',
        'left': '65%',
        'transform': 'translate(-50% , -50%)',
        'color':'blue',
        

'font-family': 'Courier New Courier, monospace',


'font-weight': 'bold',
'font-size': '17px',
'font-style': 'oblique',

}) ;
    }