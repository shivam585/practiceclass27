class bird{
    constructor(x,y,r){
    var options20={
        'restitution':0.8,
        'friction':0.3,
        'density':1.0
    
    
    }
    
    this.x=x
    this.y=y
    this.r=r
    
    this.body=Bodies.circle(this.x,this.y,(this.r-20)/2,options20)
    World.add(world,this.body)
    
    }
    
    display(){
    var birdpos=this.body.position;
    
    push()
    translate(birdpos.x,birdpos.y)
    rectMode(CENTER)
                strokeWeight(4);
                stroke("black");
                fill("lightgreen");
                ellipse(0,0,this.r,this.r)
    pop()
    
    
    
    
    
    
    
    
    
    
    
    
    
    }
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    }