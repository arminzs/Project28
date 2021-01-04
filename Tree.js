class Tree
{
    constructor(x, y){
         
        this.width=10;
        this.height=500;
        this.image =loadImage("images/tree.png")
        //actual physics body width is reduced to make the stone touch the mangoes
        this.body=Bodies.rectangle(x,y,this.width, this.height,{isStatic:true});
        World.add(myWorld, this.body);

    }
    display()
    {
        push()
        imageMode(CENTER)
        var pos=this.body.position;
        //translate(pos.x, pos.y)

        image(this.image, pos.x, pos.y, this.width+310, this.height) //increased the image's width 
        pop ();
    }
}