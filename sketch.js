const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var particles = [];
var plinkos = [];
var divisions = [];
var divisionHeight = 300;

function setup() {
  var canvas = createCanvas(480,800);
    engine = Engine.create();
    world = engine.world;
    ground = new Ground(240,height,500,30);

    for(var k = 0; k<=width; k=k+80){
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
    }
    for(var j = 40; j <=width; j=j+50){
      plinkos.push(new Plinko(j,75));
    }
    for(var j = 15; j <=width; j=j+50){
      plinkos.push(new Plinko(j,175));
    }
    for(var j = 40; j <=width; j=j+50){
      plinkos.push(new Plinko(j,275));
    }
    for(var j = 15; j <=width; j=j+50){
      plinkos.push(new Plinko(j,375));
    }
}

function draw() {
  background(0); 
  Engine.update(engine); 
  ground.display();
  for(var index1=0;index1<divisions.length; index1++){
    divisions[index1].display();
  }

  for(var index=0;index<plinkos.length; index++){
    plinkos[index].display();
  }

  if(frameCount%60===0){
    particles.push(new Particle(random(width/2-10, width/2+10), 10, 10))
  }

  for(var index2=0; index2<particles.length; index2++){
    particles[index2].display();
  }
  
}
