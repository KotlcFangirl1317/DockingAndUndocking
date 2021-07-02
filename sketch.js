var docked = false
function preload(){
bg = loadImage("Docking-undocking/spacebg.jpg")
spacecraft1 = loadAnimation("Docking-undocking/spacecraft1.png")
spacecraft2 = loadAnimation("Docking-undocking/spacecraft1.png", "Docking-undocking/spacecraft2.png")
spacecraft3 = loadAnimation("Docking-undocking/spacecraft3.png")
spacecraft4 = loadAnimation("Docking-undocking/spacecraft4.png")
iss = loadImage("Docking-undocking/iss.png")
}

function setup() {
  createCanvas(800,600);
  iss1 = createSprite(400, 200, 50, 50);
  iss1.addImage(iss)
  spacecraft = createSprite(700,400,50,50)
  spacecraft.scale = 0.2
  spacecraft.addAnimation("stationary",spacecraft1)
  spacecraft.addAnimation("up",spacecraft2)
  spacecraft.addAnimation("left",spacecraft3)
  spacecraft.addAnimation("right",spacecraft4)
  iss1 = createSprite(400, 200, 50, 50);
  iss1.addImage(iss)
}

function draw() {
  background(255,255,255); 
  image(bg,0,0,800,600) 
  text(mouseX + " " + mouseY, 100,100)
  console.log(spacecraft.x, spacecraft.y)
  drawSprites();
  
  if(!docked){
    if(keyWentDown("UP_ARROW")){
      spacecraft.y = spacecraft.y - 10
      spacecraft.changeAnimation("up", spacecraft2)
    }
    if(keyWentUp("UP_ARROW")){
      spacecraft.changeAnimation("stationary", spacecraft1)
    }

    if(keyWentDown("LEFT_ARROW")){
      spacecraft.x = spacecraft.x - 10
      spacecraft.changeAnimation("left", spacecraft3)
    }
    if(keyWentUp("LEFT_ARROW")){
      spacecraft.changeAnimation("stationary", spacecraft1)
    }

    if(keyWentDown("RIGHT_ARROW")){
      spacecraft.x = spacecraft.x + 10
      spacecraft.changeAnimation("right", spacecraft4)
    }
    if(keyWentUp("RIGHT_ARROW")){
      spacecraft.changeAnimation("stationary", spacecraft1)
    }
    if(spacecraft.x > 325 && spacecraft.x < 345 && spacecraft.y > 260 && spacecraft.y < 280){
      docked = true
      
    }
  }
  if(docked){
    console.log(docked)
    text("Docking Successful!", 400,400)
    spacecraft.changeAnimation("stationary", spacecraft1)
  }
}
