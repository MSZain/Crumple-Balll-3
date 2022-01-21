class Launcher {
    constructor(bodyA,pointB){
       
        var options = {
            bodyA: bodyA,
            pointB:pointB,
            resistance:0.2,
            stiffness:0.01,
            length :10
            }
        
        this.pointB=pointB;
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }
 fly()
 {
     this.sling.bodyA=null;
 }

    display(){
////console.log(this.sling.bodyB.position)

       if(this.sling.bodyA){
        stroke("black");
        strokeWeight(5);
        line(this.sling.bodyA.position.x, this.sling.bodyA.position.y, this.pointB.x,this.pointB.y);
       }
    
} 
}