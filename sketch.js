const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var base1,base2;
var b1,b2,b3,b4,b5,b6,b7,b8,b9,b10,b11,b12,b13,b14,b15;
var b16,b17,b18,b19,b20,b21,b22,b23,b24;
var polygon,sling;
var score=0;
var ground
//var polygon_img;

function preload(){


  //polygon_img=loadImage("hexagon.png");


}
function setup() {
  var canvas =createCanvas(1200,400);
  engine = Engine.create();
    world = engine.world;

   
 //image(polygon_img,position.x,position.y);

  base1 =new Ground (500, 350, 250, 10);
  base2 =new Ground (1000,200, 200, 10);
  //Base1
  //level one
  b1 = new Box(510,324,30,40); 
  b2 = new Box(480,324,30,40);
  b3 = new Box(540,324,30,40);
  b4 = new Box(450,324,30,40);
  b5 = new Box(420,324,30,40);
  b6 = new Box(570,324,30,40);
  //level two
  b7 = new Box(430,284,30,40);
  b8 = new Box(460,284,30,40); 
  b9 = new Box(490,284,30,40);
  b10= new Box(520,284,30,40);
  b11= new Box(550,284,30,40);
  //level three
  b12= new Box(460,244,30,40);
  b13= new Box(490,244,30,40)
  b14= new Box(520,244,30,40)
  //Top
  b15= new Box(490,204,30,40)

  //Base2
  //level one 
  b16= new Box(1000,174,30,40);
  b17= new Box(970,174,30,40);
  b18= new Box(1030,174,30,40);
  b19= new Box(940,174,30,40);
  b20= new Box(1060,174,30,40);
  //level two
  b21= new Box(1000,135,30,40);
  b22= new Box(1030,135,30,40);
  b23= new Box(970,135,30,40);
  //Top
  b24= new Box(1000,95,30,40);

  ground=new Ground(600,390,1200,20)

  

  polygon=new Polygon(100,200) 
  //polygon.scale=0.2;
  sling= new SlingShot(polygon.body,{x:100,y:200})

       
  
  


  
}
function draw() {

  //noStroke();
  //textSize(35)
  //fill("white")
  text("Score : ",score,200,200);


 Engine.update(engine);

 //imageMode(CENTER);
 //image(polygon_img,polygon.position.x,polygon.position.y,40,40);
 
  background(220);  
  drawSprites();



  b1.score();
  b2.score();
 b3.score();
 b4.score();
 b5.score();
 b6.score();
 b7.score();
 b8.score();
 b9.score();
 b10.score();
 b11.score();
 b12.score();
 b13.score();
 b14.score();
 b15.score();
 b16.score();
 b17.score();
 b18.score();
 b19.score();
 b20.score();
 b21.score();
 b22.score();
 b23.score();
 b24.score();

base1.display();
 base2.display();
 b1.display();
 b2.display();
 b3.display();
 b4.display();
 b5.display();
 b6.display();
 b7.display();
 b8.display();
 b9.display();
 b10.display();
 b11.display();
 b12.display();
 b13.display();
 b14.display();
 b15.display();
 b16.display();
 b17.display();
 b18.display();
 b19.display();
 b20.display();
 b21.display();
 b22.display();
 b23.display();
 b24.display();
 polygon.display();
 sling.display();

 ground.display();
}
function mouseDragged(){
  //if (gameState!=="launched"){
      Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});
  //}
}


function mouseReleased(){
  sling.fly();
  //gameState = "launched";
}
function keyPressed(){
  if(keyCode === 32){
      
     Matter.Body.setPosition(polygon.body,{x:100,y:200});
      sling.attach(polygon.body);
  }
}