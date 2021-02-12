const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground,paper;
var binImg,bin;


function preload(){
    binImg = loadImage("dustbin.png");
  
}
function setup(){
    var canvas = createCanvas(1350,600);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground();
    paper = new Paper(1100,50);

    bin = createSprite(964,500,20,20);
    bin.addImage(binImg);
    bin.scale = 0.45;

    binPart1 = new Dustbin(909,510,10,120);
    binPart2 = new Dustbin(965,580,130,10);
    binPart3 = new Dustbin(1020,510,10,120);
  
}

function draw(){
    background("white");
    Engine.update(engine);

   

    
    ground.display();
    paper.display();
    binPart1.display();
    binPart2.display();
    binPart3.display(); 
      
    drawSprites();
}

function keyPressed(){
    if(keyCode === UP_ARROW){
        Matter.Body.applyForce(paper.body,paper.body.position,{x:80,y:-80});
    }
}