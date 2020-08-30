//"January 1, 2008 11:10:00"
//var mn = minute();
//var sc = second();

var hourAngle = 0;
var minuteAngle = 0;
var secondAngle = 0;

function setup() {
  createCanvas(800,800);
  //createSprite(400, 200, 50, 50);
}

function draw() {
  background(255,255,255);  

  var date = new Date();
 
  var hourAngle = map(date.getHours(), 0, 24, 0, 360);
  var minuteAngle = map(date.getMinutes(), 0, 60, 0, 360);
  var secondAngle = map(date.getSeconds(), 0, 60, 0, 360);

  if(date.getHours() > 12){
    hourAngle = hourAngle - 90;
  }
  
  angleMode(DEGREES);
  push();
  strokeWeight(20);
  stroke("red");
  fill("white");
  arc(400, 350, 670, 670, -90, secondAngle- 90);
  pop();
  push();
  strokeWeight(15);
  stroke("green");
  fill("white");
  arc(400, 350, 640, 640, -90, minuteAngle - 90);
  pop();
  push();
  strokeWeight(10);
  stroke("blue");
  fill("white");
  arc(400, 350, 615, 615, -90, hourAngle % 12);
  pop();
  
  stroke(0, 0, 255);
  strokeWeight(7);
  push();
  translate(400, 350);
  angleMode(DEGREES);
  rotate(hourAngle % 12);
  /*fill("Blue");
  arc(0, 0, 550, 550, -90, secondAngle);
  fill("orange");
  arc(0, 0, 450, 450, -90, minuteAngle);
  fill("green");
  arc(0, 0, 360, 360, -90, hourAngle);*/
  line(0, 0, 100, 0);
  fill("white");
  /*ellipse(100, 0, 40, 40);
  text(date.getHours(), 95, 5);*/
  pop();
  
  push();
  translate(400, 350);
  angleMode(DEGREES);
  rotate(minuteAngle - 90);
  stroke(0, 255, 0);
  line(0, 0, 200, 0);
  fill("white");
  /*ellipse(200, 0, 40, 40);
  text(date.getMinutes(), 195, 5);*/
  pop();
 
  push();
  translate( 400, 350);
  
  angleMode(DEGREES);
  rotate(secondAngle - 90);
  stroke(255, 0, 0);
  line(0, 0, 300, 0);
  fill("white");
  /*ellipse(280, 0, 40, 40);
  text(date.getSeconds(), 275, 5);*/
  pop();
  console.log(date.getHours());
  fill("#461378");
  stroke("yellow");
  textSize(45);
  text(date.getHours(), 275, 150);
  text(":", 330, 200);
  text(date.getMinutes(), 370, 250);
  text(":", 420, 300);
  text(date.getSeconds(), 460, 350);
  if(date.getHours() > 12){
    text("P.M.", 520, 400);
  }
  else{
    text("A.M.", 520, 400);
  }
  /*angleMode(DEGREES);
  ellipse(200, 400, 5, 5, 0,);
  
  translate(200, 200);
  rotate(0);
  line(0, 0, 200, 0);*/
  
  
  drawSprites();
}