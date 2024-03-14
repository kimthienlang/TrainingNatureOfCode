class Hole {
    constructor(x, y){
      this.pos = createVector(x, y);
      this.s = 23;
    }
    
    update(){
      
    }
    
    show(){
      stroke(255);
      strokeWeight(3);
      fill(0);
      ellipse(this.pos.x, this.pos.y, this.s * 2 + 3);
    }
  }