var fixedrect;
var movingrect;


function setup() {
  createCanvas(800,400);
  fixedrect=createSprite(200, 200, 50, 50);
  fixedrect.shapeColor="green";
  movingrect=createSprite(400,200,50,50);
  movingrect.shapeColor="green";
}

function draw() {
  background("yellow");  
  movingrect.x=World.mouseX;
  movingrect.y=World.mouseY;

  if(movingrect.x-fixedrect.x<fixedrect.width/2+movingrect.width/2
    && fixedrect.x-movingrect.x<fixedrect.width/2+movingrect.width/2
    && movingrect.y-fixedrect.y<fixedrect.height/2+movingrect.height/2
    && fixedrect.y-movingrect.y<fixedrect.height/2+movingrect.height/2){
    movingrect.shapeColor="red";
    fixedrect.shapeColor="red";
  }
  else{
    movingrect.shapeColor="green";
    fixedrect.shapeColor="green";
  }
  drawSprites();
}