class Stone{
    constructor(x, y)
    {
        var stoneOptions={
            isStatic:false,
            restitution:0,
            friction:1,
            density:1.2
        }
        this.r =30;
        this.image=loadImage("images/stone.png");
        this.body=Bodies.circle(x, y, this.r , stoneOptions)
        World.add(myWorld, this.body)
    }
    display()
    {
        imageMode(CENTER);
        var pos=this.body.position;
        image(this.image,pos.x, pos.y,this.r *2, this.r *2)
    }
}