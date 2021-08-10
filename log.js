class Log {
    constructor(x, y) {
        var options3 = {
            'restitution':0.1,
            'friction':5,
            'density':0.1
        }
        this.body = Bodies.rectangle(x, y, 30,100, options3);
        this.width = 100
        this.height = 30
        
        World.add(world, this.body);
      }
      display(){
        var pos =this.body.position;
        var angle=this.body.angle
        push();
        translate(pos.x, pos.y);
      rotate(angle)
        rectMode(CENTER);
        stroke("brown")
        strokeWeight(10)
        fill("#c1612c");
        rect(0, 0, this.width, this.height);
        pop();
      }
    };