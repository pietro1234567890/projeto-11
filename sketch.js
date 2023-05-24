var navio_img, mar_img;
var navio, mar;
function preload(){
navio_img = loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png" )
mar_img = loadImage("sea.png")
}


function setup(){
  createCanvas(400,400);
  mar = createSprite(400,200,10,10);
  mar.addImage("mar",mar_img);
  mar.scale = 0.25
  mar.velocityX = -3
  navio = createSprite(200,200)
  navio.addAnimation("navio", navio_img);
  navio.scale = 0.25
}

function draw() {
  background("blue");
    
  if (mar.x <0){
    mar.x = 400;
  }
  drawSprites();

 
}
