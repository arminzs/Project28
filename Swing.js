class Swing{
	constructor(body,anchor)
	{
		
		var options={ 
            bodyA:body,			 
			pointB:anchor, 
			stiffness:0.004, 
			length:1
			
		}
		
		this.bodyA=body
		this.pointB=anchor
		this.swingObj=Constraint.create(options)
		World.add(world,this.swingObj)
	}

	attach(body){
		this.swingObj.bodyA=body;
	}

	fly()
	{
		this.swingObj.bodyA=null;
	}

	display()
	{
		if(this.swingObj.bodyA)
		{
			var pointA=this.bodyA.position;
			var pointB=this.pointB

			strokeWeight(2);		
			line(pointA.x,pointA.y,pointB.x,pointB.y);
		}
	}
}