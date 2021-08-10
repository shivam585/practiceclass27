class Log2 {
    constructor(x, y) {
        var options4 = {
            'restitution':0.1,
            'friction':0.1,
            'density':1.0
        }
        this.body = Bodies.rectangle(x, y, 600,100, options4);
        this.width = 600
        this.height = 30

      
        
        World.add(world, this.body);
      }
      display(){
        var pos =this.body.position;
        var angle=this.body.angle
        push();
        translate(pos.x, pos.y);
      
        rectMode(CENTER);
        rotate(angle)
        stroke("brown")
        strokeWeight(10)
        fill("#c1612c");
        rect(0, 0, this.width, this.height);
        pop();
      }
    };