
var X = window.screen.availWidth
var Y = window.screen.availHeight

cssGlobal()
cssform()
cssBouton()
function cssGlobal() {
    
    
    $("html").css({
        'overflow': 'hidden',
        'background-image': 'linear-gradient(rgba(0,0,0,0.4),rgba(0,0,0,0.4)),url(public/image/admi/fond.jpg)',
       
      });


       
    $(".full-page").css({
        'width': '100%',
	'height': '100%',

         'background-position': 'center',
        
        'position': 'absolute',
       
  
      });
     
     
 }
function cssform() {
   $(".form-box").css({
        'width':'380px',
'height':'480px',
'position':'relative',
'margin':'2% auto',
'background':'rgba(0,0,0,0.3)',
'padding':'10px',
'overflow': 'hidden',


      });
       
   }

   function cssBouton() {

    
    
   
$(".input-group-login").css({
    'top': '150px',
	'position':'absolute',
	'width':'280px',
	'transition':'.5s',
   });

$(".input-group-register").css({
    'top': '120px',
	'position':'absolute',
	'width':'280px',
	'transition':'.5s',
   });

$(".input-field").css({
    'width': '100%',
	'padding':'10px 0',
	'margin':'5px 0',
	'border-left':'0',
	'border-top':'0',
	'border-right':'0',
	'border-bottom': '1px solid #999',
	'outline':'none',
	'background': 'transparent',
   });
$(".button").css({
    'width': '85%',
	'padding': '10px 30px',
	'cursor': 'pointer',
	'display': 'block',
	'margin': 'auto',
	'background': '#ffe4b5',
	'border': '0',
    'margin-top': '40px',
	'outline': 'none',
	'border-radius': '30px',
   });



$(".check-box").css({
    'margin': '30px 10px 34px 0',
   });

$("span").css({
    'color':'#777',
	'font-size':'12px',
	'bottom':'68px',
	'position':'absolute',
   });

$("#login").css({
    'left':'50px',
   });
$("#login input").css({
    'color':'white',
	'font-size':'15',
   });

$("#btn").css({
    'top': '0',
	'left':'0',
	'position': 'absolute',
	'width': '110px',
	'height': '100%',
	'background': '#F3C693',
	'border-radius': '30px',
	'transition': '.5s',
   });

    $(".toggle-btn").css({
        'padding':'10px 30px',
    'cursor':'pointer',
    'background':'transparent',
    'border':'0',
    'outline': 'none',
    'position': 'relative',
       });

    $(".button-box").css({
        'width':'220px',
        'margin':'35px auto',
        'position':'relative',
        'box-shadow': '0 0 20px 9px #ff61241f',
        'border-radius': '30px',
       });
        
    }
    