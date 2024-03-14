let balls = [];
let holes = [];
let mousePress = false;

function setup() {
  createCanvas(800, 800);
  for (let i = 0; i < 20; ++i)
    balls[i] = new Ball(random(0, width), random(0, height));
  
  holes[0] = new Hole(100, 100);
  holes[1] = new Hole(700, 100);
  holes[2] = new Hole(100, 700);
  holes[3] = new Hole(700, 700);
  holes[4] = new Hole(400, 400);
}

function draw() {
  background(220);
  
  for (let hole of holes) hole.show();
  
  for (let i = 0; i < balls.length; ++i){
    let mouse = createVector(mouseX, mouseY);
    let dis = p5.Vector.sub(mouse, balls[i].pos);
    if(dis.mag() <= balls[i].s){
      
      if(balls[i].acc != 0)
        balls[i].acc = p5.Vector.random2D().normalize().setMag(30);
    }else 
      balls[i].acc.mult(0);
    
    balls[i].friction();
    balls[i].edges();
    balls[i].update();
    balls[i].show();
  }
  
  for (let hole of holes){
    for (let i = 0; i < balls.length; ++i){    
      let diff = p5.Vector.sub(balls[i].pos, hole.pos);
      if (diff.mag() <= 10) {
        balls.splice(i, 1);
        console.log(balls.length);
      }
   }
  }
  
  
}