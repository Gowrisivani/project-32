const Engine = Matter.Engine;

const World = Matter.World;

const Bodies = Matter.Bodies;

const Constraint = Matter.Constraint;

var block1,block2,block3,block4,block5,block6,block7,block8,block9,block10,block11,block12,block13,block14,block15,block16;

var polygon;

var ground;

var stand;

var score=0;

function preload() 
{
  polygonimg=loadImage("polygon.png");
}
function setup() 
{

  createCanvas(1200,400);

  engine=Engine.create();

  world=engine.world;

  ground = new Ground(600,height,1200,20);

  stand = new Ground(520,340,500,20);

  //level one

  block1 = new Box(300,265,30,40);

  block2 = new Box(330,265,30,40);
  
  block3 = new Box(360,265,30,40);

  block4 = new Box(390,265,30,40);

  block5 = new Box(420,265,30,40);

  block6 = new Box(450,265,30,40);

  block7 = new Box(480,265,30,40);

  //level two

  block8 = new Box(330,235,30,40);

  block9 = new Box(360,235,30,40);

  block10 = new Box(390,235,30,40);

  block11 = new Box(420,235,30,40);

  block12 = new Box(450,235,30,40);

  //level three

  block13 = new Box(360,195,30,40);

  block14 = new Box(390,195,30,40);

  block15 = new Box(420,195,30,40);

  //level top

  block16 = new Box(390,155,30,40);

  //polygon holder with slings

  polygon = Bodies.circle(50,200,220);

  World.add(world,polygon);

  slingShot = new SlingShot(this.polygon,{x:50,y:200});

}

  function draw() {

  background("pink");  

  textSize(35);

  fill("white");

  text ("SCORE :"+score,750,40 );

  Engine.update(engine);

  ground.display();

  stand.display();

  block1.display();
  
  block2.display();

  block3.display();

  block4.display();

  block5.display();

  block6.display();
  
  block7.display();

  block8.display();

  block9.display();

  block10.display();

  block11.display();

  block12.display();
  
  block13.display();

  block14.display();

  block15.display();

  block16.display();

  block1.score();
  
  block2.score();

  block3.score();

  block4.score();

  block5.score();

  block6.score();
  
  block7.score();

  block8.score();

  block9.score();

  block10.score();

  block11.score();

  block12.score();
  
  block13.score();

  block14.score();

  block15.score();

  block16.score();

  imageMode(CENTER);

  image(polygonimg,polygon.position.x,polygon.position.y,40,40);

  slingShot.display();

  drawSprites();

  textSize(30); 

  fill("white"); 

  text(mouseX + "," + mouseY,30,30);

}

function mouseDragged(){
  Matter.Body.setPosition(this.polygon,{x: mouseX , y: mouseY});
}

function mouseReleased(){
  slingShot.fly();
}

function keyPressed()
{
    if(keyCode===32){
        slingshot.attach(polygon.body);
    }
}