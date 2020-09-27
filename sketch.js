
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	var paper_ball,ground,bar,bar2,bar3,bar4,bar5;
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	paper_ball = new Paper()
	ground = new Ground(400,690,800,5,0)
	bar= new Dustbin_bars(750, 680 ,50 , 10,0)
	bar2= new Dustbin_bars(740, 670, 10, 50, 110)
	bar3= new Dustbin_bars(760, 670, 10, 50, 70)
	bar4= new Dustbin_bars(720, 620, 10, 50,0)
	bar5= new Dustbin_bars(780, 620, 10, 50,0)
	
	
	
	
	
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  paper_ball.display();
  ground.display();
  bar.display();
  bar2.display();
  bar4.display();
  bar5.display();
  bar3.display();
  drawSprites();
 
}

function  keyPressed() {
	if(keyCode === UP_ARROW) {

		Matter.Body.applyForce(paper_ball.body,paperObject.body.position,{x:85,y:85})

	}
}

