//Create variables here
var dogimage, happydog, database, foodS, foodStock, dog

function preload()
{
	//load images here
  dogimage = loadImage("Dog.png")

  happydog = loadImage("happydog.png")
}

function setup() {
	createCanvas(500, 500);
  database = firebase.database ()
  foodStock = database.ref ("Food")
foodStock.on("value", readStock)
  dog = createSprite(250, 300, 50, 50)
  dog.addImage(dogimage)
dog.scale = 0.2
}


function draw() {  
background(46,139, 87)

if(keyWentDown(UP_ARROW))
{
writeStock(foodS)
dog.addImage(happydog)
}
  drawSprites();
  //add styles here
  fill ("white")

  text("Food Remaining:" + foodS, 180, 200)
  text("NOTE: Press the UP ARROW to feed Bruno!", 120, 20)
textSize(10)

}



function readStock(data)
{
foodS = data.val()
console.log(foodS)
}



function writeStock(x)
{
  if(x<=0)
  {
    x = 0
  }  else 
  {
  x =x -1
  }
  
database.ref("/").update({Food: x})
}