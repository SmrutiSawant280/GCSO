var object1, object2, object3 ,object4 ,object5;


function setup() {
createCanvas(800,400);


  object1 = createSprite(400, 200, 50, 50);
  object1.shapeColor = "yellow";
  object2 = createSprite(600, 200, 50, 50);
  object2.shapeColor = "yellow"; 
  object2.velocityX = 1;
  object2.velocityY = 1;
  object3 = createSprite(200,200,50,50);
  object3.shapeColor = "green";
  object4 = createSprite(800,200,50,50);
  object4.shapeColor = "blue";
  object4.velocityX = -1;
  object4.velocityY = -1;
  object5 = createSprite(700,200,50,50);
  object5.shapeColor = "pink";
}

function draw() {
  background(0,0,0);  
  drawSprites();
  object1.x = World.mouseX;
  object1.y = World.mouseY;

  if(istouching(object1,object5)){
    object1.shapeColor = "red";
    object5.shapeColor = "green";
    
  }
  else{
    object1.shapeColor = "yellow";
    object5.shapeColor = "yellow"; 
  }
  bounceOff(object1,object4);
}

