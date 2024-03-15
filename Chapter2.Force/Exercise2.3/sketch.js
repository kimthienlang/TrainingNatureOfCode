class Ball{
    constructor(x, y, m){
      this.m = m;
      this.radius = m * 2;
      this.pos = createVector(x, y);
      this.vel = createVector(0, 0);
      this.acc = createVector(0, 0);
    }
    
    applyForce(f){
      let force = p5.Vector.div(f, this.m);
      this.acc.add(force);
    }
    
    update(){
      this.vel.add(this.acc);
      this.vel.limit(20);
      this.pos.add(this.vel);
      this.acc.mult(0);
    }
    
    show(){
      stroke(0);
      strokeWeight(2);
      ellipse(this.pos.x, this.pos.y, this.radius * 2);
    }
  }
  
  let ball;
  
  function setup() {
    createCanvas(800, 400);
    ball = new Ball(width / 2, 100, 10);
    let f = createVector(200, 0);
    ball.applyForce(f);
  }
  
  function draw() {
    background(170);
    let g = createVector(0, 0.98).mult(ball.m);
    ball.applyForce(g);
    edges(ball);
    windowF(ball);
    friction(ball);
    ball.update();
    ball.show();
  }
  
  function edges(obj){
    let result = 0;
    if(obj.pos.y >= height - obj.radius){
      obj.vel.y *= -1;
      obj.pos.y = height - obj.radius;
    }else 
    if(obj.pos.y <= obj.radius){
      obj.vel.y *= -1;
      obj.pos.y = obj.radius;
    }
    
    if(obj.pos.x >= width - obj.radius){
      obj.vel.x *= -1;
      obj.pos.x = width - obj.radius;
    }else 
    if(obj.pos.x <= obj.radius){
      obj.vel.x *= -1;
      obj.pos.x = obj.radius;
    }
  }
  
  function windowF(obj){
    let diff = obj.pos.x;
    if (diff < 300){
      let f1 = createVector(1, 0);
      f1.setMag(500/diff);
      obj.applyForce(f1);
    }
  
    if (diff > width - 300){
      let f2 = createVector(-1, 0);
      f2.setMag(500/(width - diff));
      obj.applyForce(f2);
    }
  }
  
  function friction(obj){
    if(obj.pos.y <= height - obj.radius){
      let f = obj.vel.copy();
      let u = 0.068;
      f.normalize();
      f.mult(-1);
      f.setMag(u * obj.m);
      obj.applyForce(f);
    }
  }