var dog, happyDog;
var database;
var foodS, foodStock;

function preload()
{  
	dogImg = loadImage("images/dogImg.png");
  dogImg1 = loadImage("images/dogImg1.png");
}

function setup() {
	createCanvas(500, 500);

  database = firebase.database();
  console.log(database);

  dog = createSprite(450,250,5,5)
  dog.addImage(dogImg)
  dog.scale = 0.2


  foodStock = database.ref('Food');
    foodStock.on("value",readStock);

   
}


function draw() {  
background(46, 139, 87)
  drawSprites();

  if(keyWentDown(UP_ARROW)){
    writeStock(foodS);
    dog.addImage(dogImg1);
  }

  fill("black");
  textSize(13); 
text("Food remaining:" +foodS,170,200);         
}

function readStock(data){
  foodS = data.val();

}

function writeStock(x){

  if(x<=0){
    x=0;
  }else{
    x=x-1;
  }
  database.ref('/').update({
    Food:x
  })
  }

 




