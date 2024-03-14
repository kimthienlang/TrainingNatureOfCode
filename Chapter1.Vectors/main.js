let ball1, ball2, ball3, ball4;

function setup() {
  createCanvas(800, 600);
  ball1 = new Ball(100, 300);
  ball2 = new Ball(300, 300);
  ball3 = new Ball(500, 300);
  ball4 = new Ball(300, 150);
}

function draw() {
  background(220);
  
  let diff1 = p5.Vector.sub(ball1.pos, ball3.pos).normalize();
  let diff2 = p5.Vector.sub(ball3.pos, ball1.pos).normalize();
  let diff4 = p5.Vector.sub(ball4.pos, ball1.pos).normalize();
  let diff5 = p5.Vector.sub(ball4.pos, ball3.pos).normalize();
 
  
  ball1.force(diff2);
  ball1.force(diff4);
  ball3.force(diff1);
  ball3.force(diff5);
 
  ball1.update();
  ball3.update();
  
  
  ball1.show();
  ball2.show();
  ball3.show();
  ball4.show();
  
}