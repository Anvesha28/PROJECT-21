const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

let engine;
let world;

var ground;
var left;
var right;
var top_wall;
var ball;
var button1, button2; 

function setup() {
  createCanvas(windowWidth, windowHeight);
  engine = Engine.create();
  world = engine.world;
  
  ground =new Ground(width/2, 670, width, 20);
  right = new Ground(1500,600,20,120);
  left = new Ground(1100, 600, 20, 120);

  var ball_options = {
    isStatic:false,
    restitution: 0.3,
    friction:0,
    density:1.2
  }
  ball = Bodies.circle(250, 100, 20, ball_options);
  World.add(world, ball);
 
  Engine.run(engine);
}

function draw() 
{
  background(51);
  ellipse(ball.position.x, ball.position.y, 20, 20)
  ground.display();
  left.display();
  right.display();
  Engine.update(engine);
}

function keyPressed(){
  if(keyCode === UP_ARROW){
    Matter.Body.applyForce(ball, ball.position, {x:85, y:-75})
  }
}