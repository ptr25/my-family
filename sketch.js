var mine,img,love,family;

function preload(){
  
  love = loadImage("love.jpg");
  img = loadImage("family.jpg");
}
function setup() {
  createCanvas(800,400);
  mine = createSprite(400,200,50,50);
  mine.addImage("love",love);
  mine.scale = 0.5 ;
  mine.addImage("img",img);
}
function draw() {
  background('#fae');  
  //mine.addImage(love); 
  if (keyDown("space")){
    mine.changeImage("img",img);
  }
  
  drawSprites();
} 
