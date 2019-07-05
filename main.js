var arregloBarcosY;
var arregloBarcosDos;
var y_inicio=149;
var x_inicio=400;

function crearBarco()
{
	var canvas=document.getElementById("myCanvas");
	var context=canvas.getContext("2d");
	context.fillStyle = "#fff";
	context.fillRect(0,0,myCanvas.width,myCanvas.height);
						//Color,Largo,Altura,Ancho,x,y,Velocidad						
//BarcoX
	arregloBarcosX=new Array(new Barco("black",50,50,50,x_inicio,100,17,"o"));

for(var b=arregloBarcosX.length-1;b>=0;b--)
	{
		arregloBarcosX[b].Dibujar(context)
	}

//BarcoY
	arregloBarcosY=new Array(new Barco("black",50,50,50,450,y_inicio,12,"s"));

for (var i = arregloBarcosY.length - 1; i >= 0; i--)
	{
		arregloBarcosY[i].Dibujar(context)
	}

clearInterval(id1);
clearInterval(id2);
t=null;
//tx=null;
}


var id1;
var id2;
var t = 0;
//var tx=0;
function iniciarAnimacion(){
	id1 = setInterval(animacionY,40);
	id2=setInterval(animacionX,40);
}
function animacionY(){
	
	var myCanvas = document.getElementById("myCanvas");
	var context = myCanvas.getContext("2d");
	context.fillStyle = "#fff";
	context.fillRect(149,0,myCanvas.width,myCanvas.height);

	arregloBarcosY.forEach(
		function(element) {
	  		element.Y = y_inicio + (element.Velocidad*(t/1000));
		}
	);

	arregloBarcosY.forEach(
		function(element) {
	  		element.Dibujar(context);
	  		console.log(element.Color);
	  		console.log("X: " + element.x + ", Y: " + element.y);

		}
	);

	t+=40;
}

function animacionX()
{
	var myCanvas = document.getElementById("myCanvas");
	var context = myCanvas.getContext("2d");
	context.fillStyle = "#fff";
	context.fillRect(0,0,myCanvas.width,myCanvas.height/3.9);

	arregloBarcosX.forEach(
		function(element) {
	  		element.X = x_inicio - (element.Velocidad*(t/1000));
		}
	);

	arregloBarcosX.forEach(
		function(element) {
	  		element.Dibujar(context);
	  		console.log(element.Color);
	  		console.log("X: " + element.x + ", Y: " + element.y);	
		}
	);

	t+=40;
}

function detenerAnimacion()
{
	if(id1 != null)
	clearInterval(id1);
	if (id2!= null)
	clearInterval(id2); 
}