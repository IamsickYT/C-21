var movingRect;
var fixedRect;
var gameObject1, gameObject2, gameObject3, gameObject4;
function setup() {
  createCanvas(800,400);
 
 movingRect  = createSprite(400, 200, 50, 50);
 fixedRect  = createSprite(400, 300, 50, 50);
 /*fixedRect.debug =true;
 movingRect.debug =true;*/
movingRect.shapeColor= "green";
fixedRect.shapeColor= "green";
gameObject1 = createSprite(400, 100, 50 , 50);
gameObject2 = createSprite(300, 100, 50 , 50);
gameObject3 = createSprite(200, 100, 50 ,50);
gameObject4 = createSprite(100, 100, 50 ,50);
gameObject1.shapeColor= "grey";
gameObject2.shapeColor= "grey";
gameObject3.shapeColor= "grey";
gameObject4.shapeColor= "grey";

 
}
 
function draw() {
  background(0,0,0);  
 
  movingRect.x = mouseX;
  movingRect.y = mouseY;
  if (isTouching(movingRect,gameObject1)) {
    movingRect.shapeColor= "blue";
    gameObject1.shapeColor= "blue";
  }
  else {
    movingRect.shapeColor= "green";
    gameObject1.shapeColor= "green";
  }
  drawSprites();
 
 
}
function isTouching (object1,object2) {
  if ( (object1.x - object2.x < object1.width/2 + object2.width/2) &&
     (object2.x - object1.x < object1.width/2 + object2.width/2) &&
     (object1.y - object2.y < object1.height/2 + object2.height/2) &&
     (object2.y - object1.y < object1.height/2 + object2.height/2)) {
      return true;
 }
 else {
      return false;


     }


}
;