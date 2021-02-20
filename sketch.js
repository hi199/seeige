const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, box2,box3,box4,box5,box6,box8;
var backgroundImg,platform;
var polygon, slingshot;
var score = 0
function preload(){
    polygon_Img=loadImage("polygon.png")    
}
function setup(){
    var canvas = createCanvas(1200,400);
  
    engine = Engine.create();
    world = engine.world;
    polygon=Bodies.circle(700,230,20)
    World.add(world,polygon)
    
    ground = new Ground(600,height,1200,20);
    stand= new Ground(390,300,250,10);
    box1 = new Box(330,290,30,40);
    box2 = new Box(360,290,30,40);
    box3 = new Box(390,290,30,40);
    box4 = new Box(420,290,30,40);
    box5 = new Box(450,290,30,40);
    box6 = new Box(360,250,30,40);
    box7 = new Box(390,250,30,40);
    box8 =  new Box(420,250,30,40);
    box9 = new Box(390,210,30,40)
    slingshot = new SlingShot(this.polygon,{x:100, y:200});

}
function draw(){
    background("purple");
    imageMode(CENTER)
    image(polygon_Img,polygon.position.x,polygon.position.y,40,40); 
    noStroke();
    textSize(35)
    fill("white")
    text("Score  " + score, width-300, 50)

Engine.update(engine);
strokeWeight(4);
box1.display();
box2.display();
ground.display();
box5.display();
box6.display();
box7.display();
box3.display();
box4.display();
box8.display();
box9.display();
stand.display();
stand2.display();
slingshot.display();

}

function mouseDragged(){
   Matter.Body.setPosition(this.polygon,{x:mouseX,y:mouseY});
   }
 function mouseReleased(){ 
   slingshot.fly();
   } 
function keyPressed(){
   if(keyCode === 32){ 
     slingshot.attach(this.polygon); 
    }
   }


