function preload() {
  //load game assets
  back = loadImage("images/background.jpg")
  br = loadImage("images/brick.png")
  bun = loadImage("images/bunny.png")
  car = loadImage("images/carrot.png")
}

function genB(){
  var brick = createSprite(450,10,25,100)
  brick.x = random(220,700)
  brick.addImage(br)
  brick.scale = 0.15
  brick.velocityY = 7
  brick.lifetime = 320
  BrG.add(brick)
}

function setup() {
  createCanvas(1000,400);
  Back = createSprite(500,200,1280,720)
  Back.addImage(back)
  Back.scale = 1
  player = createSprite(40,360,32,32)
  player.addImage(bun)
  player.scale = 0.08
  carrot = createSprite(960,40,20,20)
  carrot.addImage(car)
  carrot.scale = 0.07
  BrG = new Group()
}

var game = 0
var v = 1

function draw() {  
   if(frameCount% 22==0){
   genB()
 }
 for(r = 0;r < BrG.length;r +=1 ){
   var g = BrG.get(r)
  if(player.isTouching(g)){
    player.collide(g)
    player.x = 40
    player.y = 360
    game += 2
 
  }
}
  if(game == 0){
    player.x = mouseX
    player.y = mouseY
    }

if(player.isTouching(carrot)){
  carrot.destroy()
    v += 1

}
drawSprites()
if (game == 2){
  fill("white")
  textSize(60)
  text("You Got Hit, Restart!",250,200)

}
 if(v == 2){
 fill("white")
 textSize(60)
 text("You Have Collected the Carrot!",100,200)
 game+=1
}
}
