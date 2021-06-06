










var background,backgroundImg;
var cat,catImg1,catImg2,catImg3,catImg4;
var mouse,mouseImg1,mouseImg2,mouseImg3,mouseImg4;

function preload() {
    //load the images here
    backgroundImg = loadImage("garden.png");

    catImg1 = loadImage("cat1.png");
    catImg2 = loadImage("cat2.png");
    catImg3 = loadImage("cat3.png");
    catImg4 = loadImage("cat4.png");

    mouseImg1 = loadImage("mouse1.png");
    mouseImg2 = loadImage("mouse2.png");
    mouseImg3 = loadImage("mouse3.png");
    mouseImg4 = loadImage("mouse4.png");
}

function setup(){
    createCanvas(1000,800);
    background = createSprite(500,400);
    background.addImage("backgroundImg");
    //create tom and jerry sprites here
    cat = createSprite("200,300");
    cat.addAnimation("TomSitting",catImg1);

    mouse = createSprite("400,300");
    mouse.addAnimation("JerryDrooling",mouseImg1);
}

function draw() {
    background("blue");

    //Write condition here to evalute if tom and jerry collide

    if(cat.collide(mouse)){
        cat.addAnimation("TomHappy",catImg4);
        cat.changeAnimation("TomHappy")
        mouse.addAnimation("JerryHappy",mouseImg2);
        mouse.changeAnimation("JerryHappy");
    }

    drawSprites();
    keyPressed();
}


function keyPressed(){

  //For moving and changing animation write code here

    if(keyCode === RIGHT_ARROW){
      mouse.addAnimation("JerryTeasing",mouseImg3);
      mouse.changeAnimation("JerryTeasing");
      mouse.frameDelay = 25;
      cat.addAnimation("TomMoving",catImg2);
      cat.changeAnimation("TomMoving");
      cat.frameDelay = 15;
    }

    if(keyCode === LEFT_ARROW){
      mouse.addAnimation("JerryLooking",mouseImg4);
      mouse.changeAnimation("JerryLooking");
      mouse.frameDelay = 25;
      cat.addAnimation("TomDrooling",catImg3);
      cat.changeAnimation("TomDrooling");
      cat.frameDelay = 15;
    }
}
