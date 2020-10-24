class rope 
{
    constructor(bodyA,bodyB,offsetX,offsetY)
    {

        
    var options=
    {
        bodyA:bodyA,
        bodyB:bodyB,
        //length:10,
        //stiffness:0.05,
        pointB:{x:this.offsetX,y:this.offsetY}

    }
    this.offsetX=offsetX;
        this.offsetY=offsetY;

    

    this.ropeObject=Constraint.create(options);
    World.add(world,this.ropeObject);

    }

    display()
    {
        line(this.ropeObject.bodyA.position.x,this.ropeObject.bodyA.position.y,this.ropeObject.bodyB.position.x,this.ropeObject.bodyB.position.y);
    }
}