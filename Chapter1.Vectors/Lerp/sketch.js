let lerp = 0.09;
let x, y;

function setup() {
  createCanvas(800, 400);
  x = width / 2;
  y = height / 2;
}

function draw() {
  background(200);

  x += lerp * (mouseX - x);
  y += lerp * (mouseY - y);

  stroke(0);
  strokeWeight(3);
  fill(255);
  ellipse(x, y, 32);
}