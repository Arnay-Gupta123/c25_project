var rain=[],drop;
var img;
var song;

/*function preload(){
   song = loadSound('drops.mp3');
}*/

function setup() {
  createCanvas(1600,800);
  img = loadImage('c25_img.jpg')
  
  for(var i=0; i<500; i = i +2){
    drop=new Drop(random(0,1600),random(0,800))
    rain.push(drop);
  }

  //song.play();
}

function draw() {
  background(img);
  fill("yellow");
 // rect(600,600,300,400);

  for(var i=0; i<rain.length;i++){
    rain[i].display();
    rain[i].fall();
  }
  
}