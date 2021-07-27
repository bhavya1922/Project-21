var bg;
var astronout,sleep;


function preload() {
    bg=loadImage("images/iss.png")
    sleep=loadAnimation("images/sleep.png")
    brush=loadAnimation("images/brush.png")
    gym=loadAnimation("images/gym11.png","images/gym12.png")
    eat=loadAnimation("images/eat1.png","images/eat2.png")
    drink=loadAnimation("images/drink1.png","images/drink2.png")
    move=loadAnimation("images/move.png","images/move1.png")
    bath=loadAnimation("images/bath1.png","images/bath2.png")



}

function setup(){
    var canvas = createCanvas(600,500);

    astronout=createSprite(300,230)
    astronout.addAnimation("sleeping",sleep)
    astronout.scale=0.1


   
}

function draw(){
    background(bg);

    textSize(20)
    fill("white")
    text("Instructions",20,35)
    textSize(15)
    text("UP ARROW=brushing",20,55)
    text("DOWN ARROW=gymming",20,70)
    text("LEFT ARROW=eating",20,85)
    text("RIGHT ARROW=bathing",20,100)
    text("m KEY=moving",20,115)
    text("d KEY=drinking",20,130)
    
    edges=createEdgeSprites()
    astronout.bounceOff(edges)

    if(keyDown(UP_ARROW)) {
        astronout.addAnimation("brushing",brush)
        astronout.changeAnimation("brushing")
        astronout.y=350;
        astronout.velocityX=0;
        astronout.velocityY=0;

    }
    if(keyDown(DOWN_ARROW)) {
        astronout.addAnimation("gymming",gym)
        astronout.changeAnimation("gymming")
        astronout.y=350;
        astronout.velocityX=0;
        astronout.velocityY=0;

    }
    if(keyDown(LEFT_ARROW)) {
        astronout.addAnimation("eating",eat)
        astronout.changeAnimation("eating")
        astronout.y=350;
        astronout.velocityX=0;
        astronout.velocityY=0;

    }
    if(keyDown(RIGHT_ARROW)) {
        astronout.addAnimation("bathing",bath)
        astronout.changeAnimation("bathing")
        astronout.y=350;
        astronout.velocityX=0;
        astronout.velocityY=0;

    }
    if(keyDown("d")) {
        astronout.addAnimation("drinking",drink)
        astronout.changeAnimation("drinking")
        astronout.y=350;
        astronout.velocityX=0;
        astronout.velocityY=0;

    }
    if(keyDown("m")) {
        astronout.addAnimation("moving",move)
        astronout.changeAnimation("moving")
        astronout.y=350;
        astronout.velocityX=0;
        astronout.velocityY=0;

    }



    drawSprites()
  
   
}