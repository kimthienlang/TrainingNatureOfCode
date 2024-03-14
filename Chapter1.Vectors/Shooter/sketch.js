let rect_1;
let vel;
let p_rect;
let bullet;
let velB;

function setup() {
  createCanvas(800, 400);
  rect_1 = createVector(width/2 - 25, height - 160);
  vel = createVector(0, 0);
  bullet = createVector(0, 0);
  velB = createVector(1, 1);
}

function draw() {
  background(220);
  
  stroke(0);
  strokeWeight(3);
  
  rect_1.add(vel);
  rect(rect_1.x, rect_1.y, 50, 60);
  
  p_rect = createVector(rect_1.x + 25, rect_1.y + 30);
  
  stroke(0);
  strokeWeight(2);
  line(0, height - 100, width, height - 100);
  line(p_rect.x, p_rect.y, mouseX, mouseY);
  
  if (mouseIsPressed){
    bullet = createVector(mouseX, mouseY);
    velB = p5.Vector.sub(createVector(mouseX, mouseY), p_rect); 
    velB.limit(5);
    //velB.setMag(10);
  }
  strokeWeight(8);
  bullet.add(velB);
  point(bullet.x, bullet.y);
}

function keyPressed() {
  if (keyCode === LEFT_ARROW) {
    vel.x = -1;
  } else 
  if (keyCode === RIGHT_ARROW) {
    vel.x = 1;
  }
  
}