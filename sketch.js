const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var player
let engine, world;
var pared1, pared2, pared3, pared4, pared5, pared6, pared7, pared8, pared9, pared10, pared11, pared12;

function preload(){
  
}

function setup() {
  createCanvas(1400, 800);
  
  engine = Engine.create();
  world = engine.world;  
  player = createSprite(60,200,10,10);


  pared1 = createSprite(50, 760, 785, 10);
  pared2 = createSprite(20, 600, 500, 10);
  pared3 = createSprite(1320, 600, 470, 10);
  pared4 = createSprite(1175, 760, 520, 10);

  pared5 = createSprite(200, 300, 10, 550);
  pared6 = createSprite(200, 300, 10, 550);
  pared7 = createSprite(200, 300, 10, 550);
  pared8 = createSprite(200, 300, 10, 550);
  pared9 = createSprite(200, 300, 10, 550);
  pared10 = createSprite(200, 300, 10, 550);
  pared11 = createSprite(200, 300, 10, 550);
  pared12 = createSprite(200, 300, 10, 550);
  edges = createEdgeSprites();

  
}

function draw() {
  background(220);
  
  if(keyDown(UP_ARROW)) {
    player.y = player.y-10;
  }
  
  if(keyDown(LEFT_ARROW)) {
    player.x = player.x-10;
  }
  if(keyDown(DOWN_ARROW)) {
    player.y = player.y+10;
  }
  if(keyDown(RIGHT_ARROW)) {
    player.x = player.x+10;
  }

  player.collide(pared1);
  player.collide(edges);
  player.collide(edges[0]);
  player.collide(edges[2]);
 //paredes.show();
  Engine.update(engine);

  drawSprites();
}
