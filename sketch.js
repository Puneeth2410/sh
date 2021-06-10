
function preload(){
seaImg=loadImg("sea_png");
shipImg=loadAnimation(ship1.png);
spriteName.addImg(seaImg);
}

function setup(){
  createCanvas(400,400);
  
}

function draw() {
  background("blue");
if(sea.x < 0){
sea.x=sea.width/2
sea.velocityX=2;
}
}

