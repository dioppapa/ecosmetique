




var stripeHandler = StripeCheckout.configure({
  key: stripePublicKey,
  locale: 'en',
  token: function(token) {

     

      fetch('/stripe', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json',
              'Accept': 'application/json'
          },
          body: JSON.stringify({
              stripeTokenId: token.id 
              
          })
      })

   }
})

function purchaseClicked() {
   
    
    
  var price = parseFloat( 200) * 100
  stripeHandler.open({
     amount :price
        })

      
     
     

}

function purchaseClickedTest() {
   
    
    $('.commander').click(  function(){
        acheterDirectement( )
        stripeDirectement() 
   

      }) ;

}
function acheterDirectement( ) {
      


    var idproduit =   parseInt( $('.mark').eq(  curIndexTab ).text()) 
    var achatData = []

   

    if(clientConnected==true){


      achatData.push( idClient)
        achatData.push(  1)
        achatData.push(  idproduit)


    $.ajax({
      url:"/acheterdirectement",
      datatype : "JSON" ,
      type:"POST" ,
      data:  {data : achatData}, 
       success:function(data) {
              alert( data[0].id)
      }
    });

}
    
   else {
    alert('il faut vous s enregistrer')
  }

  
  }



  function payementDirectement( idcom ) {
    var achatData = []

  
    achatData.push( idcom)
    achatData.push(  1)
   

    $.ajax({
      url:"/payerdirectement",
      datatype : "JSON" ,
      type:"POST" ,
      data:  {data : achatData}, 
       success:function(data) {
              alert( data)
      }
    });


  
  }

function stripeDirectement() {
   
    $.ajax({
        url:"/stripet",
        method:'POST' ,
        success:function(data) {
           
        }
     });

}

function purchaseClickedTestB() {
   
    
      $.ajax({

            url:"/stripe",
            method:'POST' ,
            body: { produit: "satala" },
            success:function(data) {
               
            }
         });

     

}



