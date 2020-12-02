
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 800);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground1=new ground(600,height,1200,20)
	container1=new contaner(600,400,40,40)
	paper1=new paper(300,600,10,10)


	Engine.run(engine);
	
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  if(UP_ARROW){
	  paper.velocityY=-1
  }
  if(RIGHT_ARROW){
	  paper.velocityX=1
  }
  
  drawSprites();
 
}



