
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var dustbin,paperObject,groundObject;
var world;

function preload()
{
	
}

function setup() {
	createCanvas(1250, 650);
    


	engine = Engine.create();
	world = engine.world;

	paperObject=new Paper(400,450,70);
	groundObject=new Ground(width/2,620,width,20);
	dustbin1=new Dustbin(1200,510,20,200);
	dustbin2=new Dustbin(1000,510,20,200);
	dustbin3=new Dustbin(1100,600,200,20);



	Engine.run(engine);
  
}


function draw() {
  background(230);

  
  paperObject.display();
  groundObject.display();
  
  drawSprites();
 
}

function keyPressed(){
	if (keyCode === UP_ARROW){
		Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:230,y:-230});
	}
}


