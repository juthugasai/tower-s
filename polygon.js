class Polygon{


    constructor(x,y){
    
    
        var options={
            isStatic:false,
            restitution:0,
                friction:1,
                density:1.2
    }
    
    
    this.body = Bodies.rectangle(x, y,40,40,options)

    this.width =40;
    this.height=40;
    World.add(world, this.body)
    this.polygon = loadImage("hexagon.png");
    
    
    
    }
    
    
    
    
    display(){
    
    
    
        push();
        translate(this.body.position.x, this.body.position.y);
        //rotate(angle);
        imageMode(CENTER);
        image(this.polygon, 0, 0, this.width, this.height);
        //line(pointA.x, pointA.y, pointB.x, pointB.y);
        pop();
}
}