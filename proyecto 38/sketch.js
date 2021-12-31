var bow , arrow,  scene;
var bowImage, arrowImage, green_balloonImage, red_balloonImage, pink_balloonImage ,blue_balloonImage, backgroundImage, redB, greenB, blueB, pinkB, arrowGroup;

var score=0;

function preload(){
  
  backgroundImage = loadImage("background0.png");
  arrowImage = loadImage("arrow0.png");
  bowImage = loadImage("bow0.png");
  red_balloonImage = loadImage("red_balloon0.png");
  green_balloonImage = loadImage("green_balloon0.png");
  pink_balloonImage = loadImage("pink_balloon0.png");
  blue_balloonImage = loadImage("blue_balloon0.png");
  
}



function setup() {
  
  canvas = createCanvas(windowWidth , windowHeight );
  background(backgroundImage);

  //crea el fondo
  
  /*scene = createSprite(displayWidth/2, displayHeight/2);
  scene.addImage(backgroundImage);
  scene.scale = 2.5*/
  
  //crea el arco para disparar las flechas
  bow = createSprite(width-150,220,20,50)
  bow.addImage(bowImage); 
  bow.scale = 1;
  
   score = 0    
  //crea los grupos
  redB= new Group();
  greenB= new Group();
  blueB= new Group();
  pinkB= new Group();
  arrowGroup= new Group(); 

}

function draw() {
  //fondo en movimiento
  background(backgroundImage);

  //  scene.velocityX = -3 

    /*if (scene.x < 0){
      scene.x = scene.width/2;
    }*/
  
  //arco en movimiento
  bow.y = World.mouseY
  
   //suelta la flecha cuando se presione la tecla de barra espaciadora
  if (keyDown("space")) {
    createArrow();
    
  }
   
  if (arrowGroup.isTouching(redB)){
    redB.destroyEach();
   arrowGroup.destroyEach(); 
    score=score+1;
  }
  
  if(arrowGroup.isTouching(greenB)){
    greenB.destroyEach();
    arrowGroup.destroyEach();
    score=score+3;
  }
  
   if(arrowGroup.isTouching(blueB)){
    blueB.destroyEach();
    arrowGroup.destroyEach();
    score=score+5;
  }
   
    if(arrowGroup.isTouching(pinkB)){
    pinkB.destroyEach();
    arrowGroup.destroyEach();
    score=score+10;
  }
  
  
  
  
  //crea enemigos de forma continua
  var select_balloon = Math.round(random(1,4));
  
  if (World.frameCount % 100 == 0) {
    if (select_balloon == 1) {
      redBalloon();
    } else if (select_balloon == 2) {
      greenBalloon();
    } else if (select_balloon == 3) {
      blueBalloon();
    } else {
      pinkBalloon();
    }
  }  
    
  drawSprites();
  text("Puntuación: "+ score, 300,50);
}


//crea las flechas para el arco
 function createArrow() {
  var arrow= createSprite(100, 100, 60, 10);
  arrow.addImage(arrowImage);
  arrow.x = width-150;
  arrow.y=bow.y;
  arrow.velocityX = -4;
  arrow.lifetime = 1000;
  arrow.scale = 0.3;
  arrowGroup.add(arrow); 
  
  arrow.setCollider("rectangle",0,0,210,50);
  arrow.debug = false
}

function redBalloon() {
  var red = createSprite(0,Math.round(random(20,1000)), 10, 10);
  red.addImage(red_balloonImage);
  red.velocityX = 3;
  red.lifetime = 750;
  red.scale = 0.1;
  redB.add(red);
  

}

function blueBalloon() {
  var blue = createSprite(0,Math.round(random(20, 1000)), 10, 10);
  blue.addImage(blue_balloonImage);
  blue.velocityX = 3;
  blue.lifetime = 750;
  blue.scale = 0.1;
  blueB.add(blue);

}

function greenBalloon() {
  var green = createSprite(0,Math.round(random(20, 1000)), 10, 10);
  green.addImage(green_balloonImage);
  green.velocityX = 3;
  green.lifetime = 750;
  green.scale = 0.1;
  greenB.add(green);

}

function pinkBalloon() {
  var pink = createSprite(0,Math.round(random(20, 1000)), 10, 10);
  pink.addImage(pink_balloonImage);
  pink.velocityX = 3;
  pink.lifetime = 750;
  pink.scale = 1
  pinkB.add(pink  );

}
