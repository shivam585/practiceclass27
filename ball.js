class Ball{
	constructor(x,y,r)
	{
	

		var options={
			restitution:0.3,
		 	friction:5,
		 	density:1
		 }



		this.x=x;
		this.y=y;
		this.r=r
		

		 this.body=Bodies.circle(this.x, this.y, (this.r-20)/2, options)
		 World.add(world, this.body);

	

	}
	display()
	{
		    var BallPos=this.body.position;	
			BallPos.x = mouseX;
			BallPos.y = mouseY;	
		    push()
		    translate(BallPos.x,BallPos.y);
			rectMode(CENTER)
			strokeWeight(4);
			stroke("black");
			fill("red");
			 ellipse(0,0,this.r, this.r);
		
			pop()
	}

}