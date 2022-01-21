
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var engine, world;
var dustbinimage, binimg ;


function preload()
{
	binimg = loadImage("dustbingreen.png")
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	paper = new Paper();

	//(100,600,10);

	ground = new Ground (400,680,800,20);
	
	
	rightwall = new Dustbin (662,602,10,135);
	leftwall = new Dustbin (557,605,10,135);
	bottomwall = new Dustbin (610,665,100,10);

	//Dustbin image 
	 dustbinimage = createSprite (610,600,20,20);
	 dustbinimage.addImage(binimg);
	 dustbinimage.scale = 0.45

	 sling = new Launcher (paper.body,{x:610, y:200});


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255,255,255) ;

  Engine.update(engine);

  paper.display();
  ground.display();
  leftwall.display();
  bottomwall.display();
  rightwall.display();
  
  drawSprites();
 
}

function mouseDragged(){
	Matter.Body.setPosition(paper.body,{x:mouseX,y:mouseY});
  }
  function mouseReleased(){
	sling.fly();
  }
/*
function keyPressed () {
	if(keyCode === UP_ARROW ) {
		Matter.Body.applyForce(paper.body,paper.body.position, { x:55, y: -55 });
	}
}
*/

