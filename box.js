class Box{
    constructor(x, y, width, height){
        var options = {
            //isStatic: true,
            'restitution':0.0,
            'friction':2,
            'density':1.0
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        
        //this.color=color(random(0,255),random(0,255),random(0,255))
        World.add(world, this.body);
        this.box = loadImage("box.png");
        this.Visiblity = 255;
      }
      display(){
        
        //console.log(this.body.speed);
        //push();
        //translate(this.body.position.x, this.body.position.y);
       // rotate(angle);

        if(this.body.speed < 3){
         
          var angle = this.body.angle;
          push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
          imageMode(CENTER);
          image(this.box, 0, 0, this.width, this.height);
          pop();
     // rectMode(CENTER);
      //rect(0, 0, this.width, this.height);
          //this.body.visible=true;
          //World.add(world, this.body);
         }
         else{
          World.remove(world, this.body);
          push();
          this.Visiblity = this.Visiblity - 5;
         tint(255,this.Visiblity);
         image(this.box, 0, 0, this.width, this.height);
         pop();
      };
      

     
         }

         score(){
          if (this.Visiblity < 0 && this.Visiblity > -105){
            score++;
          }
        }
      }
 