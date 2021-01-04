
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint  = Matter.Constraint;

var myEngine, myWorld;
 var tree, ground, stone;
var boyImage; 
var mango1, mango2, mango3; //, mango4, mango5;
var throwObj;

function preload()
{
 boyImage=loadImage("images/boy.png")	
}

function setup() {
	createCanvas(800, 700);

	myEngine = Engine.create();
	myWorld = myEngine.world;

	//Create the Bodies Here.
   tree=new Tree(600,400);
   ground=new Ground(width/2,680, width, 150);
   stone=new Stone(100,100);
   mango1=new Mango(610,210,30)
   mango2=new Mango(580,280,40)
   mango3=new Mango(660,260,30)

   throwObj = new Launcher(stone.body,{x:135,y:460})
   
   //throwObj=new Swing()
  
}


function draw() {
  Engine.update(myEngine)
  rectMode(CENTER);
  background(0);
  ground.display();
  tree.display();
  stone.display();
  image(boyImage ,200,530,200,300);
  mango1.display() 
  mango2.display();
  mango3.display();
  throwObj.display();
  hitMango(stone, mango1);
  hitMango(stone,mango2);
  hitMango(stone,mango3)
 
}


function keyPressed()
{
  if(keyCode===32){
    Matter.Body.setPosition(stone.body, {x:150, y:220}) 
    throwObj.attach(stone.body)
  }
}

function mouseDragged()
{
	Matter.Body.setPosition(stone.body, {x:mouseX, y:mouseY}) 
}

function mouseReleased()
{
	throwObj.fly();
     
}



function hitMango(stone,mango){
	 
   
  var distance=dist(stone.body.position.x, stone.body.position.y,mango.body.position.x, mango.body.position.y)
   
  	if(distance<=mango.r+stone.r)
    {
       
  	  Matter.Body.setStatic(mango.body,false);
    }

  }