const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1,pig,log,log2,log3,log4,ball10,log11,log12,log13,bird10,bird11,bird12,log15,log16,log17,bird13

function setup(){
    var canvas = createCanvas(windowWidth,windowHeight);
    engine = Engine.create();
    world = engine.world;

    
    ground = new Ground(200,height,width+1200,20)
    pig=new Pig(200,100)
    log= new Box(1000,700,50,100)
    log2= new Box(600,700,50,100)
    log4= new Box(1000,450,50,100)
    log5= new Box(600,450,50,100)
    log3= new Box(800,550,600,30)
    log10= new Box(800,250,600,30)
    log11= new Box(600,170,50,100)
    log12= new Box(1000,170,50,100)
    log13= new Box(800,100,600,30)
    log15= new Box(700,60,50,150)
    log16= new Box(900,60,50,150)
    log17= new Box(800,20,300,30)
    ball10=new Ball(200,200,90)
    bird10=new bird(800,130,90)
    bird11=new bird(800,280,90)
    bird12=new bird(800,600,90)
    bird13=new bird(800,40,90)
    
}
function draw(){
    background("lightblue");
    Engine.update(engine);
   
   
    ground.display();
   
    log.display();
    log2.display();
    log3.display();
    log4.display();
    log5.display();
    log10.display();
    log11.display();
    log12.display();
    log13.display();
    log15.display();
    log16.display();
    log17.display();
   

    ball10.display();
    bird10.display();
    bird11.display();
    bird12.display();
    bird13.display();
}