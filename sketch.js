
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	rect1 = createSprite(width/2,height-35,200,20);
	rect2 = createSprite(width/2.6,height-88,20,100);
	rect3 = createSprite(width/1.6,height-88,20,100);
	


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
ball = createSprite(width/5,height-55,20,20);



groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255);




	Engine.run(engine);
	world=engine.world;

	ballBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.3, isStatic:false,density:1.2});

	World.add(world,ballBody);

	rect1 = createSprite(width/2,height-35,200,20);
	rect2 = createSprite(width/2.6,height-88,20,100);
	rect3 = createSprite(width/1.6,height-88,20,100);
	

	
  
}


function draw() {
  rectMode(CENTER);
  background(0);

	  ball.display();
	  
	rect1.display();
	rect2.display();
	rect3.display();

	
	rect1.shapeColor = "yellow"
  	rect2.shapeColor = "yellow"
	 rect3.shapeColor = "yellow"
	 
	 ellipseMode(RADIUS);
	 ellipse(ball.position.x,ball.position.y,20,20);

	 ball.shapeColor = "purple";

  drawSprites();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(ball.body,ball.body.position,{x:85,y:-85});
	}
}



