class Barco
{
	constructor(c,l,al,an,x,y,v,o)
	{
		this.Color=c;
		this.Largo=l;
		this.Altura=al;
		this.Ancho=an;
		this.X=x;
		this.Y=y;
		this.Velocidad=v;
		this.Orientacion=o;
	}

	Dibujar(contextoDeDibujar)
	{
		var radio=this.Ancho/2;
		//Pluma
		contextoDeDibujar.skokeStyle=this.Color;

		//Base
		contextoDeDibujar.beginPath();
		contextoDeDibujar.arc(this.X+radio,this.Y+radio,radio,3.13,2*(Math.PI),"true");
		contextoDeDibujar.fillStyle="brown";
		contextoDeDibujar.fill();
		contextoDeDibujar.stroke();

		//Linea Central
		contextoDeDibujar.beginPath();
		contextoDeDibujar.moveTo(this.X-0.01*radio,this.Y+radio);
		contextoDeDibujar.lineTo(this.X+2*(radio),this.Y+radio);
		contextoDeDibujar.stroke();

		//L1
		contextoDeDibujar.beginPath();
		contextoDeDibujar.moveTo(this.X+0.029*radio,this.Y+1.3*radio);
		contextoDeDibujar.lineTo(this.X+1.3*(radio),this.Y+1.3*radio);
		contextoDeDibujar.stroke();

		contextoDeDibujar.beginPath();//L1.2
		contextoDeDibujar.moveTo(this.X+1.7*radio,this.Y+1.3*radio);
		contextoDeDibujar.lineTo(this.X+1.98*(radio),this.Y+1.3*radio);
		contextoDeDibujar.stroke();

		//L2
		contextoDeDibujar.beginPath();
		contextoDeDibujar.moveTo(this.X+0.12*radio,this.Y+1.5*radio);
		contextoDeDibujar.lineTo(this.X+1.87*(radio),this.Y+1.5*radio);
		contextoDeDibujar.stroke();
		
		//L3
		contextoDeDibujar.beginPath();
		contextoDeDibujar.moveTo(this.X+0.41*radio,this.Y+1.8*radio);
		contextoDeDibujar.lineTo(this.X+1.6*(radio),this.Y+1.8*radio);
		//contextoDeDibujar.moveTo(10,70);
		//contextoDeDibujar.quadraticCurveTo(10,10,60,10);
		contextoDeDibujar.stroke();




		//BarraV1
		contextoDeDibujar.beginPath();
		contextoDeDibujar.moveTo(this.X+radio,this.Y+radio);
		contextoDeDibujar.lineTo(this.X+radio, this.Y-0.5*(radio));
		contextoDeDibujar.stroke();

		//BarraV2
		contextoDeDibujar.beginPath();
		contextoDeDibujar.moveTo(this.X+0.9*radio,this.Y+radio);
		contextoDeDibujar.lineTo(this.X+0.9*radio,this.Y-0.5*(radio));
		contextoDeDibujar.stroke();

		//UnionBarra
		contextoDeDibujar.beginPath();
		contextoDeDibujar.moveTo(this.X+radio,this.Y-0.5*radio);
		contextoDeDibujar.lineTo(this.X+0.9*radio,this.Y-0.5*(radio));
		contextoDeDibujar.stroke();
		//Vela1
		contextoDeDibujar.beginPath();
		contextoDeDibujar.moveTo(this.X+radio, this.Y-0.5*(radio));
		contextoDeDibujar.quadraticCurveTo(this.X+3*radio,this.Y+radio,this.X+0.99*radio,this.Y+0.7*radio);
		contextoDeDibujar.stroke();



		//Salvavidas
 		contextoDeDibujar.beginPath();//CirculoPrincipal
		contextoDeDibujar.arc(this.X+1.5*radio,this.Y+1.3*radio,radio*0.2,0,2*(Math.PI),"true");
		contextoDeDibujar.fillStyle="#fff";
		contextoDeDibujar.fill();
		contextoDeDibujar.stroke();

		contextoDeDibujar.beginPath(); //CirculoCentro
		contextoDeDibujar.arc(this.X+1.5*radio,this.Y+1.3*radio,radio*0.1,0,2*(Math.PI),"true");
		contextoDeDibujar.fillStyle="brown";
		contextoDeDibujar.fill();
		contextoDeDibujar.stroke();

		contextoDeDibujar.beginPath();//LineaA
		contextoDeDibujar.moveTo(this.X+1.52*radio,this.Y+1.2*radio);
		contextoDeDibujar.lineTo(this.X+1.52*radio,this.Y+1.1*radio);
		contextoDeDibujar.stroke();

		contextoDeDibujar.beginPath();//LineaA1
		contextoDeDibujar.moveTo(this.X+1.49*radio,this.Y+1.2*radio);
		contextoDeDibujar.lineTo(this.X+1.49*radio,this.Y+1.1*radio);
		contextoDeDibujar.stroke();

		contextoDeDibujar.beginPath(); //LineaC
		contextoDeDibujar.moveTo(this.X+1.52*radio,this.Y+1.4*radio);
		contextoDeDibujar.lineTo(this.X+1.52*radio,this.Y+1.5*radio);
		contextoDeDibujar.stroke();

		contextoDeDibujar.beginPath(); //LineaC1
		contextoDeDibujar.moveTo(this.X+1.49*radio,this.Y+1.4*radio);
		contextoDeDibujar.lineTo(this.X+1.49*radio,this.Y+1.5*radio);
		contextoDeDibujar.stroke();

		contextoDeDibujar.beginPath(); //LineaB
		contextoDeDibujar.moveTo(this.X+1.6*radio,this.Y+1.32*radio);
		contextoDeDibujar.lineTo(this.X+1.7*radio,this.Y+1.32*radio);
		contextoDeDibujar.stroke();

		contextoDeDibujar.beginPath(); //LineaB1
		contextoDeDibujar.moveTo(this.X+1.6*radio,this.Y+1.29*radio);
		contextoDeDibujar.lineTo(this.X+1.7*radio,this.Y+1.29*radio);
		contextoDeDibujar.stroke();

		contextoDeDibujar.beginPath();//LineaD
		contextoDeDibujar.moveTo(this.X+1.4*radio,this.Y+1.32*radio);
		contextoDeDibujar.lineTo(this.X+1.3*radio,this.Y+1.32*radio);
		contextoDeDibujar.stroke();

		contextoDeDibujar.beginPath();//LineaD1
		contextoDeDibujar.moveTo(this.X+1.4*radio,this.Y+1.29*radio);
		contextoDeDibujar.lineTo(this.X+1.3*radio,this.Y+1.29*radio);
		contextoDeDibujar.stroke();

	}
}