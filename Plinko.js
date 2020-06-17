class Plinko {
    constructor(x,y,radius) {
      var options = {
          isStatic: true
      }
      this.body = Bodies.circle(x,y,10,options);
      this.radius = 10;
      World.add(world, this.body);
    }
    
    display(){
      ellipseMode(CENTER);
      fill(225, 225, 255);
      ellipse(this.body.position.x, this.body.position.y, 10, 10);
    }
  };
