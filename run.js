
$(document).ready(function () {

  //disable links
$('body').on('click.myDisable', 'a', function(e) { e.preventDefault(); }); 

//hide elements
$(document).ready(function(){
    $("p").click(function(){
        $(this).hide();
    });
});

$(document).ready(function(){
    $("a").click(function(){
        $(this).hide();
    });
});

});

setTimeout(
  function() 
  {
  	$(document).ready(function(){
    $("*").click(function(){
        $(this).hide();
    });
});
    //do something special
  }, 10000);

 

// ///**
//  
//  * F. Permadi, 2009
//  *///**
setTimeout(function createCanvasOverlay()
 {

// Create a blank div where we are going to put the canvas into.
    var canvasContainer = document.createElement('div');
   // Add the div into the document
    document.body.appendChild(canvasContainer);
    canvasContainer.style.position="absolute";
    // Set to 100% so that it will have the dimensions of the document
    canvasContainer.style.left="0px";
    canvasContainer.style.top="0px";
    canvasContainer.style.width="100%";
    canvasContainer.style.height="100%";
    // Set to high index so that this is always above everything else
    // (might need to be increased if you have other element at higher index)
    canvasContainer.style.zIndex="1000";

    // Now we create the canvas
    myCanvas = document.createElement('canvas');
    myCanvas.style.width = canvasContainer.scrollWidth+"px";
    myCanvas.style.height = canvasContainer.scrollHeight+"px";
    // You must set this otherwise the canvas will be streethed to fit the container
    myCanvas.width=canvasContainer.scrollWidth;
    myCanvas.height=canvasContainer.scrollHeight;
    myCanvas.style.overflow = 'visible';
    myCanvas.style.position = 'absolute';
    // Add int into the container
    canvasContainer.appendChild(myCanvas);


    
},11000);

var imgArray = [];
var img;

setTimeout(
function preload(){
       imgArray[0] = loadImage('assets/pic1.jpg');
       imgArray[1] = loadImage('assets/pic2.jpg');
       imgArray[2] = loadImage('assets/pic3.jpg');
       imgArray[3] = loadImage('assets/pic4.jpg');
      // for (var i=1; i<4; i++){
      //       imgArray[i] = loadImage("assets/pic"+ i+ ".jpg");
            
      //       }
        
},11000);

setTimeout(
function draw() {
	

	for (var i =1; i<imgArray.length; i++){
               image(imgArray[i], random(Canvas.height/2), 
  	            random(Canvas.width/2));

               }
},11000);


      function writeMessage(canvas, message) {
        var context = canvas.getContext('2d');
        context.clearRect(0, 0, canvas.width, canvas.height);
        context.font = '18pt Calibri';
        context.fillStyle = 'black';
        context.fillText(message, 10, 25);
      }
      function getMousePos(canvas, evt) {
        var rect = canvas.getBoundingClientRect();
        return {
          x: evt.clientX - rect.left,
          y: evt.clientY - rect.top
        };
      }
      var canvas = document.getElementById('myCanvas');
      var context = canvas.getContext('2d');

      canvas.addEventListener('mousemove', function(evt) {
        var mousePos = getMousePos(canvas, evt);
        var message = 'Mouse position: ' + mousePos.x + ',' + mousePos.y;
        writeMessage(canvas, message);
      }, false);


 setTimeout(function drawMeme(){
 	  
 	   // var canvas = document.getElementById("myCanvas");
 	   // var context = canvas.getContect("2d");
 	   // drawing = new Image();
 	   // drawing.src = "pic1.jpg";
 	   // drawing.onload = function(){
 	   // 	context.drawImage(drawing,mouseX,mouseY);
 	  
 	  

 },11000);
