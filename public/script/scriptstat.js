
$(".mainb").css({
    'margin-top': '1%',
           'width':'330px',
           'height': '30px',
           'border-bottom': '1px solid #239aff',
           'background-image':'linear-gradient(white , #c6ffec)',
           'transition':'all 0.3s ease in',
               }); 
 
               $("#globale,#stock").css({
                'border-top': '2px solid #239aff',
   
               }); 
 
               
               
               $(".n1").css({
                'color': '#239aff' ,
       'border-top': '1px solid #239aff',
       'border-left': '1px solid #239aff',
       'border-right': '1px solid #239aff',
       'background-color': 'white' ,
   
               });
 
               $(".n2").css({
 
                'color': '#239aff' ,
           'font-size' : '18px' ,
               });
 
 
               $(".n1 , .n2").css({
 
                'cursor':'pointer',
       'height':'24px',
         'padding-left':'5px',
         'padding-right':'5px',
             
           'margin-top': '8px',
           'display': 'inline-block',
           'list-style-type': 'none',
           

           'font-size' : '18px' ,
           'margin-left': '5px',
                   });
   $("#stock").css({
   
           });
 
 
 $("#globale").css({
      
         });
 
 
 
 
         $(".n1").click(function(){

            $(".n1").css({
                   'color': '#239aff' ,
                   'border-top': '1px solid #239aff',
                   'border-left': '1px solid #239aff',
               'border-right': '1px solid #239aff',           
                   'background-color': 'white' ,
            
                        });
            $(".n2").css({
                                                                           
            
                   'border': 'none',
                    
                  'background-color': 'transparent' ,
            
                     'color': '#239aff' ,
                    'font-size': '18px' ,
            
                   }); 
            
            
            
            
            $("#globale").css({
               'display':'block',
                      });
            $("#stock").css({
                 'display':'none',
                    });
            }); 
            
            
            
            
            $(".n2").click(function(){
            
            $(".n2").css({
                   'color': '#239aff' ,
                   'border-top': '1px solid #239aff',
                   'border-left': '1px solid #239aff',
               'border-right': '1px solid #239aff',           
                   'background-color': 'white' ,
            
                      });
            
            $(".n1").css({
                                                                           
            
                   'border': 'none',
                    
                  'background-color': 'transparent' ,
                     'color': '#239aff' ,
                    'font-size': '18px' ,
            
                   }); 
            
            $("#stock").css({
            'display':'block',
                      });
            $("#globale").css({
                 'display':'none',
                    });
            
            }); 
            

            $("#divmyChart").css({
                'float':'left',
                   });

                   $("#divmyChartb").css({
                    'float':'right',
                    'border': '1px solid blue',
                       });
           
           

           
            
                   
            const ctx = document.getElementById('myChart');
            $('#myChart').css({
             
               'border': '1px solid blue',
              
             
             });
          
           var xValues = ["produit", "commande", "payement", "livraison", "achat"];
          var yValues = [55, 49, 44, 24, 15];
          var barColors = ["yellow", "green","blue","orange","brown"];
          
          //var xValues = []
          //var yValues = []
          var id = "myChart"
          var idb = "myChartb"
         
          
          charBar(id ,  xValues , yValues , barColors )
        piChart(idb , xValues , barColors , yValues )
         

          //chartLine(id , xValues , yValues)
          
          
          //generateData("x * 2 + 7", 0, 10, 0.5);
          
          //var xValues = [100,200,300,400,500,600,700,800,900,1000];
          
          /** var xyValues = [
            {x:50, y:7},
            {x:60, y:8},
            {x:70, y:8},
            {x:80, y:9},
            {x:90, y:9},
            {x:100, y:9},
            {x:110, y:10},
            {x:120, y:11},
            {x:130, y:14},
            {x:140, y:14},
            {x:150, y:15}
          ];
          
          
          //var pcolor = "rgba(0,0,255,1)"
               
          //chartscratter(id , 15 , pcolor , xyValues )
          
          var barColors ="red"; 
          var barColors = [
            "rgba(0,0,255,1.0)",
            "rgba(0,0,255,0.8)",
            "rgba(0,0,255,0.6)",
            "rgba(0,0,255,0.4)",
            "rgba(0,0,255,0.2)",
          ]; 
          
          **/
          //chartMultiLine(id , xValues)
          
          
          
          
          
          function piChart(id , xValues , barColors , yValues ){
            new Chart(id, {
            type: "pie",
            data: {
              labels: xValues,
              datasets: [{
                backgroundColor: barColors,
                data: yValues
              }]
            },
            options: {
              title: {
                display: true,
                text: "World Wide Wine Production"
              }
            }
          });
          }
          function chartscratter(id , pRadius , pcolor , xyValues ){
            new Chart("myChart", {
            type: "scatter",
            data: {
              datasets: [{
                pointRadius:  pRadius,
                pointBackgroundColor: pcolor,
                data: xyValues
              }]
            },
            options:{}
          }); 
          
          }
          
          
          
          function chartMultiLine(id , xValues){
            new Chart(id, {
            type: "line",
            data: {
              labels: xValues,
              datasets: [{
                data: [860,1140,1060,1060,1070,1110,1330,2210,7830,2478],
                borderColor: "red",
                fill: false
              },{
                data: [1600,1700,1700,1900,2000,2700,4000,5000,6000,7000],
                borderColor: "green",
                fill: false
              },{
                data: [300,700,2000,5000,6000,4000,2000,1000,200,100],
                borderColor: "blue",
                fill: false
              }]
            },
            options: {
              legend: {display: false}
            }
          }); 
          }
          
          function chartLine(id , xValues , yValues){
            new Chart(id, {
            type: "line",
            data: {
              labels: xValues,
              datasets: [{
                fill: false,
                pointRadius: 1,
                borderColor: "rgba(255,0,0,0.5)",
                data: yValues
              }]
            },
            options: {}
          });
          }
          
          
          
          
          function generateData(value, i1, i2, step = 1) {
            for (let x = i1; x <= i2; x += step) {
              yValues.push(eval(value));
              xValues.push(x);
            }
          }
          
          function charBar(id ,  xValues , yValues , barColors ) {
            new Chart(id, {
            type: "bar",
            data: {
              labels: xValues,
              datasets: [{
                backgroundColor: barColors,
                data: yValues
              }]
            },
            options: {
              title: {
                display: true,
                text: "World Wide Wine Production"
              }
            }
          
          }); 

          }         
            
            
      