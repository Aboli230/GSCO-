  var car,wall;
  var speed,weight;
  function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
  speed=random(55,90);
  weight=random(400,1400)
}

function draw() {
  background(255,255,255);  
  drawSprites();
  car =createSprite(50,200,50,50);
  car.shapeColor(yellow);
  car.velocityX=speed;
  wall=createSprite(1500,200,60,height/2)
  wall.shapeColor(pink);
  if(car.x-wall.x<(car.widht+wall.widht)/2)
    car.velocityX=0;
    var deformation=0.5*weight*speed*speed/22509;
    if(deformation>180)
    {
    car.shapeColor=color(255,0,0);
    }
    if (deformation<180 && deformation<100)
 {
   car.shapecolor=color(230,230,0);
 }
 if(deformation<100)
 {
   car.shapeColor=color(0,255,0)
 }

}