
class Paper{
    constructor(){
        var options ={
            
            restitution :0.3,
            friction :0.5,
            density :1.2
            
        }
        this.body = Bodies.circle(250,540,20,options);
        this.width =33;
        this.image = loadImage("paper.png");
        World.add(world, this.body);
    }
    display(){
        fill("white");
       // rotate(this.body.angle);
        imageMode(CENTER);
        image(this.image,this.body.position.x,this.body.position.y,33,33);
    }
}