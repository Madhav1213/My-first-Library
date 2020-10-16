var ball;
var bat;
var ball2;
var bat2;

function setup() {
  createCanvas(800,400);
 ball =  createSprite(400, 200, 20, 20);
 ball.shapeColor = "red";
 //ball.debug = true;
 bat = createSprite(600,300,40,40);
 bat.shapeColor = "green";
 //bat.debug = true;
 ball2 = createSprite(340,100,15,15);
 ball2.shapeColor = "red";

 bat2 = createSprite(300,150,35,35);
 bat2.shapeColor = "green";
}

function draw() {
  background(0); 
  bat.x = World.mouseX;
  bat.y = World.mouseY;
  
  /*if(isTouching ()){
    ball.shapeColor = "yellow";
    bat.shapeColor = "blue";
  }else{ ball.shapeColor = "red;"
  bat.shapeColor = "red";
  }*/

  isTouching(bat,ball2);
console.log("C - 21");

  drawSprites();
}

