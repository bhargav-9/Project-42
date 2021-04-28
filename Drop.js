class rain{
    constructor(x,y,r){
        var Options={
            isStatic:false,
            restitution:0.5,
            density:0.5,
            friction:1
        }
        this.x=x
        this.y=y
        this.r=r
        this.rain=Bodies.circle(x,y,r,Options);
        World.add(world,this.rain)
    }
    display(){
        var pos=this.rain.position;
        var angle=this.rain.angle;
        push()
        translate(pos.x,pos.y)
        rotate(angle)
        noStroke();
        fill("blue")
        ellipseMode(RADIUS)
        ellipse(0,0,this.r,this.r);
        pop();

    }
}