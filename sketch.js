var helicopterIMG, helicopterSprite, helicopterBody , packageSprite,packageIMG;
var packageBody,ground;
var packages1,packages2,packages3,packageb1,packageb2,packageb3;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG);
	packageSprite.scale=0.2;

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG);
	helicopterSprite.scale=0.6;

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255);


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , { restitution:0.8, isStatic:true});
	World.add(world, packageBody);

    packages1 = createSprite(width/2 , height-50 , 100 , 20);
    packages1.shapeColor="red";

	packages2 = createSprite( 460 , height-90 , 20 , 100);
	packages2.shapeColor="red";

	packages3 = createSprite( 340 , height-90 , 20 , 100);
	packages3.shapeColor="red";

	packageb1 = Bodies.rectangle(width/2 , height-50 , 100 , 20 , { restitution:0 , isStatic:true} );
	World.add(world , packageb1);

	packageb2 = Bodies.rectangle( 460 , height-90 , 20 , 100 , { restitution:0 , isStatic:true} );
	World.add(world , packageb2);

	packageb3 = Bodies.rectangle( 340 , height-90 , 100 , 100 , { restitution:0 , isStatic:true} );
	World.add(world , packageb3);

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {restitution:0 , isStatic:true} );
 	World.add(world, ground);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x ;
  packageSprite.y= packageBody.position.y ;
  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    Matter.Body.setStatic(packageBody,false);
  }
}



