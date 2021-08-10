class Pig {
    constructor(x, y, width, height) {
        var options2 = {
            'restitution':0.8,
            'friction':0.3,
            'density':1.0
        }
        this.body = Bodies.rectangle(x, y, 50,50, options2);
        this.width = 50
        this.height = 50
        
        World.add(world, this.body);
      }
      display(){
        var pos =this.body.position;
      
        push();
        translate(pos.x, pos.y);
        rotate(45);
        rectMode(CENTER);
        stroke("purple")
        strokeWeight(10)
        fill(255);
        rect(0, 0, this.width, this.height);
        pop();
      }
    };