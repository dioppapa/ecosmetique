
      function  curveGlobale(nl , index ) {
    
       
        if( nl==1){
    
      var tab =   spana($('.pdescription:eq('+index+') .line').eq(0) , index)
      
     
       curva(tab[0]  , tab[1] , index )
    
     
    }
    else if( nl==2){
    var tabb =   spanb($('.pdescription:eq('+index+') .line').eq(1) , index)
        
    var tab =   spana($('.pdescription:eq('+index+') .line').eq(0) , index)
  
    
         curvb(tabb[0]  , tabb[1] , index    )
        curva(tab[0]  , tab[1] , index  )
    
       
    }
    else if( nl==3){
     
    var tabbb =   spanc($('.pdescription:eq('+index+') .line').eq(2) , index)
   
    var tabb =   spanb($('.pdescription:eq('+index+') .line').eq(1), index )
    var tab =   spana($('.pdescription:eq('+index+') .line').eq(0) , index )
    
    
    curvc(tabbb[0]  , tabbb[1] , index  )
    curvb(tabb[0]  , tabb[1] , index  )
        curva(tab[0]  , tab[1] , index  )
    
       
    
    }
    
    
       }
    
    
    


function textt(txt , index) {
     
  var text = txt.text();
  var html = "";



$('.pdescription').eq(index).html('')

  var ts = text.length
     

  if( ts  <= 40 ){
 
   
    var tsr = (40 - ts)/2
    var ta = ""
     var tb = ""

for(  var k = 0 ; k < tsr ; k++){
ta +=  ' '
tb +=  ' '
}
   html += '<div class="line">' + ta + text + tb +'</div>'


  }

  else if  (ts  > 40 && ts <= 80 ) {
    
    var tt =  text.substring(0 , 40) 
    html += '<div class="line">' + tt +'</div>'

    var rr = text.substring( 40) 
   var ts = rr.length
   var tsr = (40 - ts)/2
    var ta = ""
     var tb = ""

     
  

for(  var k = 0 ; k < tsr ; k++){
ta +=  ' '
tb +=  ' '
}

  html += '<div class="line">' + ta + rr + tb +'</div>'

  
  

  
  }
  else{
    
    var tt =  text.substring(0 , 40) 
    html += '<div class="line">' + tt +'</div>'
    var rr = text.substring( 40) 
    var ttt =  rr.substring(0 , 40) 
    html += '<div class="line">' + ttt +'</div>'

    var rrr = rr.substring( 40) 




    var ts = rrr.length
   var tsr = (40 - ts)/2
    var ta = ""
     var tb = ""

     
  

for(  var k = 0 ; k < tsr ; k++){
ta +=  ' '
tb +=  ' '
}

html += '<div class="line">' + ta + rrr + tb +'</div>'

  
  }


  


 $('.pdescription').eq(index).html(html)


$('.line').css({
 
'position': 'relative'
   
});






return $('.pdescription:eq('+index+') .line').length

}



     

function reverseCurveGlobale( index , y ) {
    
      
  curvra( index )
  curvrb( index )
  curvrc( index )

     
        var text = $('.pdescription').eq(index).text()
         
           $('.pdescription').eq(index).text(text)
        cssUnProduit()
        $(".pdescription").eq(y).css({
         'margin-top': '-15px',
         
          });
       


     

  }

   function renivellement(nl) {
    

    if(nl==1){
      var ll = $('.line').eq(0).text().length 
        if( ll > 40)
        $('.line .a').eq(0).remove()
    }

    if(nl==2){
      var ll = $('.line').eq(1).text().length 
        if( ll > 40)
        $('.line .aa').eq(0).remove()
    }

    if(nl==3){
      var ll = $('.line').eq(2).text().length 
        if( ll > 40)
        $('.line .aaa').eq(0).remove()
    }
    

    
  

  }

  
  
 
 


    function spanc( txt , index) {
      
      var tab = []
        var text = txt.text();
       var ts = text.length
     
     
       var mt = ts/2 
     
     if(ts%2 == 0)
     
     mt = (ts/2)  
     else
     mt = (ts/2)  - 1
     
     
     
     var texta = text.substring(0,mt)
     var textb = text.substring(mt)
     
       
      var html = "";
     
    
     
     
       for( var a = 0 ; a < texta.length ; a++){
        html += '<span class="a">' + texta.charAt(a) + '</span>';
  
       }
      
   
       for( var a = 0 ; a < textb.length ; a++){
        html += '<span class="b">' + textb.charAt(a) + '</span>';
  
       }
     
      
       
  
     txt.html(html);
       

    
     $('.pdescription:eq('+index+') .aaa').css({
      'position':"absolute",
      
        
     });
   
     $('.pdescription:eq('+index+')  .bbb').css({
      'position':"absolute",
       
        
     });

      
     
       tab.push(texta) 
       tab.push(textb) 
       
        return tab ;
         }

  function spanb( txt , index) {
    var tab = []
        var text = txt.text();
       var ts = text.length
     
      
       var mt = ts/2 
     
     if(ts%2 == 0)
     
     mt = (ts/2)  
     else
     mt = (ts/2)  - 1
     
     
     
     var texta = text.substring(0,mt)
     var textb = text.substring(mt)
     
       
      var html = "";
     
    
      
    
     
       
       for( var a = 0 ; a < texta.length ; a++){
        html += '<span class="aa">' + texta.charAt(a) + '</span>';
  
       }
      
   
       for( var a = 0 ; a < textb.length ; a++){
        html += '<span class="bb">' + textb.charAt(a) + '</span>';
  
       }
      

     txt.html(html);
     
     $('.pdescription:eq('+index+') .aa').css({
      'position':"absolute",
      
        
     });
   
     $('.pdescription:eq('+index+')  .bb').css({
     'position':"absolute",
       
        
     });
       tab.push(texta) 
       tab.push(textb) 
       
       
   
     
      return tab ;
     
    
         }
      
    function spana( txt ,  index) {
      
    var tab = []
      var text = txt.text();
     var ts = text.length
     
     var mt = ts/2 
   
   if(ts%2 == 0)
   
   mt = (ts/2)  
   else
   mt = (ts/2)  - 1
   
   
   
   var texta = text.substring(0,mt)
   var textb = text.substring(mt)
   
     
    var html = "";
   
  
    
    for( var a = 0 ; a < texta.length ; a++){
      html += '<span class="a">' + texta.charAt(a) + '</span>';

     }
    
 
     for( var a = 0 ; a < textb.length ; a++){
      html += '<span class="b">' + textb.charAt(a) + '</span>';

     }
   
     
     

   txt.html(html);
     
   
   $('.pdescription:eq('+index+') .a').css({
    'position':"absolute",
    
      
   });
 
   $('.pdescription:eq('+index+')  .b').css({
    'position':"absolute",
     
      
   });

     
     tab.push(texta) 
     tab.push(textb) 
     
      return tab ;
       }
    
      
  
       function curvra( index  ) {
    
        var tsa = $('.pdescription:eq('+index+') .line .a').length 
        var tsb = $('.pdescription:eq('+index+') .line .b').length 
      
        var ll = $('.pdescription:eq('+index+') .line').eq( 0).text().length 

       
          
      


          for( var i = 0 ; i < tsb ; i ++){
            var tx = 0
            var ty = 0
    
       
    
         if( ll == 40){
              tx = 5*i 
              ty =  aa* Math.pow(i,2) 
        
            }
             
              else {
             tx = 5*i  - 5
             ty =  aap* Math.pow(i,2) 
             
            }
    
    
        $('.pdescription:eq('+index+') .b').eq(i).css({
        
         //  transform:`translate(${tx}px,${-ty}px)`
         'transform':"translate(" +tx + "px,"+ -ty + "px)"
      
    
      })
      }
      
      for( var i = 0 ; i < tsa ; i ++){
          
        var tx = 5*i - 100
        var ty =  aa * Math.pow((tsa -i),2) 
      
    
       
        $('.pdescription:eq('+index+')  .a').eq(i).css({
        
          // transform:`translate(${tx}px, ${-ty}px)`
           'transform':"translate(" +tx + "px,"+ -ty + "px)"
      
    
      })
      }
        
    
      
    

    


      }

      function curvrb( index  ) {
    
        var tsa = $('.pdescription:eq('+index+') .line .aa').length 
        var tsb = $('.pdescription:eq('+index+') .line .bb').length 
      
        var ll = $('.pdescription:eq('+index+') .line').eq( 1).text().length 

       
          
      
      


          for( var i = 0 ; i < tsb ; i ++){
            var tx = 0
            var ty = 0
    
       
    
         if( ll == 40){
              tx = 5*i 
              ty =  aa* Math.pow(i,2) - 12
        
            }
             
              else {
             tx = 5*i  - 5
             ty =  aap* Math.pow(i,2) - 12
             
            }
    
    
        $('.pdescription:eq('+index+') .bb').eq(i).css({
        
          // transform:`translate(${tx}px,${-ty}px)`
          'transform':"translate(" +tx + "px,"+ -ty + "px)"
      
    
      })
      }
      
      for( var i = 0 ; i < tsa ; i ++){
          
        var tx = 5*i - 100
        var ty =  aa * Math.pow((tsa -i),2) - 12
      
    
       
        $('.pdescription:eq('+index+')  .aa').eq(i).css({
        
        //   transform:`translate(${tx}px, ${-ty}px)`
        'transform':"translate(" +tx + "px,"+ -ty + "px)"
      
    
      })
      }
        
    
      
    


      }
      
      function curvrc( index  ) {
    
        var tsa = $('.pdescription:eq('+index+') .line .aaa').length 
        var tsb = $('.pdescription:eq('+index+') .line .bbb').length 
      
        var ll = $('.pdescription:eq('+index+') .line').eq( 2).text().length 

       
          
      
      


          for( var i = 0 ; i < tsb ; i ++){
            var tx = 0
            var ty = 0
    
       
    
         if( ll == 40){
              tx = 5*i 
              ty =  aa* Math.pow(i,2) - 23
        
            }
             
              else {
             tx = 5*i  - 5
             ty =  aap* Math.pow(i,2) - 23
             
            }
    
    
        $('.pdescription:eq('+index+') .bbb').eq(i).css({
        
          // transform:`translate(${tx}px,${-ty}px)`
          'transform':"translate(" +tx + "px,"+ -ty + "px)"
      
    
      })
      }
      
      for( var i = 0 ; i < tsa ; i ++){
          
        var tx = 5*i - 100
        var ty =  aa * Math.pow((tsa -i),2) - 23
      
    
       
        $('.pdescription:eq('+index+')  .aaa').eq(i).css({
        
         //  transform:`translate(${tx}px, ${-ty}px)`
           'transform':"translate(" +tx + "px,"+ -ty + "px)"
      
      })
      }
        
    
      
    

         


      }
      

       function curva(texta , textb , index  ) {
    
        var tsa = texta.length 
        var tsb = textb.length 
      
        var ll = $('.pdescription:eq('+index+') .line').eq( 0).text().length 

       
       
          
       
            for( var i = 0 ; i < tsb ; i ++){
              var tx = 0
              var ty = 0
      
         
      
           if( ll == 40){
             if(is.ie())
                tx = 5*i + 100
                else
                tx = 5*i 
              

                ty =  a* Math.pow(i,2) 
          
              }
               
                else {

                  if(is.ie())
                  tx = 5*i  - 5  + 100
                else
                  tx = 5*i - 5
                 
               ty =  ap* Math.pow(i,2) 
               
              }
      
      
          $('.pdescription:eq('+index+') .b').eq(i).css({
          
           //  transform:`translate(${tx}px,${-ty}px)`
             'transform':"translate(" +tx + "px,"+ -ty + "px)"
      
      
        })
        }
        
      
      
        for( var i = 0 ; i < tsa ; i ++){
          

          var tx = 0
           

               
          if(is.ie())
          tx = 5*i  
        else
        tx = 5*i - 100


          var ty =  a * Math.pow((tsa -i),2)
        
      
         
          $('.pdescription:eq('+index+')  .a').eq(i).css({
          
           //  transform:`translate(${tx}px, ${-ty}px)`
             'transform':"translate(" +tx + "px,"+ -ty + "px)"
      
      
        })
        }
          
      
        
      
         
      
        
      
      
      
      }
      
      function curvb(texta , textb , index) {
    

  

        var tsa = texta.length 
        var tsb = textb.length 
    
        var ll = $('.pdescription:eq('+index+')  .line').eq( 1).text().length 
        
       
        

      
    
          for( var i = 0 ; i < tsb ; i ++){
            var tx = 0
            var ty = 0
    
            if( ll == 40){

              if(is.ie())
              tx = 5*i + 100
              else
              tx = 5*i 

              ty =  a* Math.pow(i,2) - 12
        
            }
             
              else {

                if(is.ie())
                tx = 5*i - 5 + 100
                else
             tx = 5*i  - 5

             ty =  ap* Math.pow(i,2) - 12
             
            }
    
    
         
      
         
          $('.pdescription:eq('+index+')  .bb').eq(i).css({
          
            // transform:`translate(${tx}px,${-ty}px)`
             'transform':"translate(" +tx + "px,"+ -ty + "px)"
      
      
        })
        }
      
        for( var i = 0 ; i < tsa ; i ++){
          
          var tx  = 0
          
          if(is.ie())
          tx = 5*i 
          else
          tx = 5*i - 100


          var ty =  a * Math.pow((tsa -i),2) - 12
        
      
         
          $('.pdescription:eq('+index+')  .aa').eq(i).css({
          
           //  transform:`translate(${tx}px, ${-ty}px)`
             'transform':"translate(" +tx + "px,"+ -ty + "px)"
      
      
        })
      }
        
      
     
      
      
      }
    
        
      
      function curvc(texta , textb , index) {
    
        var tsa = texta.length 
        var tsb = textb.length 
      
        var ll = $('.pdescription:eq('+index+') .line').eq( 2).text().length 
        
      
    
       
        for( var i = 0 ; i < tsb ; i ++){
    
        
       
          var tx = 0
            var ty = 0
    
            if( ll == 40){


              if(is.ie())
              tx = 5*i + 100
              else
              tx = 5*i 
            

              ty =  a* Math.pow(i,2) - 23
        
            }
             
              else {

                if(is.ie())
                tx = 5*i - 5 + 100
                else
             tx = 5*i  - 5
             ty =  ap* Math.pow(i,2) - 23
             
            }
    
          
        
      
         
          $('.pdescription:eq('+index+')  .bbb').eq(i).css({
          
           //  transform:`translate(${tx}px,${-ty}px)`
           'transform':"translate(" +tx + "px,"+ -ty + "px)"
      
      
        })
        }
      
        for( var i = 0 ; i < tsa ; i ++){
          
          var tx  = 0

          if(is.ie())
          tx = 5*i 
          else
           tx = 5*i - 100
          var ty =  a * Math.pow((tsa -i),2) - 23
        
      
         
          $('.pdescription:eq('+index+')  .aaa').eq(i).css({
          
           //  transform:`translate(${tx}px, ${-ty}px)`
           'transform':"translate(" +tx + "px,"+ -ty + "px)"
      
      
        })
        }
      
     
      
      }
    
      
        
      
        
        
        
      
       
       
      
      

  


