class Ball {
    constructor(x, y){
      this.pos = createVector(x, y);
      this.vel = createVector(0, 0);
      this.acc = createVector(0, 0);
    }
    
    force(f){
      this.acc.add(f);
      stroke(0);
      strokeWeight(3);
      
    }
    
    update(){
      this.vel.add(this.acc).limit(40);
      this.pos.add(this.vel);
      line(this.pos.x, this.pos.y, this.pos.x + this.vel.x * 5, this.pos.y + this.vel.y * 5);
      this.acc.mult(0);
    }
    
    show(){
      stroke(0);
      strokeWeight(2);
      ellipse(this.pos.x, this.pos.y, 50);
    }
  }