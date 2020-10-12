
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var bob1,bob2,bob3,bob4,bob5,roof,rope,rope2,rope3,rope4,rope5;

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
	//roof = new Roof(width/2,height/4,width/7,20);
	bobDiameter = 40;
	bobpositionx= width/2;
	bobpositiony = height/4+500;
	//Create the Bodies Here.
	bob1 = new Bob(bobpositionx-bobDiameter*2,bobpositiony,bobDiameter);
	bob2 = new Bob(bobpositionx-bobDiameter/2,bobpositiony,bobDiameter);
	bob3 = new Bob(bobpositionx,bobpositiony,bobDiameter);
	bob4 = new Bob(bobpositionx+bobDiameter,bobpositiony,bobDiameter);
	bob5 = new Bob(bobpositionx+bobDiameter*2,bobpositiony,bobDiameter);
	roof = new Roof(375,240,200,30);
	rope1 = new Rope(bob1.body,roof.body,-80,0);
	rope2 = new Rope(bob2.body,roof.body,-40,0);
	rope3 = new Rope(bob3.body,roof.body,0,0);
	rope4 = new Rope(bob4.body,roof.body,40,0);
	rope5 = new Rope(bob5.body,roof.body,80,0);
		
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255,0,255);
  
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  roof.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
//keyPressed();
   drawSprites();
 
}

function keyPressed() {
	if (keyCode === UP_ARROW) {
Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-50,y:-45});
  }
}

