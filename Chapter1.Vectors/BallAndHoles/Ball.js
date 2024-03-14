class Ball {
    constructor(x, y){
      this.pos = createVector(x, y);
      this.s = 20;
      this.vel = createVector(0, 0);
      this.acc = createVector(0, 0);
      this.m = 4;
      
      this.r = random(0, 255);
      this.g = random(0, 255);
      this.b = random(0, 255);
    }
    
    friction(){
      let fric = this.vel.copy();
      let mu = 0.1;
      let m = this.m;
      
      fric.normalize();
      fric.mult(-1);
      fric.setMag(mu * m);
      
      this.applyForce(fric);
    }
    
    applyForce(force){
      let f = p5.Vector.div(force, this.m);
      this.acc.add(f);
    }
    
    
    edges() {
      
      if (this.pos.y <= 0 + this.s){
        this.pos.y = this.s;
        this.vel.y *= -1;
      }
      else
      if (this.pos.y >= height - this.s){
        this.pos.y = height - this.s;
        this.vel.y *= -1;
      }
      
      if (this.pos.x >= width - this.s){
        this.pos.x = width - this.s;
        this.vel.x *= -1;
      }
      else
      if (this.pos.x <= this.s){
        this.pos.x = this.s;
        this.vel.x *= -1;
      }
    }
    
    update(){
      this.vel.add(this.acc);
      this.pos.add(this.vel);
    }
    
    show(){
      stroke(255);
      strokeWeight(3);
      fill(this.r, this.g, this.b);
      ellipse(this.pos.x, this.pos.y, this.s * 2);
    }
  }