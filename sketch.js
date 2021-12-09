
var ball
var Bricks




function preload() {

  ballImg = loadImage("Red_ball.png")
  bgImg = loadImage("breakout_bg.png")

}




function setup() {
  createCanvas(800,400);
  ball = createSprite(400, 250, 50, 50);
  ball.addImage(ballImg)
  ball.scale = 0.07

  paddle = createSprite(400,350,90,15)
  Bricks = createGroup();

  createBrick(50,"red");
  createBrick(90,"orange");
  createBrick(130,"yellow");
  createBrick(170,"green");

  edges = createEdgeSprites();

 



  


}

function draw() {
  background(bgImg);  
  drawSprites();

  if(keyDown("SPACE")) {
    ball.velocityX = 3
    ball.velocityY = 3
  }

  ball.bounceOff(paddle)
  ball.bounceOff(edges[0])
  ball.bounceOff(edges[1])
  ball.bounceOff(edges[2])
  


  

  paddle.x = World.mouseX


  

  
}

function createBrick(y,color) {
  for(var i=130; i<650; i=i+60) {
    brick = createSprite(i,y,50,30)
    brick.shapeColor = color

    Bricks.add(brick);
  }
}

