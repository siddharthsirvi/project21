var thickness,wall 
var bullet,speed,weight
function setup() {
  createCanvas(1600,400);
 bullet=createSprite(50,200,20,5);
 wall=createSprite(1200,200,thickness,height/2);
 speed=random(223,321);
 weight=random(30,52);
 bullet.velocityX=speed;
 wall.shapecolour=(80,80,80);
 tickness=random(22,83);

}

function draw() {
  background(0);  
 if(wall.x-bullet.x<(bullet.width+wall.width)/2){
bullet .velocityX=0
var deformation=0.5*weight*speed*speed/22509
if(deformation>180){
  bullet.shapecolour=color(255,0,0); 
}
if(deformation<180&&deformation>100){
bullet.shapecolour=color(230,230,0)

}
if(deformation<100){
bullet.shapecolour=color(0,255,0)

}
hasCollided();
 } 
  drawSprites();
}
function hasCollided(Lbullet,Lwall){
bulletRigthEdge=lbullet.x+lbullet.width;
wallLeftEdge>=wall.x;
if(bulletRigthEdge>=wallLeftEdge){
return true
}
return false;
if(hasCollided(bullet,wall)){
bullet.velocityX=0;
vardamage=0.5*weight*speed*speed(thickness*thickness*thickness);
if(damage>10){
wall.shapecolour(255,0,0);
}
if(damage<10){
wall.shapecolour(0,255,0)
}

}

}